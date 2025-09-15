import { StatsCard } from "@/components/dashboard/StatsCard";
import { ScrapChart } from "@/components/dashboard/ScrapChart";
import { Package, Recycle, AlertTriangle, DollarSign, TrendingUp, Factory } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <div className="text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Scrap (This Month)"
          value="139.2 T"
          change="+12.5% from last month"
          icon={<Package className="h-4 w-4" />}
          trend="up"
        />
        <StatsCard
          title="Reusable Scrap"
          value="67.8 T"
          change="48.8% of total"
          icon={<Recycle className="h-4 w-4" />}
          trend="up"
        />
        <StatsCard
          title="Waste Generated"
          value="20.1 T"
          change="-3.2% from last month"
          icon={<AlertTriangle className="h-4 w-4" />}
          trend="down"
        />
        <StatsCard
          title="Cost Savings"
          value="$45,670"
          change="+8.9% from last month"
          icon={<DollarSign className="h-4 w-4" />}
          trend="up"
        />
      </div>

      {/* Charts */}
      <ScrapChart />

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">Recent Activity</h3>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">New scrap recorded</span>
              <span className="text-foreground">2.5T Iron</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Vendor pickup scheduled</span>
              <span className="text-foreground">Tomorrow</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Report generated</span>
              <span className="text-foreground">Monthly</span>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-warning/10 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-warning" />
            </div>
            <h3 className="font-semibold text-foreground">Alerts</h3>
          </div>
          <div className="space-y-3 text-sm">
            <div className="p-3 bg-warning/10 rounded border border-warning/20">
              <p className="text-warning font-medium">Storage capacity at 85%</p>
              <p className="text-muted-foreground">Yard A-1 needs attention</p>
            </div>
            <div className="p-3 bg-info/10 rounded border border-info/20">
              <p className="text-info font-medium">Vendor pickup due</p>
              <p className="text-muted-foreground">RecycleCorp - 3.2T steel</p>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-success/10 rounded-lg">
              <Factory className="h-5 w-5 text-success" />
            </div>
            <h3 className="font-semibold text-foreground">Department Summary</h3>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Rolling Mill</span>
              <span className="text-foreground font-medium">45.2T</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Blast Furnace</span>
              <span className="text-foreground font-medium">32.8T</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Steel Making</span>
              <span className="text-foreground font-medium">28.4T</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}