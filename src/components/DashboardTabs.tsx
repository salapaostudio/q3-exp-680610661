import { ChartNoAxesColumn, LayoutGrid } from "lucide-react";
import { CategoryCards } from "@/components/CategoryCards";
import { OverviewCards } from "@/components/OverviewCards";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export function DashboardTabs() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList>
        <TabsTrigger value="overview">
          <ChartNoAxesColumn />
          Overview
        </TabsTrigger>
        <TabsTrigger value="category">
          <LayoutGrid />
          By Category
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <OverviewCards />
      </TabsContent>
      <TabsContent value="category">
        <CategoryCards />
      </TabsContent>
    </Tabs>
  );
}
