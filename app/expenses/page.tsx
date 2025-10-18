"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useExpenses, useCategories, useDeleteExpense, useExportCSV, useImportCSV } from "@/lib/queries";
import { Navigation } from "@/components/Navigation";
import { Table } from "@/components/Table";
import { DateRangePicker } from "@/components/DateRangePicker";
import { ExpenseForm } from "@/components/ExpenseForm";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Download, Upload, Search, Filter } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export default function ExpensesPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const [editingExpense, setEditingExpense] = useState<any>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    from: searchParams.get("from") || "",
    to: searchParams.get("to") || "",
    categoryId: searchParams.get("categoryId") || "",
    q: searchParams.get("q") || "",
    page: parseInt(searchParams.get("page") || "1"),
  });

  const { data: expensesData, isLoading } = useExpenses(filters);
  const { data: categories = [] } = useCategories();
  const deleteMutation = useDeleteExpense();
  const exportMutation = useExportCSV();
  const importMutation = useImportCSV();

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value && value !== "") {
        params.set(key, value.toString());
      }
    });
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, "", newUrl);
  }, [filters]);

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
  const totalPages = Math.ceil((expensesData?.total || 0) / 20);

  const handleFilterChange = (key: string, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value, page: 1 }));
  };

  const handleDateRangeChange = (from?: string, to?: string) => {
    setFilters(prev => ({ 
      ...prev, 
      from: from || "", 
      to: to || "",
      page: 1 
    }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is handled by the q filter
  };

  const handleCreateExpense = () => {
    setEditingExpense(null);
    setShowExpenseForm(true);
  };

  const handleEditExpense = (expense: any) => {
    setEditingExpense(expense);
    setShowExpenseForm(true);
  };

  const handleDeleteExpense = async (expense: any) => {
    if (confirm("Are you sure you want to delete this expense?")) {
      try {
        await deleteMutation.mutateAsync(expense.id);
      } catch (error) {
        console.error("Delete error:", error);
      }
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

  const handleExport = async () => {
    try {
      const blob = await exportMutation.mutateAsync({
        from: filters.from || undefined,
        to: filters.to || undefined,
        categoryId: filters.categoryId || undefined,
      });
      
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `expenses_${new Date().toISOString().slice(0, 7)}.csv`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Export error:", error);
    }
  };

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const result = await importMutation.mutateAsync(file);
      alert(`Successfully imported ${result.count} expenses`);
    } catch (error) {
      console.error("Import error:", error);
      alert("Failed to import CSV file");
    }
  };

  const handlePageChange = (page: number) => {
    setFilters(prev => ({ ...prev, page }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="lg:ml-64">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold">Expenses</h1>
              <p className="text-muted-foreground">
                Manage your expenses and track spending
              </p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" onClick={handleExport} disabled={exportMutation.isPending}>
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
              <label className="cursor-pointer">
                <Button variant="outline" asChild>
                  <span>
                    <Upload className="h-4 w-4 mr-2" />
                    Import CSV
                  </span>
                </Button>
                <input
                  type="file"
                  accept=".csv"
                  onChange={handleImport}
                  className="hidden"
                />
              </label>
              <Button onClick={handleCreateExpense}>
                <Plus className="h-4 w-4 mr-2" />
                Add Expense
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            {/* Filters */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Filters</CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    {showFilters ? "Hide" : "Show"} Filters
                  </Button>
                </div>
              </CardHeader>
              {showFilters && (
                <CardContent className="space-y-4">
                  {/* Date Range */}
                  <div>
                    <h3 className="text-sm font-medium mb-2">Date Range</h3>
                    <DateRangePicker
                      from={filters.from || undefined}
                      to={filters.to || undefined}
                      onRangeChange={handleDateRangeChange}
                    />
                  </div>

                  {/* Search and Category */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium mb-2">Search</h3>
                      <form onSubmit={handleSearch} className="flex space-x-2">
                        <Input
                          placeholder="Search notes..."
                          value={filters.q}
                          onChange={(e) => handleFilterChange("q", e.target.value)}
                        />
                        <Button type="submit" size="sm">
                          <Search className="h-4 w-4" />
                        </Button>
                      </form>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium mb-2">Category</h3>
                      <Select
                        value={filters.categoryId}
                        onChange={(e) => handleFilterChange("categoryId", e.target.value)}
                      >
                        <option value="">All categories</option>
                        {categories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </Select>
                    </div>
                  </div>

                  {/* Clear Filters */}
                  <div className="flex justify-end">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setFilters({
                          from: "",
                          to: "",
                          categoryId: "",
                          q: "",
                          page: 1,
                        });
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                </CardContent>
              )}
            </Card>

            {/* Summary */}
            {totalCents > 0 && (
              <Card>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Expenses</p>
                      <p className="text-2xl font-bold">
                        {formatCurrency(totalCents, "USD")}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">
                        {expensesData?.total || 0} expenses
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Expenses Table */}
            <Table
              expenses={expenses}
              onEdit={handleEditExpense}
              onDelete={handleDeleteExpense}
              isLoading={isLoading}
            />

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center space-x-2">
                <Button
                  variant="outline"
                  onClick={() => handlePageChange(filters.page - 1)}
                  disabled={filters.page <= 1}
                >
                  Previous
                </Button>
                <span className="flex items-center px-4">
                  Page {filters.page} of {totalPages}
                </span>
                <Button
                  variant="outline"
                  onClick={() => handlePageChange(filters.page + 1)}
                  disabled={filters.page >= totalPages}
                >
                  Next
                </Button>
              </div>
            )}
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
