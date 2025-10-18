import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { prisma } from '../lib/prisma';
import bcrypt from 'bcryptjs';

describe('Expenses API', () => {
  let userId: string;
  let categoryId: string;

  beforeAll(async () => {
    // Clean up any existing test data
    await prisma.expense.deleteMany();
    await prisma.category.deleteMany();
    await prisma.user.deleteMany();

    // Create test user
    const hashedPassword = await bcrypt.hash('password123', 12);
    const user = await prisma.user.create({
      data: {
        email: 'test@example.com',
        password: hashedPassword,
      },
    });
    userId = user.id;

    // Create test category
    const category = await prisma.category.create({
      data: {
        name: 'Test Category',
        color: '#3b82f6',
        userId,
      },
    });
    categoryId = category.id;
  });

  afterAll(async () => {
    // Clean up test data
    await prisma.expense.deleteMany();
    await prisma.category.deleteMany();
    await prisma.user.deleteMany();
  });

  it('should create an expense', async () => {
    const expense = await prisma.expense.create({
      data: {
        amountCents: 1234, // $12.34
        currency: 'USD',
        date: new Date('2024-01-15'),
        note: 'Test expense',
        userId,
        categoryId,
      },
    });

    expect(expense).toBeDefined();
    expect(expense.amountCents).toBe(1234);
    expect(expense.currency).toBe('USD');
    expect(expense.note).toBe('Test expense');
    expect(expense.userId).toBe(userId);
    expect(expense.categoryId).toBe(categoryId);
  });

  it('should filter expenses by date range', async () => {
    const expenses = await prisma.expense.findMany({
      where: {
        userId,
        date: {
          gte: new Date('2024-01-01'),
          lte: new Date('2024-01-31'),
        },
      },
    });

    expect(expenses).toHaveLength(1);
    expect(expenses[0].amountCents).toBe(1234);
  });

  it('should calculate total expenses', async () => {
    const result = await prisma.expense.aggregate({
      where: { userId },
      _sum: { amountCents: true },
    });

    expect(result._sum.amountCents).toBe(1234);
  });

  it('should update an expense', async () => {
    const expense = await prisma.expense.findFirst({
      where: { userId },
    });

    const updated = await prisma.expense.update({
      where: { id: expense!.id },
      data: { amountCents: 2000 },
    });

    expect(updated.amountCents).toBe(2000);
  });

  it('should delete an expense', async () => {
    const expense = await prisma.expense.findFirst({
      where: { userId },
    });

    await prisma.expense.delete({
      where: { id: expense!.id },
    });

    const deleted = await prisma.expense.findUnique({
      where: { id: expense!.id },
    });

    expect(deleted).toBeNull();
  });
});
