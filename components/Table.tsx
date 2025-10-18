"use client";

import { useState } from "react";
import { formatCurrency, formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit, Trash2, MoreHorizontal } from "lucide-react";
import { Expense } from "@/lib/queries";

interface TableProps {
  expenses: Expense[];
  onEdit: (expense: Expense) => void;
  onDelete: (expense: Expense) => void;
  isLoading?: boolean;
}

export function Table({ expenses, onEdit, onDelete, isLoading }: TableProps) {
  const [sortField, setSortField] = useState<keyof Expense>("date");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const handleSort = (field: keyof Expense) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const sortedExpenses = [...expenses].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];
    
    // Handle undefined values
    if (aValue === undefined && bValue === undefined) return 0;
    if (aValue === undefined) return sortDirection === "asc" ? 1 : -1;
    if (bValue === undefined) return sortDirection === "asc" ? -1 : 1;
    
    if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
    if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-4 bg-muted rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (expenses.length === 0) {
    return (
      <Card>
        <CardContent className="p-6 text-center">
          <p className="text-muted-foreground">No expenses found</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th 
                  className="text-left p-2 cursor-pointer hover:bg-muted/50"
                  onClick={() => handleSort("date")}
                >
                  Date {sortField === "date" && (sortDirection === "asc" ? "↑" : "↓")}
                </th>
                <th 
                  className="text-left p-2 cursor-pointer hover:bg-muted/50"
                  onClick={() => handleSort("amountCents")}
                >
                  Amount {sortField === "amountCents" && (sortDirection === "asc" ? "↑" : "↓")}
                </th>
                <th className="text-left p-2">Category</th>
                <th className="text-left p-2">Note</th>
                <th className="text-right p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedExpenses.map((expense) => (
                <tr key={expense.id} className="border-b hover:bg-muted/50">
                  <td className="p-2">
                    {formatDate(expense.date)}
                  </td>
                  <td className="p-2 font-medium">
                    {formatCurrency(expense.amountCents, expense.currency)}
                  </td>
                  <td className="p-2">
                    {expense.category ? (
                      <div className="flex items-center space-x-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: expense.category.color }}
                        />
                        <span>{expense.category.name}</span>
                      </div>
                    ) : (
                      <span className="text-muted-foreground">No category</span>
                    )}
                  </td>
                  <td className="p-2">
                    <span className="text-muted-foreground">
                      {expense.note || "-"}
                    </span>
                  </td>
                  <td className="p-2">
                    <div className="flex justify-end space-x-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onEdit(expense)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onDelete(expense)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
