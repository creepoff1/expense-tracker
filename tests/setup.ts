import '@testing-library/jest-dom';

// Setup environment variables for tests
process.env.DATABASE_URL = 'file:./test.db';
process.env.NEXTAUTH_SECRET = 'test-secret-for-tests';
process.env.NEXTAUTH_URL = 'http://localhost:3000';
