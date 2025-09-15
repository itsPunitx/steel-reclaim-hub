import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Eye, Edit, Truck } from "lucide-react";

const scrapData = [
  {
    id: "SCR-001",
    type: "Iron Scrap",
    weight: 2.5,
    department: "Rolling Mill", 
    date: "2024-01-15",
    category: "Reusable",
    status: "Available",
    location: "Yard A-1"
  },
  {
    id: "SCR-002", 
    type: "Steel Dust",
    weight: 0.8,
    department: "Blast Furnace",
    date: "2024-01-14",
    category: "Recyclable", 
    status: "Assigned",
    location: "Yard B-2"
  },
  {
    id: "SCR-003",
    type: "Alloy Scrap",
    weight: 1.2,
    department: "Steel Making",
    date: "2024-01-13", 
    category: "Reusable",
    status: "Sold",
    location: "Yard A-3"
  },
  {
    id: "SCR-004",
    type: "Rejected Parts",
    weight: 3.1,
    department: "Quality Control",
    date: "2024-01-12",
    category: "Recyclable",
    status: "Available", 
    location: "Yard C-1"
  },
  {
    id: "SCR-005",
    type: "Metal Shavings", 
    weight: 0.4,
    department: "Finishing",
    date: "2024-01-11",
    category: "Waste",
    status: "Disposed",
    location: "Waste Area"
  }
];

function getStatusBadge(status: string) {
  switch (status) {
    case "Available":
      return <Badge variant="outline" className="text-success border-success">Available</Badge>;
    case "Assigned":
      return <Badge variant="outline" className="text-warning border-warning">Assigned</Badge>;
    case "Sold":
      return <Badge variant="outline" className="text-info border-info">Sold</Badge>;
    case "Disposed":
      return <Badge variant="outline" className="text-muted-foreground border-muted-foreground">Disposed</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
}

function getCategoryBadge(category: string) {
  switch (category) {
    case "Reusable":
      return <Badge className="bg-success text-success-foreground">Reusable</Badge>;
    case "Recyclable":
      return <Badge className="bg-info text-info-foreground">Recyclable</Badge>;
    case "Waste":
      return <Badge className="bg-destructive text-destructive-foreground">Waste</Badge>;
    default:
      return <Badge variant="secondary">{category}</Badge>;
  }
}

export function InventoryTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Scrap Inventory</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Weight (T)</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {scrapData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.id}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.weight}</TableCell>
                  <TableCell>{item.department}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{getCategoryBadge(item.category)}</TableCell>
                  <TableCell>{getStatusBadge(item.status)}</TableCell>
                  <TableCell>{item.location}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      {item.status === "Available" && (
                        <Button variant="ghost" size="sm">
                          <Truck className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}