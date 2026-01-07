import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Truck, Recycle, Phone, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8 md:py-12 max-w-2xl">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-success/10 mb-4">
            <CheckCircle2 className="h-10 w-10 text-success" />
          </div>
          <h1 className="text-3xl font-display mb-2">Order Confirmed!</h1>
          <p className="text-muted-foreground">
            Order #EM-2026-78542 · Confirmation sent to max@email.com
          </p>
        </div>

        {/* Delivery Card */}
        <Card className="mb-6 border-success/30 bg-success/5">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Truck className="h-6 w-6 text-success" />
              <div>
                <h2 className="font-display text-lg">Delivery Tomorrow</h2>
                <p className="text-sm text-muted-foreground">
                  Your new mattress will be delivered on:
                </p>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-4 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium">Tuesday, 12 May 2026</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div className="text-sm">
                  <p>Max Mustermann</p>
                  <p className="text-muted-foreground">Musterstraße 123, 10115 Berlin</p>
                </div>
              </div>
            </div>

            {/* Recycling Confirmation */}
            <div className="flex items-start gap-3 bg-accent/10 rounded-lg p-4">
              <Recycle className="h-5 w-5 text-accent mt-0.5" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Old Mattress Pickup</span>
                  <Badge variant="secondary">Same Day</Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Your old mattress will be picked up on the same day as delivery.
                </p>
                <p className="text-xs text-accent mt-2 font-medium">
                  ✓ Tip: Please make sure the mattress is accessible.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Order Details */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="font-display text-lg mb-4">Order Details</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-start pb-4 border-b">
                <div className="flex gap-3">
                  <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center">
                    <div className="w-10 h-5 bg-card rounded shadow" />
                  </div>
                  <div>
                    <p className="font-medium">Emma Original Mattress</p>
                    <p className="text-sm text-muted-foreground">140×200 cm</p>
                  </div>
                </div>
                <span className="font-medium">€449</span>
              </div>
              
              <div className="flex justify-between items-center pb-4 border-b">
                <div className="flex items-center gap-2">
                  <Recycle className="h-4 w-4 text-accent" />
                  <span>Same-Day Recycling</span>
                </div>
                <span>€29</span>
              </div>
              
              <div className="flex justify-between items-center pb-4 border-b">
                <span className="text-muted-foreground">Delivery</span>
                <span className="text-accent font-medium">Free</span>
              </div>
              
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total Paid</span>
                <span>€478</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <Card className="mb-8">
          <CardContent className="p-6 text-center">
            <p className="text-muted-foreground mb-2">Any questions?</p>
            <div className="flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="font-medium">Call us at 0123 456 789</span>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <Link to="/order-status" className="text-primary hover:underline font-medium">
            Check order status →
          </Link>
          <div>
            <Link to="/">
              <Button variant="outline" size="lg">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
