import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { month: "Jan", reusable: 45, recyclable: 30, waste: 12 },
  { month: "Feb", reusable: 52, recyclable: 35, waste: 15 },
  { month: "Mar", reusable: 48, recyclable: 42, waste: 18 },
  { month: "Apr", reusable: 61, recyclable: 38, waste: 14 },
  { month: "May", reusable: 55, recyclable: 45, waste: 16 },
  { month: "Jun", reusable: 67, recyclable: 52, waste: 20 },
];

const trendData = [
  { week: "W1", total: 87 },
  { week: "W2", total: 102 },
  { week: "W3", total: 108 },
  { week: "W4", total: 113 },
  { week: "W5", total: 116 },
  { week: "W6", total: 139 },
];

export function ScrapChart() {
  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Scrap by Category (Tons)</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="month" className="text-xs" />
              <YAxis className="text-xs" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                }}
              />
              <Bar dataKey="reusable" fill="hsl(var(--success))" name="Reusable" />
              <Bar dataKey="recyclable" fill="hsl(var(--info))" name="Recyclable" />
              <Bar dataKey="waste" fill="hsl(var(--destructive))" name="Waste" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Weekly Scrap Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="week" className="text-xs" />
              <YAxis className="text-xs" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                }}
              />
              <Line 
                type="monotone" 
                dataKey="total" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                dot={{ fill: "hsl(var(--primary))" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}