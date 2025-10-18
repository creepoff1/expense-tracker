import { z } from "zod";

// Auth schemas
export const registerSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

// Expense schemas
export const expenseCreateSchema = z.object({
  amount: z.number().positive("Amount must be positive"),
  currency: z.string().min(3).max(3).default("USD"),
  date: z.string().datetime().or(z.string().min(10)), // ISO or YYYY-MM-DD
  note: z.string().max(280).optional(),
  categoryId: z.string().cuid().optional(),
});

export const expenseUpdateSchema = expenseCreateSchema.partial();

// Category schemas
export const categorySchema = z.object({
  name: z.string().min(1, "Name is required").max(32, "Name too long"),
  color: z.string().regex(/^#([0-9A-Fa-f]{6})$/, "Invalid color format"),
});

export const categoryUpdateSchema = categorySchema.partial();

// Query schemas
export const expenseQuerySchema = z.object({
  from: z.string().optional(),
  to: z.string().optional(),
  categoryId: z.string().optional(),
  q: z.string().optional(),
  page: z.string().transform(Number).pipe(z.number().min(1)).optional().default("1"),
  limit: z.string().transform(Number).pipe(z.number().min(1).max(100)).optional().default("20"),
});

export const csvImportSchema = z.object({
  file: z.instanceof(File),
});
