import { useState } from 'react';
import { Plus, Search, Filter, Edit, Trash2, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const inventoryData = [
  {
    id: 1,
    product: 'Fresh Apples',
    sku: 'APL-001',
    stock: 5,
    costPrice: 2.50,
    sellingPrice: 4.00,
    category: 'Fruits',
    status: 'Low Stock'
  },
  {
    id: 2,
    product: 'Organic Bananas',
    sku: 'BAN-002',
    stock: 25,
    costPrice: 1.80,
    sellingPrice: 3.20,
    category: 'Fruits',
    status: 'In Stock'
  },
  {
    id: 3,
    product: 'Premium Oranges',
    sku: 'ORG-003',
    stock: 18,
    costPrice: 3.00,
    sellingPrice: 5.50,
    category: 'Fruits',
    status: 'In Stock'
  },
  {
    id: 4,
    product: 'Mixed Berries',
    sku: 'BER-004',
    stock: 0,
    costPrice: 4.50,
    sellingPrice: 8.00,
    category: 'Fruits',
    status: 'Out of Stock'
  },
];

export default function Inventory() {
  const [searchTerm, setSearchTerm] = useState('');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Stock':
        return 'bg-success/10 text-success';
      case 'Low Stock':
        return 'bg-warning/10 text-warning';
      case 'Out of Stock':
        return 'bg-destructive/10 text-destructive';
      default:
        return 'bg-muted/50 text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Inventory Management</h1>
          <p className="text-muted-foreground mt-1">Track and manage your product inventory</p>
        </div>
        <Button className="btn-hero">
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </Button>
      </div>

      {/* Actions Bar */}
      <div className="glass-card rounded-xl p-4">
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-card/95 backdrop-blur-sm border-border/50">
              <DropdownMenuItem>All Categories</DropdownMenuItem>
              <DropdownMenuItem>Fruits</DropdownMenuItem>
              <DropdownMenuItem>Vegetables</DropdownMenuItem>
              <DropdownMenuItem>Low Stock</DropdownMenuItem>
              <DropdownMenuItem>Out of Stock</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="glass-card rounded-xl overflow-hidden animate-scale-in">
        <Table>
          <TableHeader>
            <TableRow className="border-border/50">
              <TableHead>Product</TableHead>
              <TableHead>SKU</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Cost Price</TableHead>
              <TableHead>Selling Price</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventoryData.map((item) => (
              <TableRow key={item.id} className="border-border/30 hover:bg-muted/20 transition-colors">
                <TableCell className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Package className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium">{item.product}</span>
                </TableCell>
                <TableCell className="text-muted-foreground">{item.sku}</TableCell>
                <TableCell>
                  <span className={`font-medium ${
                    item.stock === 0 ? 'text-destructive' : 
                    item.stock < 10 ? 'text-warning' : 'text-foreground'
                  }`}>
                    {item.stock}
                  </span>
                </TableCell>
                <TableCell>${item.costPrice.toFixed(2)}</TableCell>
                <TableCell className="font-medium">${item.sellingPrice.toFixed(2)}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{item.category}</Badge>
                </TableCell>
                <TableCell>
                  <Badge className={getStatusColor(item.status)}>
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <Button variant="ghost" size="icon">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up">
        <div className="metric-card text-center">
          <h4 className="text-sm text-muted-foreground mb-2">Total Products</h4>
          <p className="text-2xl font-bold text-foreground">48</p>
        </div>
        <div className="metric-card text-center">
          <h4 className="text-sm text-muted-foreground mb-2">Low Stock Items</h4>
          <p className="text-2xl font-bold text-warning">3</p>
        </div>
        <div className="metric-card text-center">
          <h4 className="text-sm text-muted-foreground mb-2">Total Inventory Value</h4>
          <p className="text-2xl font-bold text-success">$25,680</p>
        </div>
      </div>
    </div>
  );
}