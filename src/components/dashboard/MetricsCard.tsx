
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface MetricsCardProps {
  title: string;
  value: number | string;
  icon: LucideIcon;
  description?: string;
  trend?: number;
  className?: string;
}

const MetricsCard = ({ 
  title, 
  value, 
  icon: Icon, 
  description, 
  trend,
  className 
}: MetricsCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card p-6 transition-all duration-300 hover:shadow-xl",
        "transform hover:-translate-y-1",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-3xl font-bold mt-1">{value}</h3>
          
          {description && (
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          )}
          
          {trend !== undefined && (
            <div className="flex items-center mt-2">
              <span className={cn(
                "text-xs font-medium",
                trend > 0 ? "text-green-500" : trend < 0 ? "text-red-500" : "text-muted-foreground"
              )}>
                {trend > 0 ? `+${trend}%` : trend < 0 ? `${trend}%` : "0%"}
              </span>
              <span className="text-xs text-muted-foreground ml-1">vs. last week</span>
            </div>
          )}
        </div>
        
        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default MetricsCard;
