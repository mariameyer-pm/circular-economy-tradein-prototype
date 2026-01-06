import { ShoppingCart, User, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <>
      {/* Top Banner */}
      <div className="bg-banner text-banner-foreground py-2 text-center text-sm font-medium">
        <span className="animate-pulse">⏰</span> WINTER SALE: Up to 50% off — Free Delivery & 100-Night Trial
      </div>
      
      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 border-b">
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-display text-primary">emma</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              SALE
            </Link>
            <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Mattresses
            </Link>
            <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Pillows
            </Link>
            <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Bedding
            </Link>
            <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Beds
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  1
                </span>
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
