import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amountCents: number, currency: string = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amountCents / 100);
}

export function formatDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function formatDateForInput(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toISOString().split("T")[0];
}

export function parseDate(dateString: string): Date {
  // Handle both ISO strings and YYYY-MM-DD format
  if (dateString.includes("T")) {
    return new Date(dateString);
  }
  // For YYYY-MM-DD format, add time to avoid timezone issues
  return new Date(dateString + "T00:00:00");
}

export function getDateRangePresets() {
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const endOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

  return {
    "This Month": {
      from: startOfMonth,
      to: now,
    },
    "Last Month": {
      from: startOfLastMonth,
      to: endOfLastMonth,
    },
    "Last 30 Days": {
      from: thirtyDaysAgo,
      to: now,
    },
  };
}

export function generateCSVContent(expenses: any[]): string {
  const headers = ["Date", "Amount", "Currency", "Category", "Note"];
  const rows = expenses.map(expense => [
    formatDate(expense.date),
    (expense.amountCents / 100).toString(),
    expense.currency,
    expense.category?.name || "",
    expense.note || "",
  ]);

  return [headers, ...rows]
    .map(row => row.map(field => `"${field}"`).join(","))
    .join("\n");
}

export function parseCSVContent(content: string): any[] {
  const lines = content.trim().split("\n");
  if (lines.length < 2) return [];

  const headers = lines[0].split(",").map(h => h.replace(/"/g, "").trim());
  const rows = lines.slice(1);

  return rows.map(row => {
    const values = row.split(",").map(v => v.replace(/"/g, "").trim());
    const obj: any = {};
    headers.forEach((header, index) => {
      obj[header.toLowerCase()] = values[index] || "";
    });
    return obj;
  });
}
