export interface DropdownOption {
  id: string | number;
  label: string;
  value: Expense["category"];
}

export const categoryOptions: DropdownOption[] = [
  { id: 1, label: "Food", value: "Food" },
  { id: 2, label: "Transport", value: "Transport" },
  { id: 3, label: "Education", value: "Education" },
  { id: 4, label: "Utilities", value: "Utilities" },
  { id: 5, label: "Entertainment", value: "Entertainment" },
  { id: 6, label: "Other", value: "Other" },
];

export interface Expense {
  id: string;
  title: string;
  amount: number;
  category:
    | "Food"
    | "Transport"
    | "Education"
    | "Utilities"
    | "Entertainment"
    | "Other";
  date: string;
}
