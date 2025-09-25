import { DollarSign, TrendingDown, Package, IndianRupee } from 'lucide-react';
import MetricCard from '@/components/MetricCard';
import AIInsightPanel from '@/components/AIInsightPanel';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const salesData = [
  { name: 'Mon', sales: 2400, expenses: 1800 },
  { name: 'Tue', sales: 1398, expenses: 1200 },
  { name: 'Wed', sales: 9800, expenses: 2000 },
  { name: 'Thu', sales: 3908, expenses: 2400 },
  { name: 'Fri', sales: 4800, expenses: 1900 },
  { name: 'Sat', sales: 3800, expenses: 1600 },
  { name: 'Sun', sales: 4300, expenses: 1700 },
];

const topProducts = [
  { product: 'Fresh Apples', sales: 45, revenue: '₹2,340' },
  { product: 'Organic Bananas', sales: 38, revenue: '₹1,890' },
  { product: 'Premium Oranges', sales: 32, revenue: '₹1,650' },
  { product: 'Mixed Berries', sales: 28, revenue: '₹1,420' },
];

export default function Dashboard() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Welcome back!</h1>
          <p className="text-muted-foreground mt-1">Here's what's happening with your business today.</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Today</p>
          <p className="text-lg font-semibold text-foreground">
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard
          title="Total Sales"
          value="₹12,543"
          change="+12.5%"
          changeType="positive"
          icon={IndianRupee}
          className="animate-slide-up"
        />
        <MetricCard
          title="Total Expenses"
          value="₹8,340"
          change="-5.2%"
          changeType="negative"
          icon={TrendingDown}
          className="animate-slide-up"
          style={{ animationDelay: '0.1s' }}
        />
        <MetricCard
          title="Inventory Worth"
          value="₹25,680"
          change="+2.1%"
          changeType="positive"
          icon={Package}
          className="animate-slide-up"
          style={{ animationDelay: '0.6s' }}
        />
      </div>

      {/* Charts and AI Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Trends Chart */}
        <div className="lg:col-span-2 glass-card rounded-2xl p-6 animate-scale-in">
          <h3 className="text-lg font-semibold text-foreground mb-4">Sales vs Expenses Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="sales" 
                stroke="hsl(var(--primary))" 
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--primary))' }}
              />
              <Line 
                type="monotone" 
                dataKey="expenses" 
                stroke="hsl(var(--accent))" 
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--accent))' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* AI Insights */}
        <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
          <AIInsightPanel />
        </div>
      </div>

      {/* Top Products */}
      <div className="glass-card rounded-2xl p-6 animate-scale-in" style={{ animationDelay: '0.2s' }}>
        <h3 className="text-lg font-semibold text-foreground mb-4">Top Selling Products</h3>
        <div className="space-y-4">
          {topProducts.map((product, index) => (
            <div key={product.product} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/30 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-medium text-foreground">{product.product}</span>
              </div>
              <div className="flex items-center space-x-6">
                <span className="text-sm text-muted-foreground">{product.sales} units</span>
                <span className="font-semibold text-success">{product.revenue}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}