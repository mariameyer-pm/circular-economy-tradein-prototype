import { MobileHeader } from "@/components/MobileHeader";
import { MobileNav } from "@/components/MobileNav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Recycle, Truck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AppCartPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-32">
      <MobileHeader title="Cart" />
      
      <main className="p-4 space-y-4">
        {/* Cart Item */}
        <Card>
          <CardContent className="p-4">
            <div className="flex gap-4">
              <div className="w-20 h-20 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                <div className="w-14 h-4 bg-card rounded shadow" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Emma Original Mattress</h3>
                <p className="text-sm text-muted-foreground">140×200 cm</p>
                <p className="font-bold mt-2">€449</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recycling */}
        <Card className="border-accent bg-accent/5">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Recycle className="h-5 w-5 text-accent" />
              <div className="flex-1">
                <p className="font-medium">Same-Day Recycling</p>
                <p className="text-sm text-muted-foreground">Old mattress pickup</p>
              </div>
              <span className="font-medium">€29</span>
            </div>
          </CardContent>
        </Card>

        {/* Delivery Info */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Truck className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Free Delivery</p>
                <p className="text-sm text-muted-foreground">Arrives in 2-3 business days</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Order Summary */}
        <Card>
          <CardContent className="p-4 space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>€449</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Recycling</span>
              <span>€29</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Delivery</span>
              <span className="text-accent font-medium">Free</span>
            </div>
            <div className="border-t pt-3 flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>€478</span>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-16 left-0 right-0 bg-card border-t p-4">
        <Button 
          className="w-full" 
          size="lg"
          onClick={() => navigate("/app/confirmation")}
        >
          Checkout — €478
        </Button>
      </div>
      
      <MobileNav />
    </div>
  );
}
