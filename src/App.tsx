import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Sales from "./pages/Sales";
import Inventory from "./pages/Inventory";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import Expense from "./pages/Expense";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route 
            path="/" 
            element={<Layout />}
          >
            <Route index element={<Dashboard />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="sales" element={<Sales />} />
            <Route path="expenses" element={<Expense/>} /> 
              
            <Route path="analytics" element={
              <div className="text-center py-12">
                <h1 className="text-2xl font-bold text-gradient">Analytics Coming Soon</h1>
                <p className="text-muted-foreground mt-2">This feature is under development</p>
              </div>
            } />
            <Route path="settings" element={
              <div className="text-center py-12">
                <h1 className="text-2xl font-bold text-gradient">Settings Coming Soon</h1>
                <p className="text-muted-foreground mt-2">This feature is under development</p>
              </div>
            } />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
