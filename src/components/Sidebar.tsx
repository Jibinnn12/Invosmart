import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Package, 
  ShoppingCart, 
  Receipt, 
  BarChart3, 
  Settings,
  Menu,
  X,
  TrendingUp
} from 'lucide-react';
import { cn } from '@/lib/utils';
import invosmartLogo from '@/assets/invosmart-logo.png';

const navigationItems = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Inventory', href: '/inventory', icon: Package },
  { name: 'Sales', href: '/sales', icon: ShoppingCart },
  { name: 'Expenses', href: '/expenses', icon: Receipt },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={cn(
      "bg-card border-r border-border/50 flex flex-col transition-all duration-300 h-screen sticky top-0",
      isCollapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border/50">
        {!isCollapsed && (
          <div className="flex items-center space-x-3">
            <img src={invosmartLogo} alt="InvoSmart" className="h-8 w-auto" />
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
        >
          {isCollapsed ? <Menu className="w-4 h-4" /> : <X className="w-4 h-4" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              cn(
                "flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                "hover:bg-muted/50 hover:text-foreground",
                isActive ? "nav-item-active" : "text-muted-foreground",
                isCollapsed ? "justify-center" : "justify-start"
              )
            }
          >
            <item.icon className={cn("w-5 h-5", !isCollapsed && "mr-3")} />
            {!isCollapsed && <span>{item.name}</span>}
          </NavLink>
        ))}
      </nav>

      {/* AI Insights Preview */}
      {!isCollapsed && (
        <div className="p-4 border-t border-border/50">
          <div className="ai-insight-card">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">AI Insight</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Stock levels optimal. Consider restocking apples next week.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}