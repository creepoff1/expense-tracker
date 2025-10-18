# Expense Tracker Pro

A modern expense tracking web application built with Next.js, Prisma, and SQLite.

## Features

- 🔐 User authentication with NextAuth.js
- 💰 Expense tracking with categories
- 📊 Interactive charts and analytics
- 📅 Date filtering and search
- 📁 CSV import/export
- 🌙 Dark theme support
- 📱 Responsive design

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: SQLite with Prisma ORM
- **Authentication**: NextAuth.js
- **State Management**: TanStack Query
- **Charts**: Recharts
- **Validation**: Zod
- **Testing**: Vitest + Playwright

## Getting Started

1. **Clone and install dependencies:**
   ```bash
   yarn install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   Update the values in `.env.local` as needed.

3. **Initialize the database:**
   ```bash
   yarn db:generate
   yarn db:migrate
   ```

4. **Start the development server:**
   ```bash
   yarn dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Database Management

- **View data**: `yarn db:studio`
- **Reset database**: `yarn db:push`
- **Generate Prisma client**: `yarn db:generate`

## Testing

- **Unit tests**: `yarn test`
- **E2E tests**: `yarn test:e2e`

## Project Structure

```
/app
  /(auth)          # Authentication pages
  /dashboard       # Main dashboard
  /expenses        # Expense management
  /categories      # Category management
  /api            # API routes
/components       # Reusable UI components
/lib             # Utilities and configurations
/prisma          # Database schema
/tests           # Test files
```

## API Endpoints

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/expenses` - List expenses with filtering
- `POST /api/expenses` - Create expense
- `PATCH /api/expenses/[id]` - Update expense
- `DELETE /api/expenses/[id]` - Delete expense
- `GET /api/categories` - List categories
- `POST /api/categories` - Create category
- `GET /api/export/csv` - Export expenses to CSV
- `POST /api/import/csv` - Import expenses from CSV
