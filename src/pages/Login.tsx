import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff, Mail, Lock, TrendingUp } from 'lucide-react';
import invobusinessLogo from '@/assets/invosmart-logo.png';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[error,setError]=useState("");



  const navigate = useNavigate();

  const handleSubmit =(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    if(email=="iccsHJ" && password=="3435"){ 
      navigate("/");

    }

    else{
      setError("Invalid login id and pass");
    }

    

    
  }

  return (
    <div className="min-h-screen bg-gradient-background flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        {/* Logo and Branding */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <img src={invobusinessLogo} alt="InvoSmart" className="h-16 w-auto" />
          </div>
          <h1 className="text-2xl font-bold text-gradient mb-2">Welcome to InvoSmart</h1>
          <p className="text-muted-foreground">Smart inventory management for modern businesses</p>
        </div>

        {/* Login Card */}
        <Card className="glass-card animate-scale-in">
          <CardHeader className="text-center">
            <CardTitle className="text-xl font-semibold">
              {isLogin ? 'Sign In' : 'Create Account'}
            </CardTitle>
            <CardDescription>
              {isLogin 
                ? 'Enter your credentials to access your dashboard' 
                : 'Start managing your inventory smarter'
              }
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form className="space-y-4" 
            onSubmit={handleSubmit}
            >
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="email"
                    type="name"
                    placeholder="Enter your email"
                    className="pl-10"
                    onChange={(e)=> setEmail(e.target.value)}

                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="pl-10 pr-10"
                    onChange={(e)=> setPassword(e.target.value)} 
                  />

                  {error && <p className="text-red-500 text-xs">{error}</p>}
              
              <div className=''>
                  <p className='text-sm  text-blue-600'>password is our roll no's starting from you</p>

                    
                    </div>
                  
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                </div>
                

              {/* Confirm Password (Sign Up only) */}
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      className="pl-10"
                    />
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <Button className="btn-hero w-full">
                {isLogin ? 'Sign In' : 'Create Account'}
              </Button>
            </form>

            {/* Forgot Password (Login only) */}
            {isLogin && (
              <div className="text-center">
                <button className="text-sm text-primary hover:text-primary/80 transition-colors">
                  Forgot your password?
                </button>
              </div>
            )}

            {/* Toggle between Login/Signup */}
            <div className="text-center pt-4 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-2">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
              </p>
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
              >
                {isLogin ? 'Sign up for free' : 'Sign in instead'}
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Features Preview */}
        <div className="mt-8 text-center animate-slide-up">
          <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span>AI Insights</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span>Real-time Analytics</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span>Smart Automation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}