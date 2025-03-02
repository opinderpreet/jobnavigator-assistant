
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, Clock, ExternalLink, Download, X, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const JobHistory = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultTab = searchParams.get('tab') || 'applied';
  
  // Function to handle tab change
  const handleTabChange = (value: string) => {
    searchParams.set('tab', value);
    setSearchParams(searchParams);
  };
  
  return (
    <MainLayout>
      <div className="space-y-8 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold">Job Applications History</h1>
          <p className="text-muted-foreground mt-2">
            Track and manage all your job applications in one place.
          </p>
        </div>
        
        <Tabs defaultValue={defaultTab} onValueChange={handleTabChange} className="animate-fade-in animate-delay-100">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
            <TabsTrigger value="applied" className="text-base py-3">
              <CheckCircle className="h-4 w-4 mr-2" />
              Jobs Applied
            </TabsTrigger>
            <TabsTrigger value="review" className="text-base py-3">
              <Clock className="h-4 w-4 mr-2" />
              Jobs Under Review
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="applied" className="animate-fade-in">
            <div className="glass-card overflow-hidden rounded-2xl divide-y divide-border">
              <div className="bg-secondary/50 px-6 py-4">
                <div className="grid grid-cols-12 text-sm font-medium text-muted-foreground">
                  <div className="col-span-4">Company & Position</div>
                  <div className="col-span-2">ATS Score</div>
                  <div className="col-span-2">Resume Version</div>
                  <div className="col-span-2">Date Applied</div>
                  <div className="col-span-2">Actions</div>
                </div>
              </div>
              
              <div className="divide-y divide-border">
                {appliedJobs.map((job, index) => (
                  <div key={index} className="px-6 py-4 hover:bg-secondary/30 transition-colors">
                    <div className="grid grid-cols-12 items-center">
                      <div className="col-span-4">
                        <p className="font-medium">{job.title}</p>
                        <p className="text-sm text-muted-foreground">{job.company}</p>
                      </div>
                      <div className="col-span-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {job.atsScore}%
                        </span>
                      </div>
                      <div className="col-span-2 text-sm">
                        {job.resumeVersion}
                      </div>
                      <div className="col-span-2 text-sm text-muted-foreground">
                        {job.dateApplied}
                      </div>
                      <div className="col-span-2 flex space-x-2">
                        <Button variant="outline" size="icon" title="View Job Posting">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" title="Download Resume">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="review" className="animate-fade-in">
            <div className="glass-card overflow-hidden rounded-2xl divide-y divide-border">
              <div className="bg-secondary/50 px-6 py-4">
                <div className="grid grid-cols-12 text-sm font-medium text-muted-foreground">
                  <div className="col-span-4">Company & Position</div>
                  <div className="col-span-2">Current Score</div>
                  <div className="col-span-2">Optimized Score</div>
                  <div className="col-span-2">Resume Version</div>
                  <div className="col-span-2">Actions</div>
                </div>
              </div>
              
              <div className="divide-y divide-border">
                {reviewJobs.map((job, index) => (
                  <div key={index} className="px-6 py-4 hover:bg-secondary/30 transition-colors">
                    <div className="grid grid-cols-12 items-center">
                      <div className="col-span-4">
                        <p className="font-medium">{job.title}</p>
                        <p className="text-sm text-muted-foreground">{job.company}</p>
                      </div>
                      <div className="col-span-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                          {job.currentScore}%
                        </span>
                      </div>
                      <div className="col-span-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {job.optimizedScore}%
                        </span>
                      </div>
                      <div className="col-span-2 text-sm">
                        {job.resumeVersion}
                      </div>
                      <div className="col-span-2 flex space-x-2">
                        <Button 
                          variant="default" 
                          size="sm"
                          className="flex items-center gap-1"
                          onClick={() => navigate(`/job-review/${index + 1}`)}
                        >
                          <Eye className="h-3.5 w-3.5" />
                          Review
                        </Button>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="text-red-500 hover:text-red-600 hover:border-red-200 hover:bg-red-50"
                          title="Reject"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

// Sample data for applied jobs
const appliedJobs = [
  {
    company: 'Apple',
    title: 'Frontend Developer',
    atsScore: 92,
    resumeVersion: 'Tech-v3',
    dateApplied: 'May 15, 2023'
  },
  {
    company: 'Google',
    title: 'Senior UX Designer',
    atsScore: 94,
    resumeVersion: 'Design-v2',
    dateApplied: 'May 12, 2023'
  },
  {
    company: 'Microsoft',
    title: 'Product Manager',
    atsScore: 90,
    resumeVersion: 'PM-v1',
    dateApplied: 'May 10, 2023'
  },
  {
    company: 'Amazon',
    title: 'Software Engineer',
    atsScore: 89,
    resumeVersion: 'Tech-v2',
    dateApplied: 'May 5, 2023'
  },
  {
    company: 'Netflix',
    title: 'UI Developer',
    atsScore: 95,
    resumeVersion: 'Tech-v3',
    dateApplied: 'May 1, 2023'
  }
];

// Sample data for jobs under review
const reviewJobs = [
  {
    company: 'Airbnb',
    title: 'Full Stack Developer',
    currentScore: 75,
    optimizedScore: 92,
    resumeVersion: 'Tech-v3'
  },
  {
    company: 'Uber',
    title: 'Mobile App Developer',
    currentScore: 68,
    optimizedScore: 89,
    resumeVersion: 'Tech-v2'
  },
  {
    company: 'Adobe',
    title: 'UX/UI Designer',
    currentScore: 72,
    optimizedScore: 93,
    resumeVersion: 'Design-v2'
  },
  {
    company: 'Spotify',
    title: 'Frontend Engineer',
    currentScore: 65,
    optimizedScore: 88,
    resumeVersion: 'Tech-v3'
  },
  {
    company: 'Dropbox',
    title: 'Backend Developer',
    currentScore: 70,
    optimizedScore: 91,
    resumeVersion: 'Tech-v2'
  }
];

export default JobHistory;
