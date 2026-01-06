import { Moon, Shield, Truck, CreditCard } from "lucide-react";

const badges = [
  {
    icon: Moon,
    text: "100-Night Trial",
  },
  {
    icon: Shield,
    text: "10-Year Warranty",
  },
  {
    icon: Truck,
    text: "Free Delivery",
  },
  {
    icon: CreditCard,
    text: "0% Financing",
  },
];

export function TrustBadges() {
  return (
    <div className="bg-card border-y py-4">
      <div className="container flex flex-wrap items-center justify-center gap-6 md:gap-12">
        {badges.map((badge) => (
          <div key={badge.text} className="flex items-center gap-2 text-sm text-muted-foreground">
            <badge.icon className="h-5 w-5" />
            <span>{badge.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
