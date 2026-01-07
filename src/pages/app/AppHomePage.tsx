import { MobileHeader } from "@/components/MobileHeader";
import { MobileNav } from "@/components/MobileNav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Truck } from "lucide-react";
import { Link } from "react-router-dom";

export default function AppHomePage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <MobileHeader title="Shop" />
      
      <main className="p-4 space-y-4">
        {/* Sale Banner */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 text-center">
            <p className="text-sm font-medium">⏰ WINTER SALE</p>
            <p className="text-2xl font-display mt-1">Up to 50% OFF</p>
            <p className="text-sm opacity-90 mt-1">Free Delivery & 100-Night Trial</p>
          </CardContent>
        </Card>

        {/* Featured Product */}
        <Card>
          <CardContent className="p-4">
            <div className="aspect-video bg-secondary rounded-lg mb-4 flex items-center justify-center">
              <div className="w-3/4 h-8 bg-card rounded shadow" />
            </div>
            
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="destructive">-42%</Badge>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-warning text-warning" />
                <span className="text-sm font-medium">4.8</span>
                <span className="text-sm text-muted-foreground">(12,453)</span>
              </div>
            </div>
            
            <h2 className="font-display text-xl mb-1">Emma Original Mattress</h2>
            
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-2xl font-bold text-primary">€449</span>
              <span className="text-muted-foreground line-through">€779</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Truck className="h-4 w-4" />
              <span>Free delivery in 2-3 days</span>
            </div>
            
            <Link to="/app/product">
              <Button className="w-full" size="lg">
                View Product
              </Button>
            </Link>
          </CardContent>
        </Card>
      </main>
      
      <MobileNav />
    </div>
  );
}
