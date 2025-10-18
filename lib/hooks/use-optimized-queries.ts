import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useCallback, useMemo } from 'react';

/**
 * Optimized React Query hooks with performance best practices
 */

// Query keys factory for consistent cache management
export const queryKeys = {
  expenses: (userId: string, filters?: any) => ['expenses', userId, filters],
  categories: (userId: string) => ['categories', userId],
  stats: (userId: string, filters?: any) => ['stats', userId, filters],
} as const;

/**
 * Optimized expenses query hook
 */
export function useOptimizedExpenses(
  userId: string,
  filters: {
    from?: Date;
    to?: Date;
    categoryId?: string;
    search?: string;
    page?: number;
    limit?: number;
  } = {}
) {
  const queryKey = useMemo(
    () => queryKeys.expenses(userId, filters),
    [userId, filters]
  );

  return useQuery({
    queryKey,
    queryFn: async () => {
      const response = await fetch('/api/expenses?' + new URLSearchParams({
        ...(filters.from && { from: filters.from.toISOString() }),
        ...(filters.to && { to: filters.to.toISOString() }),
        ...(filters.categoryId && { categoryId: filters.categoryId }),
        ...(filters.search && { q: filters.search }),
        page: String(filters.page || 1),
        limit: String(filters.limit || 20),
      }));
      
      if (!response.ok) {
        throw new Error('Failed to fetch expenses');
      }
      
      return response.json();
    },
    // Optimize stale time for better performance
    staleTime: 2 * 60 * 1000, // 2 minutes
    gcTime: 5 * 60 * 1000, // 5 minutes
    // Enable background refetch
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
  });
}

/**
 * Optimized categories query hook
 */
export function useOptimizedCategories(userId: string) {
  const queryKey = useMemo(
    () => queryKeys.categories(userId),
    [userId]
  );

  return useQuery({
    queryKey,
    queryFn: async () => {
      const response = await fetch('/api/categories');
      
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      
      return response.json();
    },
    // Categories change less frequently
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes
  });
}

/**
 * Optimized expense creation mutation
 */
export function useCreateExpense() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (expenseData: {
      amount: number;
      currency: string;
      date: string;
      note?: string;
      categoryId?: string;
    }) => {
      const response = await fetch('/api/expenses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(expenseData),
      });

      if (!response.ok) {
        throw new Error('Failed to create expense');
      }

      return response.json();
    },
    onSuccess: (newExpense) => {
      // Optimistically update the cache
      queryClient.setQueryData(
        queryKeys.expenses(newExpense.userId),
        (oldData: any) => {
          if (!oldData) return oldData;
          return {
            ...oldData,
            items: [newExpense, ...oldData.items],
            total: oldData.total + 1,
          };
        }
      );

      // Invalidate related queries
      queryClient.invalidateQueries({
        queryKey: queryKeys.stats(newExpense.userId),
      });
    },
  });
}

/**
 * Optimized expense deletion mutation
 */
export function useDeleteExpense() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, userId }: { id: string; userId: string }) => {
      const response = await fetch(`/api/expenses/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete expense');
      }

      return { id, userId };
    },
    onSuccess: ({ id, userId }) => {
      // Optimistically update the cache
      queryClient.setQueryData(
        queryKeys.expenses(userId),
        (oldData: any) => {
          if (!oldData) return oldData;
          return {
            ...oldData,
            items: oldData.items.filter((expense: any) => expense.id !== id),
            total: oldData.total - 1,
          };
        }
      );

      // Invalidate related queries
      queryClient.invalidateQueries({
        queryKey: queryKeys.stats(userId),
      });
    },
  });
}

/**
 * Prefetch expenses for better UX
 */
export function usePrefetchExpenses() {
  const queryClient = useQueryClient();

  return useCallback(
    (userId: string, filters: any = {}) => {
      queryClient.prefetchQuery({
        queryKey: queryKeys.expenses(userId, filters),
        queryFn: async () => {
          const response = await fetch('/api/expenses?' + new URLSearchParams({
            ...(filters.from && { from: filters.from.toISOString() }),
            ...(filters.to && { to: filters.to.toISOString() }),
            ...(filters.categoryId && { categoryId: filters.categoryId }),
            ...(filters.search && { q: filters.search }),
            page: String(filters.page || 1),
            limit: String(filters.limit || 20),
          }));
          
          if (!response.ok) {
            throw new Error('Failed to fetch expenses');
          }
          
          return response.json();
        },
        staleTime: 2 * 60 * 1000,
      });
    },
    [queryClient]
  );
}

