import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { CheckCircle, X, AlertTriangle, ArrowLeft, FileText, ThumbsUp, ThumbsDown } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const mockJob = {
  id: "1",
  company: "Airbnb",
  title: "Full Stack Developer",
  currentScore: 75,
  optimizedScore: 92,
  resumeVersion: "Tech-v3",
  jobDescription: `We are looking for a Full Stack Developer with experience in React, Node.js, and cloud technologies to join our team. The ideal candidate will have strong problem-solving skills and the ability to work in a fast-paced environment.

Requirements:
- 3+ years of experience with React
- 2+ years of experience with Node.js
- Experience with cloud platforms (AWS, GCP, or Azure)
- Strong understanding of JavaScript/TypeScript
- Experience with RESTful APIs and GraphQL`,
  originalResume: `John Doe
Full Stack Developer

Experience:
- Software Engineer at XYZ Company (2018-Present)
- Junior Developer at ABC Corp (2016-2018)

Skills:
- JavaScript, HTML, CSS
- React, Vue.js
- Node.js, Express
- MongoDB, PostgreSQL`,
  optimizedResume: `John Doe
Full Stack Developer

Experience:
- Software Engineer at XYZ Company (2018-Present)
  • Developed and maintained React-based web applications
  • Implemented RESTful APIs using Node.js and Express
  • Deployed applications on AWS infrastructure
- Junior Developer at ABC Corp (2016-2018)
  • Worked on JavaScript/TypeScript projects
  • Built responsive UIs with React components

Skills:
- JavaScript/TypeScript, HTML, CSS
- React (3+ years), Vue.js
- Node.js (2+ years), Express
- MongoDB, PostgreSQL
- AWS, RESTful APIs, GraphQL`
};

const highlightedChanges = [
  { id: 1, original: "Software Engineer at XYZ Company (2018-Present)", optimized: "Software Engineer at XYZ Company (2018-Present)\n  • Developed and maintained React-based web applications\n  • Implemented RESTful APIs using Node.js and Express\n  • Deployed applications on AWS infrastructure", reason: "Added specific achievements that match the job requirements" },
  { id: 2, original: "Junior Developer at ABC Corp (2016-2018)", optimized: "Junior Developer at ABC Corp (2016-2018)\n  • Worked on JavaScript/TypeScript projects\n  • Built responsive UIs with React components", reason: "Added relevant experience with technologies mentioned in the job description" },
  { id: 3, original: "Skills:\n- JavaScript, HTML, CSS\n- React, Vue.js\n- Node.js, Express\n- MongoDB, PostgreSQL", optimized: "Skills:\n- JavaScript/TypeScript, HTML, CSS\n- React (3+ years), Vue.js\n- Node.js (2+ years), Express\n- MongoDB, PostgreSQL\n- AWS, RESTful APIs, GraphQL", reason: "Added missing skills that are specifically mentioned in the job requirements and specified years of experience" }
];

const JobReview = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { toast } = useToast();
  
  const [score, setScore] = useState(mockJob.optimizedScore);
  const [resume, setResume] = useState(mockJob.optimizedResume);
  const [isEditing, setIsEditing] = useState(false);
  const [promptInput, setPromptInput] = useState("");
  
  const [showApproveDialog, setShowApproveDialog] = useState(false);
  const [showRejectDialog, setShowRejectDialog] = useState(false);
  const [showCancelDialog, setShowCancelDialog] = useState(false);
  const [showKeepChangesDialog, setShowKeepChangesDialog] = useState(false);
  
  const handlePromptSubmit = () => {
    if (!promptInput.trim()) return;
    
    toast({
      title: "AI Enhancing Resume",
      description: "Processing your enhancement request...",
    });
    
    setTimeout(() => {
      const newScore = Math.min(99, score + Math.floor(Math.random() * 5) + 1);
      setScore(newScore);
      setResume(resume + "\n\n" + promptInput.trim());
      setPromptInput("");
      
      toast({
        title: "Resume Enhanced",
        description: `Resume has been optimized. New ATS Score: ${newScore}%`,
        variant: "default",
      });
    }, 1500);
  };
  
  const handleApprove = () => {
    toast({
      title: "Application Submitted",
      description: "Your job application has been successfully submitted.",
      variant: "default",
    });
    navigate("/job-history?tab=applied");
  };
  
  const handleReject = () => {
    toast({
      title: "Application Rejected",
      description: "This job application has been removed.",
    });
    navigate("/job-history?tab=review");
  };
  
  const handleCancel = (keepChanges: boolean) => {
    if (keepChanges) {
      toast({
        title: "Changes Saved",
        description: "Your resume changes have been saved as a draft.",
      });
    } else {
      toast({
        title: "Changes Discarded",
        description: "Your resume changes have been discarded.",
      });
    }
    navigate("/dashboard");
  };
  
  return (
    <MainLayout className="pb-20">
      <div className="space-y-8 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <button 
              onClick={() => navigate("/job-history?tab=review")}
              className="flex items-center text-muted-foreground hover:text-foreground transition-colors mb-4"
            >
              <ArrowLeft size={16} className="mr-1" />
              Back to Job History
            </button>
            <h1 className="text-3xl font-bold">Resume Review</h1>
            <p className="text-muted-foreground mt-2">
              Review and optimize your resume for {mockJob.company} - {mockJob.title}
            </p>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Optimized ATS Score</p>
              <p className="text-2xl font-bold text-green-600">{score}%</p>
            </div>
            <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold flex items-center">
                <FileText className="mr-2 h-5 w-5 text-blue-500" />
                Job Description
              </h2>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 whitespace-pre-wrap text-sm">
              {mockJob.jobDescription}
            </div>
          </div>
          
          <div className="glass-card p-6">
            <Tabs defaultValue="optimized">
              <div className="flex items-center justify-between mb-4">
                <TabsList>
                  <TabsTrigger value="optimized">Optimized Resume</TabsTrigger>
                  <TabsTrigger value="original">Original Resume</TabsTrigger>
                  <TabsTrigger value="diff">Changes</TabsTrigger>
                </TabsList>
                
                {!isEditing && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setIsEditing(true)}
                  >
                    Edit Resume
                  </Button>
                )}
              </div>
              
              <TabsContent value="optimized" className="mt-0">
                {isEditing ? (
                  <div className="space-y-4">
                    <Textarea 
                      value={resume} 
                      onChange={(e) => setResume(e.target.value)}
                      className="h-[400px] font-mono text-sm"
                    />
                    <div className="flex justify-end space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => {
                          setResume(mockJob.optimizedResume);
                          setIsEditing(false);
                        }}
                      >
                        Cancel
                      </Button>
                      <Button 
                        size="sm" 
                        onClick={() => {
                          setIsEditing(false);
                          toast({
                            title: "Resume Updated",
                            description: "Your resume changes have been saved.",
                          });
                        }}
                      >
                        Save Changes
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 whitespace-pre-wrap h-[400px] overflow-y-auto text-sm">
                    {resume}
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="original" className="mt-0">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 whitespace-pre-wrap h-[400px] overflow-y-auto text-sm">
                  {mockJob.originalResume}
                </div>
              </TabsContent>
              
              <TabsContent value="diff" className="mt-0">
                <div className="space-y-6 p-4 bg-gray-50 rounded-lg border border-gray-200 h-[400px] overflow-y-auto">
                  {highlightedChanges.map((change) => (
                    <div key={change.id} className="glass-card p-4 border-l-4 border-green-500">
                      <h3 className="font-medium text-sm text-green-700 mb-2">Change {change.id}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-xs font-medium text-gray-500 mb-1">Original:</p>
                          <div className="bg-white p-3 rounded border border-gray-200 whitespace-pre-wrap">
                            {change.original}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-gray-500 mb-1">Optimized:</p>
                          <div className="bg-white p-3 rounded border border-green-100 whitespace-pre-wrap">
                            {change.optimized}
                          </div>
                        </div>
                      </div>
                      <p className="mt-3 text-xs text-gray-600 bg-green-50 p-2 rounded">
                        <span className="font-medium">Reason for change:</span> {change.reason}
                      </p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        <div className="glass-card p-6">
          <h2 className="text-lg font-semibold mb-4">AI Assistant</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Enter a prompt to further enhance your resume. The AI will help optimize it based on your instructions.
          </p>
          
          <div className="flex gap-4">
            <Textarea 
              placeholder="e.g., Add more details about my React experience, or highlight my cloud platform knowledge"
              value={promptInput}
              onChange={(e) => setPromptInput(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handlePromptSubmit}>
              Enhance Resume
            </Button>
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-6 border-t border-border">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => setShowCancelDialog(true)}
          >
            Cancel
          </Button>
          
          <div className="flex gap-3">
            <Button 
              variant="destructive" 
              size="lg"
              onClick={() => setShowRejectDialog(true)}
              className="flex items-center gap-2"
            >
              <ThumbsDown className="h-4 w-4" />
              Reject Application
            </Button>
            
            <Button 
              size="lg"
              onClick={() => setShowApproveDialog(true)}
              className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
            >
              <ThumbsUp className="h-4 w-4" />
              Approve Application
            </Button>
          </div>
        </div>
      </div>
      
      <AlertDialog open={showApproveDialog} onOpenChange={setShowApproveDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Submit Application</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to submit this job application? Your optimized resume will be used.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleApprove} className="bg-green-600 hover:bg-green-700">
              <CheckCircle className="h-4 w-4 mr-2" />
              Approve
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      
      <AlertDialog open={showRejectDialog} onOpenChange={setShowRejectDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Reject Application</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to reject this application? This will permanently remove it from your list.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleReject} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              <ThumbsDown className="h-4 w-4 mr-2" />
              Reject Application
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      
      <AlertDialog open={showCancelDialog} onOpenChange={setShowCancelDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Cancel Review</AlertDialogTitle>
            <AlertDialogDescription>
              Would you like to keep your changes as a draft or discard them?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex flex-col sm:flex-row gap-2">
            <AlertDialogCancel className="sm:mt-0">Close</AlertDialogCancel>
            <Button variant="outline" onClick={() => {
              setShowCancelDialog(false);
              handleCancel(false);
            }}>
              Discard Changes
            </Button>
            <Button onClick={() => {
              setShowCancelDialog(false);
              handleCancel(true);
            }}>
              Keep as Draft
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </MainLayout>
  );
};

export default JobReview;
