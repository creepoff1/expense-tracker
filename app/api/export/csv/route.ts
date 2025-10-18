import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { generateCSVContent } from "@/lib/utils";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const from = searchParams.get("from");
    const to = searchParams.get("to");
    const categoryId = searchParams.get("categoryId");

    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Build where clause
    const where: any = {
      userId: user.id,
    };

    if (from || to) {
      where.date = {};
      if (from) where.date.gte = new Date(from);
      if (to) where.date.lte = new Date(to);
    }

    if (categoryId) {
      where.categoryId = categoryId;
    }

    // Get all expenses (no pagination for export)
    const expenses = await prisma.expense.findMany({
      where,
      include: {
        category: true,
      },
      orderBy: { date: "desc" },
    });

    const csvContent = generateCSVContent(expenses);
    const filename = `expenses_${new Date().toISOString().slice(0, 7)}.csv`;

    return new NextResponse(csvContent, {
      status: 200,
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    });
  } catch (error) {
    console.error("Export CSV error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
