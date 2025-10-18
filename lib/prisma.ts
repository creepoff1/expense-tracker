import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Optimized Prisma client configuration
export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  // Enable connection pooling for better performance
  datasources: {
    db: {
      url: process.env.DATABASE_URL || "file:./dev.db",
    },
  },
  // Optimize for SQLite
  ...(process.env.NODE_ENV === 'production' && {
    // Disable query logging in production
    log: ['error'],
  }),
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
