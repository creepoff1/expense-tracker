"use client";

import { useState, useEffect } from "react";
import { useCreateExpense, useUpdateExpense, useCategories } from "@/lib/queries";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { formatCurrency } from "@/lib/utils";
import { Expense } from "@/lib/queries";

interface ExpenseFormProps {
  expense?: Expense;
  onSuccess: () => void;
  onCancel: () => void;
}

export function ExpenseForm({ expense, onSuccess, onCancel }: ExpenseFormProps) {
  const [formData, setFormData] = useState({
    amount: expense ? expense.amountCents / 100 : 0,
    currency: expense?.currency || "USD",
    date: expense ? new Date(expense.date).toISOString().split("T")[0] : new Date().toISOString().split("T")[0],
    note: expense?.note || "",
    categoryId: expense?.categoryId || "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const createMutation = useCreateExpense();
  const updateMutation = useUpdateExpense();
  const { data: categories = [] } = useCategories();

  const isLoading = createMutation.isPending || updateMutation.isPending;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validation
    const newErrors: Record<string, string> = {};
    if (formData.amount <= 0) {
      newErrors.amount = "Amount must be greater than 0";
    }
    if (!formData.date) {
      newErrors.date = "Date is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      if (expense) {
        await updateMutation.mutateAsync({
          id: expense.id,
          data: formData,
        });
      } else {
        await createMutation.mutateAsync(formData);
      }
      onSuccess();
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="amount">Amount</Label>
          <Input
            id="amount"
            type="number"
            step="0.01"
            min="0"
            value={formData.amount}
            onChange={(e) => handleChange("amount", parseFloat(e.target.value) || 0)}
            className={errors.amount ? "border-red-500" : ""}
          />
          {errors.amount && (
            <p className="text-sm text-red-500 mt-1">{errors.amount}</p>
          )}
        </div>
        <div>
          <Label htmlFor="currency">Currency</Label>
          <Select
            id="currency"
            value={formData.currency}
            onChange={(e) => handleChange("currency", e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="date">Date</Label>
        <Input
          id="date"
          type="date"
          value={formData.date}
          onChange={(e) => handleChange("date", e.target.value)}
          className={errors.date ? "border-red-500" : ""}
        />
        {errors.date && (
          <p className="text-sm text-red-500 mt-1">{errors.date}</p>
        )}
      </div>

      <div>
        <Label htmlFor="category">Category</Label>
        <Select
          id="category"
          value={formData.categoryId}
          onChange={(e) => handleChange("categoryId", e.target.value)}
        >
          <option value="">No category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
      </div>

      <div>
        <Label htmlFor="note">Note</Label>
        <Input
          id="note"
          value={formData.note}
          onChange={(e) => handleChange("note", e.target.value)}
          placeholder="Optional note about this expense"
        />
      </div>

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Saving..." : expense ? "Update" : "Create"}
        </Button>
      </div>
    </form>
  );
}
