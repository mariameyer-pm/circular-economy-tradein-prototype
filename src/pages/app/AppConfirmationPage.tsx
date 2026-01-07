import { MobileHeader } from "@/components/MobileHeader";
import { MobileNav } from "@/components/MobileNav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Calendar, MapPin, Recycle, Package } from "lucide-react";
import { Link } from "react-router-dom";

export default function AppConfirmationPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <MobileHeader title="Order Confirmed" />
      
      <main className="p-4 space-y-4">
        {/* Success Icon */}
        <div className="text-center py-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 mb-3">
            <CheckCircle2 className="h-8 w-8 text-success" />
          </div>
          <h1 className="text-2xl font-display">Thank You!</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Order #EM-2026-78542
          </p>
        </div>

        {/* Check Order Status Link */}
        <div className="text-center">
          <Link to="/app/orders" className="text-primary hover:underline font-medium">
            Check order status →
          </Link>
        </div>

        {/* Delivery Info */}
        <Card className="border-success/30 bg-success/5">
          <CardContent className="p-4 space-y-4">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-success" />
              <div>
                <p className="font-medium">Delivery Date</p>
                <p className="text-sm">Tuesday, 12 May 2026</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <div className="text-sm">
                <p className="font-medium">Max Mustermann</p>
                <p className="text-muted-foreground">Musterstraße 123, 10115 Berlin</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-accent/10 rounded-lg p-3">
              <Recycle className="h-5 w-5 text-accent" />
              <div>
                <p className="font-medium text-sm">Old Mattress Pickup</p>
                <p className="text-xs text-muted-foreground">Same day as delivery</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Order Summary */}
        <Card>
          <CardContent className="p-4">
            <h2 className="font-medium mb-3">Order Details</h2>
            
            <div className="flex gap-3 pb-3 border-b">
              <div className="w-14 h-14 bg-secondary rounded flex items-center justify-center">
                <Package className="h-6 w-6 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Emma Original Mattress</p>
                <p className="text-sm text-muted-foreground">140×200 cm</p>
              </div>
              <span className="font-medium">€449</span>
            </div>
            
            <div className="pt-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Recycling</span>
                <span>€29</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Delivery</span>
                <span className="text-accent">Free</span>
              </div>
              <div className="flex justify-between font-bold text-base pt-2 border-t">
                <span>Total Paid</span>
                <span>€478</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Continue Shopping */}
        <Link to="/app">
          <Button variant="outline" className="w-full">
            Continue Shopping
          </Button>
        </Link>
      </main>
      
      <MobileNav />
    </div>
  );
}
