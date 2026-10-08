import { AddItemDialog } from "./components/AddItemDialog";
import { DashboardTabs } from "./components/DashboardTabs";
import { ItemList } from "./components/ItemList";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <main className="flex-1 p-6 md:p-10">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Expenditure Dashboard
              </h1>
              <p className="text-muted-foreground">
                Track your everyday expenses and budget easily.
              </p>
            </div>
            <AddItemDialog />
          </div>

          <DashboardTabs />
          <ItemList />
        </div>
      </main>

      <Footer />
    </div>
  );
}
