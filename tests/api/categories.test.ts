import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { prisma } from '../../lib/prisma';
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
    const uniqueEmail = `categories-test-${Date.now()}@example.com`;
    const user = await prisma.user.create({
      data: {
        email: uniqueEmail,
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

  it('should allow duplicate category names for same user', async () => {
    const duplicateCategory = await prisma.category.create({
      data: {
        name: 'Food',
        color: '#3b82f6',
        userId,
      },
    });

    expect(duplicateCategory).toBeDefined();
    expect(duplicateCategory.name).toBe('Food');
    expect(duplicateCategory.userId).toBe(userId);
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
    // Create a user first
    const hashedPassword = await bcrypt.hash('password123', 12);
    const uniqueEmail = `update-test-${Date.now()}@example.com`;
    const user = await prisma.user.create({
      data: {
        email: uniqueEmail,
        password: hashedPassword,
      },
    });

    // Create a category
    const category = await prisma.category.create({
      data: {
        name: 'Test Category',
        color: '#ef4444',
        userId: user.id,
      },
    });

    const updated = await prisma.category.update({
      where: { id: category.id },
      data: { name: 'Groceries', color: '#22c55e' },
    });

    expect(updated.name).toBe('Groceries');
    expect(updated.color).toBe('#22c55e');

    // Clean up
    await prisma.category.delete({ where: { id: category.id } });
    await prisma.user.delete({ where: { id: user.id } });
  });

  it('should delete a category', async () => {
    // Create a user first
    const hashedPassword = await bcrypt.hash('password123', 12);
    const uniqueEmail = `delete-test-${Date.now()}@example.com`;
    const user = await prisma.user.create({
      data: {
        email: uniqueEmail,
        password: hashedPassword,
      },
    });

    // Create a category
    const category = await prisma.category.create({
      data: {
        name: 'Test Category',
        color: '#ef4444',
        userId: user.id,
      },
    });

    await prisma.category.delete({
      where: { id: category.id },
    });

    const deleted = await prisma.category.findUnique({
      where: { id: category.id },
    });

    expect(deleted).toBeNull();

    // Clean up
    await prisma.user.delete({ where: { id: user.id } });
  });
});
