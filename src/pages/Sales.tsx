import { useState } from 'react';
import { Plus, Calendar, DollarSign, TrendingUp, CircleCheckBig } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast, useToast } from '@/hooks/use-toast';
import { title } from 'process';

const salesData = [
  {
    id: 1,
    date: '2024-01-15',
    product: 'Fresh Apples',
    quantity: 10,
    unitPrice: 4.00,
    total: 40.00,
    customer: 'John Doe'
  },
  {
    id: 2,
    date: '2024-01-15',
    product: 'Organic Bananas',
    quantity: 5,
    unitPrice: 3.20,
    total: 16.00,
    customer: 'Jane Smith'
  },
  {
    id: 3,
    date: '2024-01-14',
    product: 'Premium Oranges',
    quantity: 8,
    unitPrice: 5.50,
    total: 44.00,
    customer: 'Mike Johnson'
  },
];



export default function Sales() {
  const Toast =useToast();
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center p-3 justify-between">
        <div>
          <h1 className="text-3xl p-3  font-bold text-gradient">Sales Tracking</h1>
          <p className="text-muted-foreground mt-1">Record and manage your sales transactions</p>
        </div>
        <Button 
          className="btn-hero"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          <Plus className="w-4 h-4 mr-2" />
          New Sale
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="metric-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-success/10 rounded-lg">
              <DollarSign className="w-6 h-6 text-success" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-1">$2,345</h3>
          <p className="text-sm text-muted-foreground">Today's Sales</p>
        </div>
        
        <div className="metric-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-1">23</h3>
          <p className="text-sm text-muted-foreground">Transactions</p>
        </div>
        
        <div className="metric-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-accent/10 rounded-lg">
              <Calendar className="w-6 h-6 text-accent" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-1">$12,543</h3>
          <p className="text-sm text-muted-foreground">This Week</p>
        </div>
      </div>

      {/* Add Sale Form */}
      {showAddForm && (
        <Card className="glass-card animate-scale-in">
          <CardHeader>
            <CardTitle>Record New Sale</CardTitle>
            <CardDescription>Add a new sales transaction to your records</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="product">Product</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select product" />
                  </SelectTrigger>
                  <SelectContent className="bg-card/95 backdrop-blur-sm border-border/50">
                    <SelectItem value="apples">Fresh Apples</SelectItem>
                    <SelectItem value="bananas">Organic Bananas</SelectItem>
                    <SelectItem value="oranges">Premium Oranges</SelectItem>
                    <SelectItem value="berries">Mixed Berries</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="customer">Customer Name</Label>
                <Input id="customer" placeholder="Enter customer name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Input id="quantity" type="number" placeholder="Enter quantity" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="unitPrice">Unit Price</Label>
                <Input id="unitPrice" type="number" step="0.01" placeholder="Enter unit price" />
              </div>

              <div className="md:col-span-2 flex justify-end space-x-4 pt-4">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => {setShowAddForm(false)

                   
                   
                     
                   
                    
                  }}
                >
                  Cancel
                </Button>
                <Button type="submit" className="btn-hero"

                onClick={(e)=>{
                  e.preventDefault()
                  setShowAddForm(false)
                  toast({
                            className: "bg-emerald-200",
                            
                            description:(
                              <span className='flex items-center gap-2'>
                                <CircleCheckBig/> 
                                <h2>Transaction has been recorded succesfully </h2>
                  
                  
                              </span>
                            )
                              
                                        
                                        
                  
                             });
                }}
                
                >
                  
                  Record Sale
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Sales History */}
      <div className="glass-card rounded-xl overflow-hidden animate-scale-in">
        <div className="p-6 border-b border-border/50">
          <h3 className="text-lg font-semibold text-foreground">Recent Sales</h3>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="border-border/50">
              <TableHead>Date</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Unit Price</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody> 
            {salesData.map((sale) => (
              <TableRow key={sale.id} className="border-border/30 hover:bg-muted/20 transition-colors">
                <TableCell>{new Date(sale.date).toLocaleDateString()}</TableCell>
                <TableCell className="font-medium">{sale.product}</TableCell>
                <TableCell>{sale.customer}</TableCell>
                <TableCell>{sale.quantity}</TableCell>
                <TableCell>${sale.unitPrice.toFixed(2)}</TableCell>
                <TableCell className="text-right font-semibold text-success">
                  ${sale.total.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}