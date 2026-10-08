import { useItemStore } from "@/store/dataStore";
import { categoryOptions } from "@/types/datatypes";
import {
  Utensils,
  Car,
  Book,
  Lightbulb,
  Gamepad2,
  MoreHorizontal,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const iconMap: Record<string, React.ReactNode> = {
  Food: <Utensils className="h-4 w-4" />,
  Transport: <Car className="h-4 w-4" />,
  Education: <Book className="h-4 w-4" />,
  Utilities: <Lightbulb className="h-4 w-4" />,
  Entertainment: <Gamepad2 className="h-4 w-4" />,
  Other: <MoreHorizontal className="h-4 w-4" />,
};

export function CategoryCards() {
  const expenses = useItemStore((state) => state.expenses);

  return (
    <div className="grid gap-2 md:grid-cols-6">
      {categoryOptions.map((category) => {
        const categoryExpenses = expenses.filter(
          (expense) => expense.category === category.value,
        );
        const categoryTotal = categoryExpenses.reduce(
          (acc, item) => acc + item.amount,
          0,
        );

        return (
          <Card key={category.id} className="gap-2 py-4">
            <CardHeader className="gap-1 px-4">
              <div className="text-muted-foreground">
                {iconMap[String(category.value)]}
              </div>
              <CardTitle className="text-sm font-medium">
                {category.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4">
              <div className="text-xl font-bold">
                ฿{categoryTotal.toFixed(2)}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
