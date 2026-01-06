import { Header } from "@/components/Header";
import { TrustBadges } from "@/components/TrustBadges";
import { ProductCard } from "@/components/ProductCard";

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <TrustBadges />
      
      <main className="container py-8 md:py-12">
        <ProductCard />
        
        {/* Features Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-display text-center mb-8">Why Choose Emma?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Memory Foam Comfort",
                description: "Our patented AirGrid technology adapts to your body for perfect support."
              },
              {
                title: "Climate Neutral",
                description: "Produced sustainably with 100% renewable energy."
              },
              {
                title: "Award Winning",
                description: "Tested and recommended by leading consumer organizations."
              }
            ].map((feature) => (
              <div key={feature.title} className="text-center p-6 rounded-xl bg-card border">
                <h3 className="font-display text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-display text-center mb-8">Loved by 5 Million Sleepers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Sarah M.", text: "Best mattress I've ever owned. The recycling service was so convenient!" },
              { name: "Thomas K.", text: "Perfect firmness and the delivery was incredibly fast." },
              { name: "Anna L.", text: "Love that they picked up my old mattress. So hassle-free!" }
            ].map((review) => (
              <div key={review.name} className="p-6 rounded-xl bg-card border">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary">★</span>
                  ))}
                </div>
                <p className="text-sm mb-4">"{review.text}"</p>
                <p className="text-sm font-medium">{review.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
