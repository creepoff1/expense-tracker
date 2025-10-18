"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { TrendingUp, TrendingDown, DollarSign, Calendar } from "lucide-react";

interface SummaryCardsProps {
  totalCents: number;
  averageCents: number;
  topCategory?: {
    name: string;
    amountCents: number;
  };
  currency: string;
  period: string;
}

export function SummaryCards({ 
  totalCents, 
  averageCents, 
  topCategory, 
  currency, 
  period 
}: SummaryCardsProps) {
  const cards = [
    {
      title: `Total ${period}`,
      value: formatCurrency(totalCents, currency),
      icon: DollarSign,
      description: "Total expenses",
    },
    {
      title: "Daily Average",
      value: formatCurrency(averageCents, currency),
      icon: Calendar,
      description: "Average per day",
    },
    {
      title: "Top Category",
      value: topCategory ? formatCurrency(topCategory.amountCents, currency) : "N/A",
      icon: topCategory ? TrendingUp : TrendingDown,
      description: topCategory ? topCategory.name : "No expenses",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cards.map((card, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {card.title}
            </CardTitle>
            <card.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
            <p className="text-xs text-muted-foreground">
              {card.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
