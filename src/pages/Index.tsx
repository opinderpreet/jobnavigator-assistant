
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// This component will act as a router to direct users to the appropriate starting page
const Index = () => {
  const navigate = useNavigate();
  
  // Mock function to check if user is authenticated
  const isAuthenticated = () => {
    // For demo purposes, return false to simulate a non-authenticated user
    return false;
  };
  
  // Mock function to check if user has existing job agents
  const hasExistingJobAgents = () => {
    // For demo purposes, we'll return false to simulate a first-time user
    return false;
  };
  
  useEffect(() => {
    // Check if user is authenticated
    if (!isAuthenticated()) {
      // Not authenticated - redirect to signup
      navigate('/signup');
    } else {
      // Check if user has existing job agents
      if (hasExistingJobAgents()) {
        // Returning user - redirect to dashboard
        navigate('/dashboard');
      } else {
        // First-time user - redirect to create job agent
        navigate('/create-job-agent');
      }
    }
  }, [navigate]);
  
  return (
    <div className="h-screen flex items-center justify-center bg-background">
      <div className="glass-card p-8 text-center animate-pulse-slow">
        <h2 className="text-2xl font-semibold">Loading JobNavigator</h2>
        <p className="text-muted-foreground mt-2">Please wait while we prepare your experience...</p>
      </div>
    </div>
  );
};

export default Index;
