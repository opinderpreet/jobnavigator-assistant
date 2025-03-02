
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { UserPlus, Upload, Linkedin, MapPin, Github, Globe, FileText, Building, MapPinned } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const CreateJobAgent = () => {
  return (
    <MainLayout>
      <div className="space-y-8 max-w-3xl mx-auto animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold">Create New Job Agent</h1>
          <p className="text-muted-foreground mt-2">
            Set up your AI job agent to find and apply to matching positions.
          </p>
        </div>
        
        <div className="glass-card p-8 animate-fade-in animate-delay-100">
          <form className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Required Information</h2>
              
              <div className="space-y-3">
                <Label htmlFor="resume" className="text-base">Resume Upload</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center space-y-4 hover:bg-accent/50 transition-colors cursor-pointer">
                  <div className="h-14 w-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Upload className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">Drag and drop your resume</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      PDF, DOCX or image files accepted
                    </p>
                  </div>
                  <div>
                    <Button variant="outline" size="sm">
                      Browse files
                      <input type="file" className="hidden" id="resume" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Optional Information</h2>
              <p className="text-sm text-muted-foreground">
                Providing more information will help the AI find better matching jobs for you.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="linkedin" className="text-base">LinkedIn Profile</Label>
                  <div className="relative">
                    <Linkedin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="linkedin" placeholder="https://linkedin.com/in/yourprofile" className="pl-11" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="github" className="text-base">GitHub Profile</Label>
                  <div className="relative">
                    <Github className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="github" placeholder="https://github.com/yourusername" className="pl-11" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="website" className="text-base">Personal Website</Label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="website" placeholder="https://yourwebsite.com" className="pl-11" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="location" className="text-base">Preferred Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="location" placeholder="City, State or Remote" className="pl-11" />
                  </div>
                </div>
                
                <div className="space-y-3 md:col-span-2">
                  <Label htmlFor="coverLetter" className="text-base">Cover Letter (Optional)</Label>
                  <Textarea 
                    id="coverLetter" 
                    placeholder="Write a general cover letter that the AI can customize for each job application..." 
                    className="min-h-[120px]"
                  />
                </div>
              </div>
              
              <div className="space-y-4 pt-2">
                <div className="space-y-3">
                  <Label className="text-base">Employment Type</Label>
                  <RadioGroup defaultValue="fulltime" className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="fulltime" id="fulltime" />
                      <Label htmlFor="fulltime">Full-time</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="parttime" id="parttime" />
                      <Label htmlFor="parttime">Part-time</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="contract" id="contract" />
                      <Label htmlFor="contract">Contract</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="freelance" id="freelance" />
                      <Label htmlFor="freelance">Freelance</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="any" id="any" />
                      <Label htmlFor="any">Any</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="space-y-3">
                  <Label className="text-base">Work Location</Label>
                  <RadioGroup defaultValue="any" className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="onsite" id="onsite" />
                      <Label htmlFor="onsite">On-site</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="remote" id="remote" />
                      <Label htmlFor="remote">Remote</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="hybrid" id="hybrid" />
                      <Label htmlFor="hybrid">Hybrid</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="any" id="any-location" />
                      <Label htmlFor="any-location">Any</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Additional Instructions</h2>
              
              <div className="space-y-3">
                <Label htmlFor="aiInstructions" className="text-base">AI Instructions</Label>
                <Textarea 
                  id="aiInstructions" 
                  placeholder="Give the AI specific instructions about your job search, e.g., 'Focus on senior roles in fintech that offer visa sponsorship'..." 
                  className="min-h-[150px]"
                />
              </div>
            </div>
            
            <div className="pt-4 flex justify-end">
              <Button type="submit" size="lg" className="transition-all duration-300 transform hover:scale-105">
                <UserPlus className="h-5 w-5 mr-2" />
                Create Job Agent
              </Button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default CreateJobAgent;
