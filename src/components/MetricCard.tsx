import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: LucideIcon;
  className?: string;
  style?: React.CSSProperties;
}

export default function MetricCard({ 
  title, 
  value, 
  change, 
  changeType, 
  icon: Icon,
  className,
  style 
}: MetricCardProps) {
  return (
    <div className={cn("metric-card", className)} style={style}>
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className={cn(
          "text-sm font-medium px-2 py-1 rounded-full",
          changeType === 'positive' && "text-success bg-success/10",
          changeType === 'negative' && "text-destructive bg-destructive/10",
          changeType === 'neutral' && "text-muted-foreground bg-muted/50"
        )}>
          {change}
        </div>
      </div>
      
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-1">{value}</h3>
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
    </div>
  );
}