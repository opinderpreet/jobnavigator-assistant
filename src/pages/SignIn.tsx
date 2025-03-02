
import React, { useState } from 'react';
import { Eye, EyeOff, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-md">
        <div className="mb-10 text-center">
          <Link to="/" className="inline-block">
            <img src="/lovable-uploads/04ff9bf4-9b18-4158-8fc0-5e1b4bfa29f6.png" alt="Logo" className="h-10 w-10" />
          </Link>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h1 className="text-2xl font-bold text-center mb-8">Log in to Qwen</h1>
          
          <form className="space-y-4">
            <div className="relative">
              <div className="absolute left-3 top-3 text-gray-400">
                <Mail size={18} />
              </div>
              <Input 
                type="email" 
                placeholder="Enter Your Email" 
                className="pl-10 bg-gray-50 border-gray-200" 
              />
            </div>
            
            <div className="relative">
              <div className="absolute left-3 top-3 text-gray-400">
                <Eye size={18} />
              </div>
              <Input 
                type={showPassword ? "text" : "password"} 
                placeholder="Enter Your Password" 
                className="pl-10 bg-gray-50 border-gray-200" 
              />
              <button 
                type="button"
                className="absolute right-3 top-3 text-gray-400"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm text-gray-600">
                  Remember me
                </Label>
              </div>
              <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>
            
            <Button type="submit" className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800">
              Log In
            </Button>
          </form>
          
          <div className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </div>
          
          <div className="mt-6 text-center text-sm text-gray-500">
            or
          </div>
          
          <div className="mt-6 space-y-3">
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center gap-2 border-gray-300 hover:bg-gray-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="#E2231A"/>
              </svg>
              Continue with Google
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center gap-2 border-gray-300 hover:bg-gray-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.167 8.839 21.594C9.339 21.69 9.5 21.39 9.5 21.12V19.378C6.636 19.986 6.089 18.025 6.089 18.025C5.661 16.858 5.026 16.57 5.026 16.57C4.169 15.95 5.095 15.962 5.095 15.962C6.046 16.034 6.54 16.977 6.54 16.977C7.389 18.48 8.839 18.071 9.54 17.808C9.635 17.172 9.906 16.763 10.206 16.528C7.861 16.287 5.399 15.425 5.399 11.573C5.399 10.42 5.76 9.479 6.36 8.743C6.183 8.449 5.869 7.416 6.46 6.06C6.46 6.06 7.153 5.785 9.5 7.38C10.315 7.155 11.175 7.042 12.03 7.037C12.885 7.042 13.745 7.155 14.56 7.38C16.907 5.785 17.6 6.06 17.6 6.06C18.191 7.416 17.877 8.449 17.7 8.743C18.3 9.479 18.661 10.42 18.661 11.573C18.661 15.438 16.199 16.287 13.854 16.528C14.154 16.763 14.425 17.172 14.52 17.808C15.22 18.071 16.67 18.48 17.52 16.977C18.01 16.034 18.959 15.962 19.91 15.962C20.936 15.95 20.089 16.57 19.232 16.57C18.598 16.858 18.169 18.025 18.169 18.025C17.621 19.986 15.074 19.378 12.21 19.378V21.12C12.21 21.39 12.371 21.69 12.871 21.594C16.835 20.167 19.7 16.418 19.7 12C19.7 6.477 15.223 2 9.7 2H12Z" fill="#000000"/>
              </svg>
              Continue with Github
            </Button>
          </div>
        </div>
        
        <div className="mt-8 flex justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <img src="/lovable-uploads/04ff9bf4-9b18-4158-8fc0-5e1b4bfa29f6.png" alt="Qwen Logo" className="h-6 w-6 mr-2" />
            <span>Qwen</span>
          </div>
          <div>
            copyright © 2025
          </div>
          <div>
            Powered by Open WebUI
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
