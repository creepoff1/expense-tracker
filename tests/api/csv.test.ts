import { describe, it, expect } from 'vitest';
import { generateCSVContent, parseCSVContent } from '../../lib/utils';

describe('CSV Operations', () => {
  const mockExpenses = [
    {
      id: '1',
      amountCents: 1234,
      currency: 'USD',
      date: '2024-01-15T00:00:00.000Z',
      note: 'Coffee',
      category: { name: 'Food' },
    },
    {
      id: '2',
      amountCents: 5000,
      currency: 'USD',
      date: '2024-01-16T00:00:00.000Z',
      note: 'Groceries',
      category: { name: 'Groceries' },
    },
  ];

  it('should generate CSV content', () => {
    const csv = generateCSVContent(mockExpenses);
    
    expect(csv).toContain('"Date","Amount","Currency","Category","Note"');
    expect(csv).toContain('"Coffee"');
    expect(csv).toContain('"Food"');
    expect(csv).toContain('"12.34"');
    expect(csv).toContain('"50"');
  });

  it('should parse CSV content', () => {
    const csvContent = `Date,Amount,Currency,Category,Note
"2024-01-15","12.34","USD","Food","Coffee"
"2024-01-16","50","USD","Groceries","Groceries"`;

    const parsed = parseCSVContent(csvContent);
    
    expect(parsed).toHaveLength(2);
    expect(parsed[0]).toEqual({
      date: '2024-01-15',
      amount: '12.34',
      currency: 'USD',
      category: 'Food',
      note: 'Coffee',
    });
    expect(parsed[1]).toEqual({
      date: '2024-01-16',
      amount: '50',
      currency: 'USD',
      category: 'Groceries',
      note: 'Groceries',
    });
  });

  it('should handle empty CSV content', () => {
    const parsed = parseCSVContent('');
    expect(parsed).toHaveLength(0);
  });

  it('should handle CSV with only headers', () => {
    const csvContent = 'Date,Amount,Currency,Category,Note';
    const parsed = parseCSVContent(csvContent);
    expect(parsed).toHaveLength(0);
  });
});
