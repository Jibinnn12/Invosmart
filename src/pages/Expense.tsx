import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { Select } from '@radix-ui/react-select';
import { set } from 'date-fns';
import { CircleCheckBig, CircleX, Plus } from 'lucide-react'
import React, { ReactHTMLElement, useState } from 'react'

const Expense = () => {

  const [showAddForm, setShowAddForm] = useState(false);
  const [customer , setCustomer] = useState("");

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    if(!customer.trim()){
     toast({
     
 description: (
        <span className=" flex items-center gap-2">
          <CircleX/> <h1 className='font-bold '>Customer name is missing!</h1>  
        </span>
      ),
  variant: "destructive",
});
      return;
    }
     toast({
          className: "bg-emerald-200",
          
          description:(
            <span className='flex items-center gap-2'>
              <CircleCheckBig/> 
              <h2>Transaction has been recorded succesfully </h2>


            </span>
          )
            
                      
                      

           });

     setCustomer(""); 

     setShowAddForm(false);

  }
  
  return (
    

    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl p-3 font-bold text-gradient">Expense Tracking</h1>
          <p className="text-muted-foreground p-3 mt-1">Record and manage your Business Expenses </p>
           
        </div>
        <Button 
                  className="btn-hero"
                  onClick={() => setShowAddForm(!showAddForm)}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  New Sale
                </Button>
        </div>


         {/* Add Sale Form */}
      {showAddForm && (
        <Card className="glass-card animate-scale-in">
          <CardHeader>
            <CardTitle>Record New Sale</CardTitle>
            <CardDescription>Add a new sales transaction to your records</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4"
            onSubmit={handleSubmit}
            >
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
                <Input id="customer" placeholder="Enter customer name"
                onChange={(e)=>setCustomer(e.target.value)} 
                />
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

                
                >
                  
                  Record Sale
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
        </div>

  )
}

export default Expense



