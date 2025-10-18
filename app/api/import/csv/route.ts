import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { parseCSVContent, parseDate } from "@/lib/utils";
import { expenseCreateSchema } from "@/lib/zod-schemas";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    if (file.type !== "text/csv" && !file.name.endsWith(".csv")) {
      return NextResponse.json(
        { error: "File must be a CSV" },
        { status: 400 }
      );
    }

    const content = await file.text();
    const rows = parseCSVContent(content);

    if (rows.length === 0) {
      return NextResponse.json(
        { error: "No data found in CSV" },
        { status: 400 }
      );
    }

    if (rows.length > 5000) {
      return NextResponse.json(
        { error: "CSV contains too many rows (max 5000)" },
        { status: 400 }
      );
    }

    // Get user's categories for mapping
    const categories = await prisma.category.findMany({
      where: { userId: user.id },
    });

    const categoryMap = new Map(
      categories.map(cat => [cat.name.toLowerCase(), cat.id])
    );

    // Validate and transform data
    const expensesToCreate: any[] = [];
    const errors: string[] = [];

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const rowNum = i + 2; // +2 because CSV is 1-indexed and we skip header

      try {
        // Map CSV columns to our format
        const expenseData = {
          amount: parseFloat(row.amount || row.amount_cents || "0"),
          currency: row.currency || "USD",
          date: row.date || row.date_created,
          note: row.note || row.description || "",
          categoryId: undefined as string | undefined,
        };

        // Find category by name
        if (row.category) {
          const categoryId = categoryMap.get(row.category.toLowerCase());
          if (categoryId) {
            expenseData.categoryId = categoryId;
          }
        }

        // Validate the data
        const parsed = expenseCreateSchema.safeParse(expenseData);
        if (!parsed.success) {
          errors.push(`Row ${rowNum}: ${parsed.error.errors.map(e => e.message).join(", ")}`);
          continue;
        }

        expensesToCreate.push({
          amountCents: Math.round(parsed.data.amount * 100),
          currency: parsed.data.currency,
          date: parseDate(parsed.data.date),
          note: parsed.data.note,
          categoryId: parsed.data.categoryId,
          userId: user.id,
        });
      } catch (error) {
        errors.push(`Row ${rowNum}: Invalid data format`);
      }
    }

    if (errors.length > 0) {
      return NextResponse.json(
        { error: "Validation errors", details: errors },
        { status: 400 }
      );
    }

    // Create expenses in a transaction
    const result = await prisma.$transaction(async (tx) => {
      const createdExpenses = [];
      for (const expense of expensesToCreate) {
        const created = await tx.expense.create({
          data: expense,
          include: {
            category: true,
          },
        });
        createdExpenses.push(created);
      }
      return createdExpenses;
    });

    return NextResponse.json({
      message: `Successfully imported ${result.length} expenses`,
      count: result.length,
    });
  } catch (error) {
    console.error("Import CSV error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
