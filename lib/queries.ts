import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// Types
export interface Expense {
  id: string;
  amountCents: number;
  currency: string;
  date: string;
  note?: string;
  categoryId?: string;
  category?: {
    id: string;
    name: string;
    color: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  color: string;
  createdAt: string;
  _count: {
    expenses: number;
  };
}

export interface ExpenseQueryParams {
  from?: string;
  to?: string;
  categoryId?: string;
  q?: string;
  page?: number;
  limit?: number;
}

export interface ExpensesResponse {
  items: Expense[];
  total: number;
  page: number;
  limit: number;
  sumCents: number;
}

// API functions
export const api = {
  // Expenses
  getExpenses: async (params: ExpenseQueryParams = {}): Promise<ExpensesResponse> => {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        searchParams.append(key, value.toString());
      }
    });

    const response = await fetch(`/api/expenses?${searchParams.toString()}`);
    if (!response.ok) throw new Error("Failed to fetch expenses");
    return response.json();
  },

  getExpense: async (id: string): Promise<Expense> => {
    const response = await fetch(`/api/expenses/${id}`);
    if (!response.ok) throw new Error("Failed to fetch expense");
    return response.json();
  },

  createExpense: async (data: {
    amount: number;
    currency: string;
    date: string;
    note?: string;
    categoryId?: string;
  }): Promise<Expense> => {
    const response = await fetch("/api/expenses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to create expense");
    return response.json();
  },

  updateExpense: async (id: string, data: Partial<{
    amount: number;
    currency: string;
    date: string;
    note?: string;
    categoryId?: string;
  }>): Promise<Expense> => {
    const response = await fetch(`/api/expenses/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to update expense");
    return response.json();
  },

  deleteExpense: async (id: string): Promise<void> => {
    const response = await fetch(`/api/expenses/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete expense");
  },

  // Categories
  getCategories: async (): Promise<Category[]> => {
    const response = await fetch("/api/categories");
    if (!response.ok) throw new Error("Failed to fetch categories");
    return response.json();
  },

  createCategory: async (data: {
    name: string;
    color: string;
  }): Promise<Category> => {
    const response = await fetch("/api/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to create category");
    return response.json();
  },

  updateCategory: async (id: string, data: Partial<{
    name: string;
    color: string;
  }>): Promise<Category> => {
    const response = await fetch(`/api/categories/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to update category");
    return response.json();
  },

  deleteCategory: async (id: string): Promise<void> => {
    const response = await fetch(`/api/categories/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete category");
  },

  // CSV
  exportCSV: async (params: { from?: string; to?: string; categoryId?: string } = {}): Promise<Blob> => {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        searchParams.append(key, value.toString());
      }
    });

    const response = await fetch(`/api/export/csv?${searchParams.toString()}`);
    if (!response.ok) throw new Error("Failed to export CSV");
    return response.blob();
  },

  importCSV: async (file: File): Promise<{ message: string; count: number }> => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/import/csv", {
      method: "POST",
      body: formData,
    });
    if (!response.ok) throw new Error("Failed to import CSV");
    return response.json();
  },
};

// React Query hooks
export const useExpenses = (params: ExpenseQueryParams = {}) => {
  return useQuery({
    queryKey: ["expenses", params],
    queryFn: () => api.getExpenses(params),
  });
};

export const useExpense = (id: string) => {
  return useQuery({
    queryKey: ["expense", id],
    queryFn: () => api.getExpense(id),
    enabled: !!id,
  });
};

export const useCreateExpense = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: api.createExpense,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
    },
  });
};

export const useUpdateExpense = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) => api.updateExpense(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
      queryClient.invalidateQueries({ queryKey: ["expense", id] });
    },
  });
};

export const useDeleteExpense = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: api.deleteExpense,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
    },
  });
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: api.getCategories,
  });
};

export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: api.createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
};

export const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) => api.updateCategory(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
};

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: api.deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
    },
  });
};

export const useExportCSV = () => {
  return useMutation({
    mutationFn: api.exportCSV,
  });
};

export const useImportCSV = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: api.importCSV,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
    },
  });
};
