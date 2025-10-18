import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { prisma } from '../../lib/prisma';
import bcrypt from 'bcryptjs';

describe('Auth API', () => {
  beforeAll(async () => {
    // Clean up any existing test data
    try {
      await prisma.expense.deleteMany();
      await prisma.category.deleteMany();
      await prisma.user.deleteMany();
    } catch (error) {
      // Ignore errors if tables don't exist
      console.log('Tables not found, skipping cleanup');
    }
  });

  afterAll(async () => {
    // Clean up test data
    try {
      await prisma.expense.deleteMany();
      await prisma.category.deleteMany();
      await prisma.user.deleteMany();
    } catch (error) {
      // Ignore errors if tables don't exist
      console.log('Tables not found, skipping cleanup');
    }
  });

  it('should register a new user', async () => {
    const hashedPassword = await bcrypt.hash('password123', 12);
    const uniqueEmail = `test-${Date.now()}@example.com`;
    
    const user = await prisma.user.create({
      data: {
        email: uniqueEmail,
        password: hashedPassword,
      },
    });

    expect(user).toBeDefined();
    expect(user.email).toBe(uniqueEmail);
    expect(user.id).toBeDefined();
  });

  it('should not allow duplicate emails', async () => {
    const hashedPassword = await bcrypt.hash('password123', 12);
    const duplicateEmail = `duplicate-${Date.now()}@example.com`;
    
    // Create first user
    await prisma.user.create({
      data: {
        email: duplicateEmail,
        password: hashedPassword,
      },
    });
    
    // Try to create second user with same email
    await expect(
      prisma.user.create({
        data: {
          email: duplicateEmail,
          password: hashedPassword,
        },
      })
    ).rejects.toThrow();
  });

  it('should verify password hash', async () => {
    const hashedPassword = await bcrypt.hash('password123', 12);
    const verifyEmail = `verify-${Date.now()}@example.com`;
    
    const user = await prisma.user.create({
      data: {
        email: verifyEmail,
        password: hashedPassword,
      },
    });

    expect(user).toBeDefined();
    
    const isValid = await bcrypt.compare('password123', user.password);
    expect(isValid).toBe(true);
    
    const isInvalid = await bcrypt.compare('wrongpassword', user.password);
    expect(isInvalid).toBe(false);
  });
});
