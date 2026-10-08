import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type Expense } from "../types/datatypes";

interface ItemState {
  expenses: Expense[];
  addExpense: (
    title: string,
    amount: number,
    category: Expense["category"],
  ) => void;
  deleteExpense: (id: string) => void;
}

export const useItemStore = create<ItemState>()(
  persist(
    (set) => ({
      expenses: [
        {
          id: "1",
          title: "ซื้อของ 7-11",
          amount: 120.5,
          category: "Food",
          date: "2026-10-01",
        },
        {
          id: "2",
          title: "Grab bike",
          amount: 30.0,
          category: "Transport",
          date: "2026-10-02",
        },
        {
          id: "3",
          title: "จ่ายค่าน้ำ ค่าไฟ เดือนกันยายน",
          amount: 350,
          category: "Utilities",
          date: "2026-10-03",
        },
        {
          id: "4",
          title: "ดูหนัง",
          amount: 160,
          category: "Entertainment",
          date: "2026-10-03",
        },
        {
          id: "5",
          title: "กาแฟ & พายบลูเบอรี่",
          amount: 140,
          category: "Food",
          date: "2026-10-03",
        },
        {
          id: "6",
          title: "ค่าบริการฟิตเนส",
          amount: 100,
          category: "Entertainment",
          date: "2026-10-03",
        },
      ],
      addExpense: (title, amount, category) =>
        set((state) => ({
          expenses: [
            {
              id: crypto.randomUUID(),
              title: title.trim(),
              amount,
              category,
              date: new Date().toISOString().split("T")[0],
            },
            ...state.expenses,
          ],
        })),
      deleteExpense: (id) =>
        set((state) => ({
          expenses: state.expenses.filter((expense) => expense.id !== id),
        })),
    }),
    {
      name: "exp-680610661",
      partialize: (state) => ({ expenses: state.expenses }),
    },
  ),
);
