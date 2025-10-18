import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { prisma } from '../lib/prisma';
import bcrypt from 'bcryptjs';

describe('Categories API', () => {
  let userId: string;

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
  });

  afterAll(async () => {
    // Clean up test data
    await prisma.expense.deleteMany();
    await prisma.category.deleteMany();
    await prisma.user.deleteMany();
  });

  it('should create a category', async () => {
    const category = await prisma.category.create({
      data: {
        name: 'Food',
        color: '#ef4444',
        userId,
      },
    });

    expect(category).toBeDefined();
    expect(category.name).toBe('Food');
    expect(category.color).toBe('#ef4444');
    expect(category.userId).toBe(userId);
  });

  it('should not allow duplicate category names for same user', async () => {
    await expect(
      prisma.category.create({
        data: {
          name: 'Food',
          color: '#3b82f6',
          userId,
        },
      })
    ).rejects.toThrow();
  });

  it('should allow same category name for different users', async () => {
    // Create another user
    const hashedPassword = await bcrypt.hash('password123', 12);
    const user2 = await prisma.user.create({
      data: {
        email: 'test2@example.com',
        password: hashedPassword,
      },
    });

    const category = await prisma.category.create({
      data: {
        name: 'Food',
        color: '#3b82f6',
        userId: user2.id,
      },
    });

    expect(category).toBeDefined();
    expect(category.name).toBe('Food');
    expect(category.userId).toBe(user2.id);

    // Clean up
    await prisma.category.delete({ where: { id: category.id } });
    await prisma.user.delete({ where: { id: user2.id } });
  });

  it('should update a category', async () => {
    const category = await prisma.category.findFirst({
      where: { userId },
    });

    const updated = await prisma.category.update({
      where: { id: category!.id },
      data: { name: 'Groceries', color: '#22c55e' },
    });

    expect(updated.name).toBe('Groceries');
    expect(updated.color).toBe('#22c55e');
  });

  it('should delete a category', async () => {
    const category = await prisma.category.findFirst({
      where: { userId },
    });

    await prisma.category.delete({
      where: { id: category!.id },
    });

    const deleted = await prisma.category.findUnique({
      where: { id: category!.id },
    });

    expect(deleted).toBeNull();
  });
});
