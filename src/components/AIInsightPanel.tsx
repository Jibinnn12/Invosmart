import { Brain, TrendingUp, AlertTriangle, Lightbulb } from 'lucide-react';

const insights = [
  {
    id: 1,
    type: 'warning',
    icon: AlertTriangle,
    title: 'Low Stock Alert',
    description: 'Apples running low (5 units left). Reorder recommended.',
    priority: 'high'
  },
  {
    id: 2,
    type: 'opportunity',
    icon: TrendingUp,
    title: 'Sales Opportunity',
    description: 'Bananas sales up 25% this week. Consider promoting.',
    priority: 'medium'
  },
  {
    id: 3,
    type: 'tip',
    icon: Lightbulb,
    title: 'Cost Optimization',
    description: 'Switch to bulk supplier for oranges to save 15%.',
    priority: 'low'
  }
];

export default function AIInsightPanel() {
  return (
    <div className="glass-card rounded-2xl p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-accent/10 rounded-lg">
          <Brain className="w-6 h-6 text-accent" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground">AI Insights</h2>
          <p className="text-sm text-muted-foreground">Smart recommendations for your business</p>
        </div>
      </div>

      <div className="space-y-4">
        {insights.map((insight) => (
          <div key={insight.id} className="ai-insight-card">
            <div className="flex items-start space-x-3">
              <div className={`p-2 rounded-lg ${
                insight.type === 'warning' ? 'bg-warning/10' :
                insight.type === 'opportunity' ? 'bg-success/10' :
                'bg-primary/10'
              }`}>
                <insight.icon className={`w-4 h-4 ${
                  insight.type === 'warning' ? 'text-warning' :
                  insight.type === 'opportunity' ? 'text-success' :
                  'text-primary'
                }`} />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-foreground mb-1">{insight.title}</h4>
                <p className="text-sm text-muted-foreground">{insight.description}</p>
                <div className="flex items-center mt-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    insight.priority === 'high' ? 'bg-destructive/10 text-destructive' :
                    insight.priority === 'medium' ? 'bg-warning/10 text-warning' :
                    'bg-muted/50 text-muted-foreground'
                  }`}>
                    {insight.priority} priority
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}