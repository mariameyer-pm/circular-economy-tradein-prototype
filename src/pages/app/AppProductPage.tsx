import { useState } from "react";
import { MobileHeader } from "@/components/MobileHeader";
import { MobileNav } from "@/components/MobileNav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Truck, Shield, Recycle, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const sizes = [
  { label: "90×200", price: 399 },
  { label: "140×200", price: 449 },
  { label: "160×200", price: 499 },
  { label: "180×200", price: 549 },
];

export default function AppProductPage() {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState(1);
  const [recycling, setRecycling] = useState(false);

  const currentPrice = sizes[selectedSize].price + (recycling ? 29 : 0);

  return (
    <div className="min-h-screen bg-background pb-32">
      <MobileHeader title="Emma Original" showBack />
      
      <main className="p-4 space-y-4">
        {/* Product Image */}
        <div className="aspect-square bg-secondary rounded-lg flex items-center justify-center">
          <div className="w-3/4 h-12 bg-card rounded shadow" />
        </div>

        {/* Product Info */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="destructive">-42%</Badge>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-warning text-warning" />
              <span className="text-sm font-medium">4.8</span>
              <span className="text-sm text-muted-foreground">(12,453)</span>
            </div>
          </div>
          
          <h1 className="font-display text-2xl mb-2">Emma Original Mattress</h1>
          
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-3xl font-bold text-primary">€{sizes[selectedSize].price}</span>
            <span className="text-lg text-muted-foreground line-through">€779</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Truck className="h-4 w-4 text-muted-foreground" />
            <span>Free delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-muted-foreground" />
            <span>100 nights trial</span>
          </div>
        </div>

        {/* Size Selection */}
        <Card>
          <CardContent className="p-4">
            <h3 className="font-medium mb-3">Select Size</h3>
            <div className="grid grid-cols-2 gap-2">
              {sizes.map((size, index) => (
                <Button
                  key={size.label}
                  variant={selectedSize === index ? "default" : "outline"}
                  className="h-auto py-3 flex flex-col"
                  onClick={() => setSelectedSize(index)}
                >
                  <span className="font-medium">{size.label} cm</span>
                  <span className="text-sm opacity-80">€{size.price}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recycling Option */}
        <Card 
          className={`cursor-pointer transition-all ${recycling ? 'border-accent bg-accent/5' : ''}`}
          onClick={() => setRecycling(!recycling)}
        >
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                recycling ? 'bg-accent border-accent' : 'border-muted-foreground'
              }`}>
                {recycling && <Check className="h-3 w-3 text-accent-foreground" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <Recycle className="h-4 w-4 text-accent" />
                  <span className="font-medium">Same-Day Recycling</span>
                  <span className="text-muted-foreground">+€29</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  We pick up your old mattress when we deliver your new one.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-16 left-0 right-0 bg-card border-t p-4">
        <Button 
          className="w-full" 
          size="lg"
          onClick={() => navigate("/app/cart")}
        >
          Add to Cart — €{currentPrice}
        </Button>
      </div>
      
      <MobileNav />
    </div>
  );
}
