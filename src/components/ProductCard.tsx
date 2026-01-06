import { Star, Check, Recycle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  compact?: boolean;
}

export function ProductCard({ compact = false }: ProductCardProps) {
  const [recyclingSelected, setRecyclingSelected] = useState(false);

  if (compact) {
    return (
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
          <div className="w-3/4 h-1/2 bg-card rounded-lg shadow-lg transform -rotate-3" />
        </div>
        <CardContent className="p-4">
          <Badge variant="secondary" className="mb-2 text-xs">Bestseller</Badge>
          <h3 className="font-display text-lg mb-1">Emma Original</h3>
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-primary text-primary" />
            ))}
            <span className="text-xs text-muted-foreground ml-1">(12,345)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">€449</span>
            <span className="text-sm text-muted-foreground line-through">€599</span>
            <Badge className="bg-primary text-primary-foreground">-25%</Badge>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
      {/* Product Image */}
      <div className="space-y-4">
        <div className="aspect-square bg-gradient-to-br from-secondary to-muted rounded-xl flex items-center justify-center relative overflow-hidden">
          <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground text-sm">
            -25% SALE
          </Badge>
          <div className="w-4/5 h-1/3 bg-card rounded-xl shadow-2xl transform -rotate-2" />
        </div>
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-20 h-20 rounded-lg bg-secondary cursor-pointer hover:ring-2 ring-primary transition-all"
            />
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
          ))}
          <span className="text-sm text-muted-foreground ml-2">4.8 (12,345 reviews)</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-display mb-4">Emma Original Mattress</h1>

        <div className="flex items-baseline gap-3 mb-6">
          <span className="text-3xl font-bold">€449</span>
          <span className="text-xl text-muted-foreground line-through">€599</span>
          <Badge className="bg-primary text-primary-foreground">Save €150</Badge>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-sm">
            <Check className="h-4 w-4 text-accent" />
            <span>Free Delivery</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Check className="h-4 w-4 text-accent" />
            <span>100-Night Trial</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Check className="h-4 w-4 text-accent" />
            <span>10-Year Warranty</span>
          </div>
        </div>

        {/* Size Selection */}
        <div className="mb-6">
          <label className="text-sm font-medium mb-2 block">Select Size</label>
          <div className="grid grid-cols-3 gap-2">
            {["90×200", "140×200", "180×200"].map((size) => (
              <Button
                key={size}
                variant={size === "140×200" ? "default" : "outline"}
                className="h-12"
              >
                {size}
              </Button>
            ))}
          </div>
        </div>

        {/* Recycling Upsell */}
        <Card className="mb-6 border-accent/30 bg-accent/5">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <Checkbox
                id="recycling"
                checked={recyclingSelected}
                onCheckedChange={(checked) => setRecyclingSelected(checked as boolean)}
                className="mt-1"
              />
              <div className="flex-1">
                <label htmlFor="recycling" className="flex items-center gap-2 font-medium cursor-pointer">
                  <Recycle className="h-5 w-5 text-accent" />
                  <span>NEW: Same-Day Recycling</span>
                  <Badge variant="secondary" className="ml-auto">+€29</Badge>
                </label>
                <p className="text-sm text-muted-foreground mt-1">
                  We take your old mattress with us on delivery day. Door-to-door pickup, no transport required.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Add to Cart */}
        <Link to="/cart" className="mt-auto">
          <Button size="lg" className="w-full text-lg h-14">
            Add to Cart — €{recyclingSelected ? "478" : "449"}
          </Button>
        </Link>
      </div>
    </div>
  );
}
