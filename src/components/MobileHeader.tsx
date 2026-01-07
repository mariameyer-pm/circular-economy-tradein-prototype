import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface MobileHeaderProps {
  title: string;
  showBack?: boolean;
}

export function MobileHeader({ title, showBack = false }: MobileHeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-card border-b">
      <div className="flex items-center h-14 px-4">
        {showBack ? (
          <Button 
            variant="ghost" 
            size="icon" 
            className="mr-2"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        ) : (
          <span className="text-xl font-display text-primary mr-4">emma</span>
        )}
        <h1 className="font-display text-lg flex-1">{title}</h1>
      </div>
    </header>
  );
}
