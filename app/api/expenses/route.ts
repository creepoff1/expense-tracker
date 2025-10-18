import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { expenseCreateSchema, expenseQuerySchema } from "@/lib/zod-schemas";
import { measureApiRoute } from "@/lib/performance-monitor";

export async function GET(req: Request) {
  return measureApiRoute('expenses.get', async () => {
    try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const queryParams = Object.fromEntries(searchParams.entries());
    const parsed = expenseQuerySchema.safeParse(queryParams);
    
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid query parameters", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { from, to, categoryId, q, page, limit } = parsed.data;
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

    if (q) {
      where.note = {
        contains: q,
        mode: "insensitive",
      };
    }

    // Get total count and sum
    const [total, sumResult] = await Promise.all([
      prisma.expense.count({ where }),
      prisma.expense.aggregate({
        where,
        _sum: { amountCents: true },
      }),
    ]);

    // Get expenses with pagination using optimized relation loading
    const expenses = await prisma.expense.findMany({
      where,
      include: {
        category: true,
      },
      orderBy: { date: "desc" },
      skip: (page - 1) * limit,
      take: limit,
    });

    return NextResponse.json({
      items: expenses,
      total,
      page,
      limit,
      sumCents: sumResult._sum.amountCents || 0,
    });
    } catch (error) {
      console.error("Get expenses error:", error);
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 }
      );
    }
  }, { method: 'GET' });
}

export async function POST(req: Request) {
  return measureApiRoute('expenses.post', async () => {
    try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const parsed = expenseCreateSchema.safeParse(body);
    
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { amount, currency, date, note, categoryId } = parsed.data;
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Verify category belongs to user if provided
    if (categoryId) {
      const category = await prisma.category.findFirst({
        where: { id: categoryId, userId: user.id }
      });
      if (!category) {
        return NextResponse.json(
          { error: "Category not found" },
          { status: 404 }
        );
      }
    }

    const expense = await prisma.expense.create({
      data: {
        amountCents: Math.round(amount * 100),
        currency,
        date: new Date(date),
        note,
        userId: user.id,
        categoryId,
      },
      include: {
        category: true,
      },
    });

    return NextResponse.json(expense, { status: 201 });
    } catch (error) {
      console.error("Create expense error:", error);
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 }
      );
    }
  }, { method: 'POST' });
}
