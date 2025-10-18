"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useExpenses, useCategories } from "@/lib/queries";
import { Navigation } from "@/components/Navigation";
import { SummaryCards } from "@/components/SummaryCards";
import { Chart } from "@/components/Chart";
import { Table } from "@/components/Table";
import { DateRangePicker } from "@/components/DateRangePicker";
import { Button } from "@/components/ui/button";
import { ExpenseForm } from "@/components/ExpenseForm";
import { Modal } from "@/components/ui/modal";
import { Plus } from "lucide-react";
import { getDateRangePresets, formatDateForInput } from "@/lib/utils";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [dateRange, setDateRange] = useState<{ from?: string; to?: string }>({});
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const [editingExpense, setEditingExpense] = useState<any>(null);

  // Set default date range to current month
  useEffect(() => {
    if (!dateRange.from && !dateRange.to) {
      const presets = getDateRangePresets();
      setDateRange({
        from: formatDateForInput(presets["This Month"].from),
        to: formatDateForInput(presets["This Month"].to),
      });
    }
  }, []);

  const { data: expensesData, isLoading: expensesLoading } = useExpenses({
    ...dateRange,
    limit: 10,
  });

  const { data: categories = [] } = useCategories();

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    router.push("/login");
    return null;
  }

  const expenses = expensesData?.items || [];
  const totalCents = expensesData?.sumCents || 0;
  const averageCents = expenses.length > 0 ? totalCents / expenses.length : 0;

  // Find top category
  const categoryTotals = categories.map(category => {
    const categoryExpenses = expenses.filter(expense => expense.categoryId === category.id);
    const total = categoryExpenses.reduce((sum, expense) => sum + expense.amountCents, 0);
    return { name: category.name, amountCents: total };
  }).sort((a, b) => b.amountCents - a.amountCents);

  const topCategory = categoryTotals[0];

  // Prepare chart data (simplified - in a real app you'd want more sophisticated aggregation)
  const chartData = expenses.slice(0, 7).map(expense => ({
    date: expense.date,
    amount: expense.amountCents / 100,
    label: new Date(expense.date).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
  }));

  const handleDateRangeChange = (from?: string, to?: string) => {
    setDateRange({ from, to });
  };

  const handleCreateExpense = () => {
    setEditingExpense(null);
    setShowExpenseForm(true);
  };

  const handleEditExpense = (expense: any) => {
    setEditingExpense(expense);
    setShowExpenseForm(true);
  };

  const handleDeleteExpense = (expense: any) => {
    if (confirm("Are you sure you want to delete this expense?")) {
      // This would be handled by the parent component or a delete mutation
      console.log("Delete expense:", expense.id);
    }
  };

  const handleExpenseFormSuccess = () => {
    setShowExpenseForm(false);
    setEditingExpense(null);
  };

  const handleExpenseFormCancel = () => {
    setShowExpenseForm(false);
    setEditingExpense(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="lg:ml-64">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">
                Track your expenses and financial trends
              </p>
            </div>
            <Button onClick={handleCreateExpense}>
              <Plus className="h-4 w-4 mr-2" />
              Add Expense
            </Button>
          </div>

          <div className="space-y-6">
            {/* Date Range Picker */}
            <div className="bg-card rounded-lg border p-4">
              <h2 className="text-lg font-semibold mb-4">Date Range</h2>
              <DateRangePicker
                from={dateRange.from}
                to={dateRange.to}
                onRangeChange={handleDateRangeChange}
              />
            </div>

            {/* Summary Cards */}
            <SummaryCards
              totalCents={totalCents}
              averageCents={averageCents}
              topCategory={topCategory}
              currency="USD"
              period={dateRange.from && dateRange.to ? "Selected Period" : "This Month"}
            />

            {/* Chart */}
            {chartData.length > 0 && (
              <div className="bg-card rounded-lg border p-6">
                <Chart data={chartData} currency="USD" />
              </div>
            )}

            {/* Recent Expenses */}
            <Table
              expenses={expenses}
              onEdit={handleEditExpense}
              onDelete={handleDeleteExpense}
              isLoading={expensesLoading}
            />
          </div>
        </div>
      </div>

      {/* Expense Form Modal */}
      <Modal
        isOpen={showExpenseForm}
        onClose={handleExpenseFormCancel}
        title={editingExpense ? "Edit Expense" : "Add Expense"}
      >
        <ExpenseForm
          expense={editingExpense}
          onSuccess={handleExpenseFormSuccess}
          onCancel={handleExpenseFormCancel}
        />
      </Modal>
    </div>
  );
}
