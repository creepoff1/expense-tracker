import { prisma } from './prisma';

/**
 * Optimized query utilities using Prisma best practices
 */

export interface OptimizedExpenseQuery {
  userId: string;
  from?: Date;
  to?: Date;
  categoryId?: string;
  search?: string;
  page?: number;
  limit?: number;
}

/**
 * Get expenses with optimized relation loading and caching
 */
export async function getOptimizedExpenses({
  userId,
  from,
  to,
  categoryId,
  search,
  page = 1,
  limit = 20,
}: OptimizedExpenseQuery) {
  // Build optimized where clause
  const where: any = {
    userId,
  };

  if (from || to) {
    where.date = {};
    if (from) where.date.gte = from;
    if (to) where.date.lte = to;
  }

  if (categoryId) {
    where.categoryId = categoryId;
  }

  if (search) {
    where.note = {
      contains: search,
      mode: "insensitive",
    };
  }

  // Use Promise.all for parallel execution
  const [total, sumResult, expenses] = await Promise.all([
    prisma.expense.count({ where }),
    prisma.expense.aggregate({
      where,
      _sum: { amountCents: true },
    }),
    prisma.expense.findMany({
      where,
      include: {
        category: true,
      },
      orderBy: { date: "desc" },
      skip: (page - 1) * limit,
      take: limit,
    }),
  ]);

  return {
    items: expenses,
    total,
    page,
    limit,
    sumCents: sumResult._sum.amountCents || 0,
  };
}

/**
 * Get user categories with optimized query
 */
export async function getOptimizedCategories(userId: string) {
  return prisma.category.findMany({
    where: { userId },
    orderBy: { name: "asc" },
  });
}

/**
 * Get expense statistics with optimized aggregation
 */
export async function getExpenseStats(userId: string, from?: Date, to?: Date) {
  const where: any = { userId };
  
  if (from || to) {
    where.date = {};
    if (from) where.date.gte = from;
    if (to) where.date.lte = to;
  }

  const [totalExpenses, totalAmount, categoryStats] = await Promise.all([
    prisma.expense.count({ where }),
    prisma.expense.aggregate({
      where,
      _sum: { amountCents: true },
      _avg: { amountCents: true },
    }),
    prisma.expense.groupBy({
      by: ['categoryId'],
      where,
      _sum: { amountCents: true },
      _count: { id: true },
    }),
  ]);

  return {
    totalExpenses,
    totalAmountCents: totalAmount._sum.amountCents || 0,
    averageAmountCents: totalAmount._avg.amountCents || 0,
    categoryStats,
  };
}

/**
 * Batch create expenses with optimized transaction
 */
export async function batchCreateExpenses(
  userId: string,
  expenses: Array<{
    amountCents: number;
    currency: string;
    date: Date;
    note?: string;
    categoryId?: string;
  }>
) {
  return prisma.$transaction(
    expenses.map((expense) =>
      prisma.expense.create({
        data: {
          ...expense,
          userId,
        },
        include: {
          category: true,
        },
      })
    )
  );
}
