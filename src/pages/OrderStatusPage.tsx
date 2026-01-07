import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function OrderStatusPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8 md:py-12 max-w-md">
        <Card className="border-2">
          <CardContent className="p-8">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <Package className="h-7 w-7 text-foreground" />
              <h1 className="font-display text-2xl">Delivery Tomorrow</h1>
            </div>
            
            {/* Content */}
            <div className="space-y-4 text-lg">
              <p>Your new mattress arrives tomorrow.</p>
              <p>Your old mattress will be picked up too.</p>
            </div>
            
            {/* Tip */}
            <p className="mt-6 text-lg">
              <span className="font-medium">Tip:</span> Please make sure the mattress is accessible.
            </p>
            
            {/* Contact */}
            <div className="mt-6 flex items-center gap-2 text-lg">
              <span>Any questions? Call us at</span>
            </div>
            <a href="tel:0123456789" className="font-bold text-lg hover:text-primary">
              0123 456 789
            </a>
            
            {/* Action Button */}
            <div className="mt-8">
              <Link to="/confirmation">
                <Button variant="outline" size="lg" className="w-full border-2 border-foreground hover:bg-secondary">
                  View Order
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
