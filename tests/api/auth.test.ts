import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { prisma } from '../lib/prisma';
import bcrypt from 'bcryptjs';

describe('Auth API', () => {
  beforeAll(async () => {
    // Clean up any existing test data
    await prisma.expense.deleteMany();
    await prisma.category.deleteMany();
    await prisma.user.deleteMany();
  });

  afterAll(async () => {
    // Clean up test data
    await prisma.expense.deleteMany();
    await prisma.category.deleteMany();
    await prisma.user.deleteMany();
  });

  it('should register a new user', async () => {
    const hashedPassword = await bcrypt.hash('password123', 12);
    
    const user = await prisma.user.create({
      data: {
        email: 'test@example.com',
        password: hashedPassword,
      },
    });

    expect(user).toBeDefined();
    expect(user.email).toBe('test@example.com');
    expect(user.id).toBeDefined();
  });

  it('should not allow duplicate emails', async () => {
    const hashedPassword = await bcrypt.hash('password123', 12);
    
    await expect(
      prisma.user.create({
        data: {
          email: 'test@example.com',
          password: hashedPassword,
        },
      })
    ).rejects.toThrow();
  });

  it('should verify password hash', async () => {
    const user = await prisma.user.findUnique({
      where: { email: 'test@example.com' }
    });

    expect(user).toBeDefined();
    
    const isValid = await bcrypt.compare('password123', user!.password);
    expect(isValid).toBe(true);
  });
});
