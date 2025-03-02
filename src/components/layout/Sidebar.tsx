
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Briefcase,
  UserPlus,
  History,
  FileText,
  HelpCircle,
  Settings,
  ChevronLeft,
  ChevronRight,
  Home
} from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
  title: string;
  path: string;
  icon: React.ElementType;
};

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: Home,
  },
  {
    title: "Create Job Agent",
    path: "/create-job-agent",
    icon: UserPlus,
  },
  {
    title: "Job History",
    path: "/job-history",
    icon: History,
  },
  {
    title: "Resume Library",
    path: "/resume-library",
    icon: FileText,
  },
  {
    title: "Support",
    path: "/support",
    icon: HelpCircle,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={cn(
        "h-screen fixed top-0 left-0 flex flex-col bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-out-expo z-50",
        collapsed ? "w-[80px]" : "w-[250px]"
      )}
    >
      <div className="flex items-center h-16 px-4 border-b border-sidebar-border">
        <div className={cn("flex items-center transition-opacity duration-300", collapsed ? "opacity-0 w-0" : "opacity-100")}>
          <Briefcase className="h-6 w-6 text-primary mr-2" />
          <h1 className="text-lg font-semibold">JobNavigator</h1>
        </div>
        
        <button 
          onClick={toggleSidebar}
          className={cn(
            "h-8 w-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-200 ease-in-out",
            collapsed ? "ml-auto" : "ml-auto"
          )}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto py-6 scrollbar-hide">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center h-10 px-3 rounded-lg text-sm font-medium transition-colors duration-200",
                    "hover:bg-accent group",
                    isActive 
                      ? "bg-primary/10 text-primary" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <item.icon 
                    size={20} 
                    className={cn(
                      "transition-all duration-200",
                      isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                    )} 
                  />
                  
                  <span className={cn(
                    "ml-3 transition-all duration-300",
                    collapsed ? "opacity-0 w-0 translate-x-4 hidden" : "opacity-100 translate-x-0"
                  )}>
                    {item.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className={cn(
        "p-4 border-t border-sidebar-border transition-opacity duration-300",
        collapsed ? "opacity-0" : "opacity-100"
      )}>
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <span className="text-sm font-medium">JS</span>
          </div>
          <div className={cn(
            "ml-3 transition-all duration-300",
            collapsed ? "opacity-0 w-0" : "opacity-100"
          )}>
            <p className="text-sm font-medium">Job Seeker</p>
            <p className="text-xs text-muted-foreground">Free Account</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
