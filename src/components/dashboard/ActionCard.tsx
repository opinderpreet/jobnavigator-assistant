
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ActionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
  className?: string;
}

const ActionCard = ({ title, description, icon: Icon, to, className }: ActionCardProps) => {
  return (
    <Link 
      to={to}
      className={cn(
        "glass-card block p-6 transition-all duration-300 hover:shadow-xl",
        "transform hover:-translate-y-1 group",
        className
      )}
    >
      <div className="flex items-center">
        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mr-4">
          <Icon className="h-6 w-6" />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-200">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ActionCard;
