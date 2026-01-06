import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Trash2, Recycle, Truck, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8 md:py-12">
        <h1 className="text-3xl font-display mb-8">Your Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {/* Main Product */}
            <Card>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-24 h-24 bg-secondary rounded-lg flex-shrink-0 flex items-center justify-center">
                    <div className="w-16 h-8 bg-card rounded shadow" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-display text-lg">Emma Original Mattress</h3>
                        <p className="text-sm text-muted-foreground">Size: 140×200 cm</p>
                      </div>
                      <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="font-bold">€449</span>
                      <span className="text-sm text-muted-foreground line-through">€599</span>
                      <Badge className="bg-primary text-primary-foreground">-25%</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recycling Add-on */}
            <Card className="border-accent/30 bg-accent/5">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Recycle className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium flex items-center gap-2">
                          Same-Day Recycling
                          <Badge variant="secondary">Add-on</Badge>
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Old mattress picked up on delivery day
                        </p>
                      </div>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-destructive">
                        Remove
                      </Button>
                    </div>
                    <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Truck className="h-4 w-4" /> Door-to-door pickup
                      </span>
                      <span>No transport required</span>
                    </div>
                    <p className="font-bold mt-2">€29</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-display">Delivery Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Delivery Address</p>
                    <p className="text-sm text-muted-foreground">
                      Max Mustermann<br />
                      Musterstraße 123<br />
                      10115 Berlin, Germany
                    </p>
                    <Button variant="link" className="p-0 h-auto text-primary">Change</Button>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Delivery Date</p>
                    <p className="text-sm text-muted-foreground">Tuesday, 12 May 2026</p>
                    <p className="text-xs text-accent font-medium mt-1">✓ Free delivery</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg font-display">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Emma Original Mattress</span>
                    <span>€449</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Same-Day Recycling</span>
                    <span>€29</span>
                  </div>
                  <div className="flex justify-between text-accent">
                    <span>Delivery</span>
                    <span>Free</span>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>€478</span>
                </div>

                <div className="text-xs text-muted-foreground text-center">
                  Including VAT. Free returns within 100 nights.
                </div>

                <Link to="/confirmation">
                  <Button className="w-full h-12 text-lg">
                    Proceed to Checkout
                  </Button>
                </Link>

                <div className="text-center">
                  <Link to="/" className="text-sm text-primary hover:underline">
                    Continue Shopping
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
