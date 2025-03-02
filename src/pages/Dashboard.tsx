
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import MetricsCard from '@/components/dashboard/MetricsCard';
import ActionCard from '@/components/dashboard/ActionCard';
import { Search, Briefcase, CheckCircle, Clock, ArrowRight } from 'lucide-react';

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="space-y-8 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold">Job Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Welcome back. Here's an overview of your job search activity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricsCard 
            title="Job Searches"
            value={24}
            icon={Search}
            trend={8}
            className="animate-fade-in animate-delay-100"
          />
          
          <MetricsCard 
            title="Running Job Agents"
            value={3}
            icon={Briefcase}
            trend={0}
            className="animate-fade-in animate-delay-200"
          />
          
          <MetricsCard 
            title="Jobs Applied"
            value={12}
            icon={CheckCircle}
            trend={15}
            className="animate-fade-in animate-delay-300"
          />
          
          <MetricsCard 
            title="Jobs Under Review"
            value={5}
            icon={Clock}
            description="Awaiting your approval"
            className="animate-fade-in animate-delay-400"
          />
        </div>
        
        <div className="pt-4">
          <h2 className="text-xl font-semibold mb-5">Quick Actions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ActionCard 
              title="View Applied Jobs"
              description="Review all your submitted job applications"
              icon={CheckCircle}
              to="/job-history?tab=applied"
              className="animate-fade-in animate-delay-100"
            />
            
            <ActionCard 
              title="Review Pending Jobs"
              description="Approve optimized resumes for pending applications"
              icon={Clock}
              to="/job-history?tab=review"
              className="animate-fade-in animate-delay-200"
            />
          </div>
        </div>
        
        <div className="pt-4">
          <h2 className="text-xl font-semibold mb-5">Recent Activity</h2>
          
          <div className="glass-card p-6 animate-fade-in animate-delay-300">
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between py-3 border-b border-border last:border-b-0"
                >
                  <div className="flex items-center">
                    <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${activity.iconBg}`}>
                      <activity.icon className={`h-5 w-5 ${activity.iconColor}`} />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">{activity.title}</p>
                      <p className="text-sm text-muted-foreground">{activity.description}</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-4 text-right">
              <button className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                View all activity
                <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

// Sample data for recent activities
const recentActivities = [
  {
    icon: CheckCircle,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-500',
    title: 'Applied to Frontend Developer at Apple',
    description: 'Resume score: 92%',
    time: '2 hours ago'
  },
  {
    icon: Briefcase,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-500',
    title: 'New jobs found for "React Developer"',
    description: '15 new matches found',
    time: '5 hours ago'
  },
  {
    icon: Clock,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-500',
    title: 'Resume optimized for Google UX Designer',
    description: 'Improved score from 76% to 94%',
    time: 'Yesterday'
  }
];

export default Dashboard;
