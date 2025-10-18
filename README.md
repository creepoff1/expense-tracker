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
- 🛡️ Security features (rate limiting, CSRF protection)
- 📝 Comprehensive error handling
- 🧪 Full test coverage

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: SQLite with Prisma ORM
- **Authentication**: NextAuth.js with secure cookies
- **State Management**: TanStack Query
- **Charts**: Recharts
- **Validation**: Zod
- **Testing**: Vitest + Playwright
- **Security**: Rate limiting, CSRF protection, secure password hashing

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

## Environment Variables

### Required Variables

- `DATABASE_URL`: Database connection string (default: `file:./dev.db`)
- `NEXTAUTH_URL`: Base URL for your application (default: `http://localhost:3000`)
- `NEXTAUTH_SECRET`: Secret key for NextAuth.js (generate with `openssl rand -base64 32`)

### Optional Variables

- `ENABLE_PERFORMANCE_MONITORING`: Enable performance monitoring (default: `false`)

### Generating NEXTAUTH_SECRET

```bash
# Generate a secure secret key
openssl rand -base64 32
```

## Database Management

- **View data**: `yarn db:studio`
- **Reset database**: `yarn db:push`
- **Generate Prisma client**: `yarn db:generate`
- **Run migrations**: `yarn db:migrate`

## Testing

- **Unit tests**: `yarn test`
- **E2E tests**: `yarn test:e2e`
- **Test coverage**: `yarn test:coverage`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard:
   - `DATABASE_URL`: Use Vercel Postgres or external database
   - `NEXTAUTH_URL`: Your production domain
   - `NEXTAUTH_SECRET`: Generate a secure secret
4. Deploy!

### Railway

1. Connect your GitHub repository to Railway
2. Set environment variables in Railway dashboard
3. Railway will automatically detect Next.js and deploy

### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]
```

## Security Best Practices

- ✅ Passwords are hashed server-side with bcrypt
- ✅ Rate limiting on authentication endpoints
- ✅ CSRF protection with secure cookies
- ✅ Input validation with Zod schemas
- ✅ SQL injection protection with Prisma
- ✅ XSS protection with React
- ✅ Secure session management

## Troubleshooting

### Common Issues

1. **Database connection errors**
   - Ensure `DATABASE_URL` is correctly set
   - Run `yarn db:generate` after schema changes

2. **Authentication not working**
   - Check `NEXTAUTH_SECRET` is set
   - Verify `NEXTAUTH_URL` matches your domain

3. **Build failures**
   - Run `yarn lint` to check for code issues
   - Ensure all environment variables are set

4. **Import/Export issues**
   - Check file format (CSV only)
   - Verify file size (max 5MB)

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

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Run `yarn lint` and `yarn test`
6. Submit a pull request

## License

MIT License - see LICENSE file for details
