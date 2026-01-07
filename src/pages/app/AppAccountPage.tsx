import { MobileHeader } from "@/components/MobileHeader";
import { MobileNav } from "@/components/MobileNav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Settings, HelpCircle, LogOut, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  { icon: User, label: "Profile", path: "#" },
  { icon: Settings, label: "Settings", path: "#" },
  { icon: HelpCircle, label: "Help & Support", path: "#" },
];

export default function AppAccountPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <MobileHeader title="Account" />
      
      <main className="p-4 space-y-4">
        {/* User Card */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-7 w-7 text-primary" />
              </div>
              <div>
                <p className="font-display text-lg">Max Mustermann</p>
                <p className="text-sm text-muted-foreground">max@email.com</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Menu Items */}
        <Card>
          <CardContent className="p-0">
            {menuItems.map((item, index) => (
              <Link
                key={item.label}
                to={item.path}
                className={`flex items-center gap-3 p-4 hover:bg-secondary/50 transition-colors ${
                  index !== menuItems.length - 1 ? 'border-b' : ''
                }`}
              >
                <item.icon className="h-5 w-5 text-muted-foreground" />
                <span className="flex-1 font-medium">{item.label}</span>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </Link>
            ))}
          </CardContent>
        </Card>

        {/* Switch to Website */}
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-sm text-muted-foreground mb-3">
              Want the full experience?
            </p>
            <Link to="/">
              <Button variant="outline" className="w-full">
                Switch to Website
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Logout */}
        <Button variant="ghost" className="w-full text-destructive hover:text-destructive hover:bg-destructive/10">
          <LogOut className="h-4 w-4 mr-2" />
          Log Out
        </Button>
      </main>
      
      <MobileNav />
    </div>
  );
}
