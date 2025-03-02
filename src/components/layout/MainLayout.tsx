
import React from 'react';
import Sidebar from './Sidebar';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainLayout = ({ children, className }: MainLayoutProps) => {
  return (
    <div className="h-screen flex bg-background overflow-hidden">
      <Sidebar />
      <main 
        className={cn(
          "flex-1 ml-[250px] overflow-y-auto transition-all duration-300 ease-out-expo",
          className
        )}
      >
        <div className="container mx-auto py-8 px-6 max-w-7xl">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
