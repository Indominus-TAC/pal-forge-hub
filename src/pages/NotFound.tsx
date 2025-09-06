import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center">
        <div className="gaming-card p-8 mb-6">
          <AlertCircle className="mx-auto h-16 w-16 text-accent mb-4" />
          <h1 className="text-4xl font-bold text-foreground mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Oops! This Pal seems to have wandered off
          </p>
          <p className="text-muted-foreground mb-6">
            The page you're looking for doesn't exist in our PalWorld companion.
          </p>
          <Button asChild className="gaming-gradient">
            <a href="/" className="inline-flex items-center">
              <Home className="mr-2" size={16} />
              Return to Home
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
