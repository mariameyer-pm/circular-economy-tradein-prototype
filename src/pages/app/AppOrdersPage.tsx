import { MobileHeader } from "@/components/MobileHeader";
import { MobileNav } from "@/components/MobileNav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function AppOrdersPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <MobileHeader title="Orders" />
      
      <main className="p-4">
        <Card className="border-2">
          <CardContent className="p-6">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <Package className="h-6 w-6 text-foreground" />
              <h2 className="font-display text-xl">Delivery Tomorrow</h2>
            </div>

            {/* Product Info */}
            <div className="flex items-center gap-4 mb-4 p-3 bg-secondary/50 rounded-lg">
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                <Package className="h-6 w-6 text-muted-foreground" />
              </div>
              <div>
                <p className="font-display">Emma Original Mattress</p>
                <p className="text-sm text-muted-foreground">140×200 cm</p>
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-3 text-sm">
              <p>Your new mattress arrives tomorrow.</p>
              <p>Your old mattress will be picked up too.</p>
              <p>
                <span className="font-medium">Tip:</span> Please make sure the mattress is accessible.
              </p>
            </div>
            
            {/* Contact */}
            <div className="mt-4 flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4" />
              <span>Questions?</span>
              <a href="tel:0123456789" className="font-bold hover:text-primary">
                0123 456 789
              </a>
            </div>
            
            {/* Action Button */}
            <div className="mt-4">
              <Link to="/app/confirmation">
                <Button variant="outline" className="w-full border-2 border-foreground hover:bg-secondary">
                  Back to Order Confirmation
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <MobileNav />
    </div>
  );
}
