
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { FileText, ExternalLink, Download, Edit, Trash, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResumeLibrary = () => {
  return (
    <MainLayout>
      <div className="space-y-8 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Resume Library</h1>
            <p className="text-muted-foreground mt-2">
              Manage all versions of your resumes and track their performance.
            </p>
          </div>
          
          <Button variant="default" className="transition-all duration-300 transform hover:scale-105">
            <Plus className="h-4 w-4 mr-2" />
            Add New Resume
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {resumes.map((resume, index) => (
            <div 
              key={index} 
              className="glass-card p-6 transition-all duration-300 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mr-3">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{resume.name}</h3>
                    <p className="text-sm text-muted-foreground">{resume.version}</p>
                  </div>
                </div>
                
                <div className="flex space-x-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Created</span>
                  <span className="text-sm">{resume.created}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Last Updated</span>
                  <span className="text-sm">{resume.updated}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">File Format</span>
                  <span className="text-sm">{resume.format}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Applications</span>
                  <span className="text-sm font-medium">{resume.applications}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Avg. ATS Score</span>
                  <span className={`text-sm font-medium ${getScoreColorClass(resume.atsScore)}`}>
                    {resume.atsScore}%
                  </span>
                </div>
              </div>
              
              <div className="mt-6 flex space-x-2">
                <Button variant="outline" className="flex-1">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button variant="outline" className="flex-1">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Apps
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

// Helper function to get color class based on ATS score
const getScoreColorClass = (score: number) => {
  if (score >= 90) return 'text-green-600';
  if (score >= 80) return 'text-green-500';
  if (score >= 70) return 'text-amber-500';
  return 'text-red-500';
};

// Sample data for resumes
const resumes = [
  {
    name: 'Software Engineer Resume',
    version: 'Tech-v3',
    created: 'Feb 15, 2023',
    updated: 'May 10, 2023',
    format: 'PDF',
    applications: 15,
    atsScore: 92
  },
  {
    name: 'Product Manager Resume',
    version: 'PM-v1',
    created: 'Mar 5, 2023',
    updated: 'Apr 20, 2023',
    format: 'DOCX',
    applications: 8,
    atsScore: 88
  },
  {
    name: 'UX Designer Resume',
    version: 'Design-v2',
    created: 'Jan 10, 2023',
    updated: 'May 5, 2023',
    format: 'PDF',
    applications: 12,
    atsScore: 94
  },
  {
    name: 'Data Scientist Resume',
    version: 'Data-v1',
    created: 'Apr 2, 2023',
    updated: 'Apr 15, 2023',
    format: 'PDF',
    applications: 6,
    atsScore: 85
  },
  {
    name: 'Marketing Specialist Resume',
    version: 'Marketing-v1',
    created: 'Mar 20, 2023',
    updated: 'Apr 10, 2023',
    format: 'DOCX',
    applications: 9,
    atsScore: 82
  },
  {
    name: 'Frontend Developer Resume',
    version: 'Frontend-v2',
    created: 'Feb 28, 2023',
    updated: 'May 12, 2023',
    format: 'PDF',
    applications: 14,
    atsScore: 90
  }
];

export default ResumeLibrary;
