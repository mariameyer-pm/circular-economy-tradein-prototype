import { useState } from "react";
import { MobileHeader } from "@/components/MobileHeader";
import { MobileNav } from "@/components/MobileNav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, SlidersHorizontal, X } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const mattresses = [
  {
    id: "emma-original",
    name: "Emma Original Mattress",
    rating: 4.8,
    reviews: 12453,
    price: 449,
    originalPrice: 779,
    discount: 42,
    isAvailable: true,
    firmness: "Medium",
    type: "Foam",
  },
  {
    id: "emma-hybrid",
    name: "Emma Hybrid Premium",
    rating: 4.9,
    reviews: 8234,
    price: 699,
    originalPrice: 1199,
    discount: 42,
    isAvailable: true,
    firmness: "Medium-Firm",
    type: "Hybrid",
  },
  {
    id: "emma-one",
    name: "Emma One",
    rating: 4.6,
    reviews: 5621,
    price: 299,
    originalPrice: 499,
    discount: 40,
    isAvailable: true,
    firmness: "Firm",
    type: "Foam",
  },
  {
    id: "emma-luxe",
    name: "Emma Luxe Cooling",
    rating: 4.9,
    reviews: 3892,
    price: 899,
    originalPrice: 1499,
    discount: 40,
    isAvailable: true,
    firmness: "Medium",
    type: "Hybrid",
  },
  {
    id: "emma-comfort",
    name: "Emma Comfort",
    rating: 4.5,
    reviews: 2156,
    price: 349,
    originalPrice: 599,
    discount: 42,
    isAvailable: true,
    firmness: "Soft",
    type: "Foam",
  },
  {
    id: "emma-diamond",
    name: "Emma Diamond Hybrid",
    rating: 4.8,
    reviews: 1987,
    price: 1099,
    originalPrice: 1899,
    discount: 42,
    isAvailable: true,
    firmness: "Medium-Firm",
    type: "Hybrid",
  },
];

const firmnessOptions = ["Soft", "Medium", "Medium-Firm", "Firm"];
const typeOptions = ["Foam", "Hybrid"];

export default function AppBrowsePage() {
  const [priceRange, setPriceRange] = useState([0, 1500]);
  const [selectedFirmness, setSelectedFirmness] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const toggleFirmness = (firmness: string) => {
    setSelectedFirmness(prev =>
      prev.includes(firmness)
        ? prev.filter(f => f !== firmness)
        : [...prev, firmness]
    );
  };

  const toggleType = (type: string) => {
    setSelectedTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const clearFilters = () => {
    setPriceRange([0, 1500]);
    setSelectedFirmness([]);
    setSelectedTypes([]);
  };

  const activeFiltersCount = 
    (selectedFirmness.length > 0 ? 1 : 0) + 
    (selectedTypes.length > 0 ? 1 : 0) + 
    (priceRange[0] > 0 || priceRange[1] < 1500 ? 1 : 0);

  const filteredMattresses = mattresses.filter(m => {
    if (m.price < priceRange[0] || m.price > priceRange[1]) return false;
    if (selectedFirmness.length > 0 && !selectedFirmness.includes(m.firmness)) return false;
    if (selectedTypes.length > 0 && !selectedTypes.includes(m.type)) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-background pb-20">
      <MobileHeader title="Mattresses" />
      
      <main className="p-4 space-y-4">
        {/* Filter Bar */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {filteredMattresses.length} products
          </p>
          
          <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                Filters
                {activeFiltersCount > 0 && (
                  <Badge variant="secondary" className="ml-1 h-5 w-5 p-0 flex items-center justify-center">
                    {activeFiltersCount}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[80vh]">
              <SheetHeader className="mb-6">
                <div className="flex items-center justify-between">
                  <SheetTitle>Filters</SheetTitle>
                  {activeFiltersCount > 0 && (
                    <Button variant="ghost" size="sm" onClick={clearFilters}>
                      Clear all
                    </Button>
                  )}
                </div>
              </SheetHeader>
              
              <div className="space-y-6">
                {/* Price Range */}
                <div>
                  <h4 className="font-medium mb-4">Price Range</h4>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    min={0}
                    max={1500}
                    step={50}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>€{priceRange[0]}</span>
                    <span>€{priceRange[1]}</span>
                  </div>
                </div>

                {/* Firmness */}
                <div>
                  <h4 className="font-medium mb-3">Firmness</h4>
                  <div className="space-y-3">
                    {firmnessOptions.map(firmness => (
                      <div key={firmness} className="flex items-center gap-3">
                        <Checkbox
                          id={firmness}
                          checked={selectedFirmness.includes(firmness)}
                          onCheckedChange={() => toggleFirmness(firmness)}
                        />
                        <Label htmlFor={firmness} className="cursor-pointer">
                          {firmness}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Type */}
                <div>
                  <h4 className="font-medium mb-3">Type</h4>
                  <div className="space-y-3">
                    {typeOptions.map(type => (
                      <div key={type} className="flex items-center gap-3">
                        <Checkbox
                          id={type}
                          checked={selectedTypes.includes(type)}
                          onCheckedChange={() => toggleType(type)}
                        />
                        <Label htmlFor={type} className="cursor-pointer">
                          {type}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-background border-t">
                <Button className="w-full" onClick={() => setFiltersOpen(false)}>
                  Show {filteredMattresses.length} results
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Active Filters */}
        {activeFiltersCount > 0 && (
          <div className="flex flex-wrap gap-2">
            {(priceRange[0] > 0 || priceRange[1] < 1500) && (
              <Badge variant="secondary" className="gap-1">
                €{priceRange[0]} - €{priceRange[1]}
                <X 
                  className="h-3 w-3 cursor-pointer" 
                  onClick={() => setPriceRange([0, 1500])}
                />
              </Badge>
            )}
            {selectedFirmness.map(f => (
              <Badge key={f} variant="secondary" className="gap-1">
                {f}
                <X 
                  className="h-3 w-3 cursor-pointer" 
                  onClick={() => toggleFirmness(f)}
                />
              </Badge>
            ))}
            {selectedTypes.map(t => (
              <Badge key={t} variant="secondary" className="gap-1">
                {t}
                <X 
                  className="h-3 w-3 cursor-pointer" 
                  onClick={() => toggleType(t)}
                />
              </Badge>
            ))}
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-3">
          {filteredMattresses.map((mattress) => (
            <Link 
              key={mattress.id} 
              to={mattress.id === "emma-original" ? "/app/product" : "#"}
              className={mattress.id !== "emma-original" ? "pointer-events-none opacity-70" : ""}
            >
              <Card className="h-full">
                <CardContent className="p-3">
                  {/* Product Image */}
                  <div className="aspect-square bg-secondary rounded-lg mb-3 flex items-center justify-center relative">
                    <div className="w-3/4 h-6 bg-card rounded shadow" />
                    <Badge 
                      variant="destructive" 
                      className="absolute top-2 left-2 text-xs"
                    >
                      -{mattress.discount}%
                    </Badge>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="h-3 w-3 fill-warning text-warning" />
                    <span className="text-xs font-medium">{mattress.rating}</span>
                    <span className="text-xs text-muted-foreground">
                      ({mattress.reviews.toLocaleString()})
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="font-medium text-sm line-clamp-2 mb-2">
                    {mattress.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-1">
                    <span className="font-bold text-primary">€{mattress.price}</span>
                    <span className="text-xs text-muted-foreground line-through">
                      €{mattress.originalPrice}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex gap-1 mt-2">
                    <Badge variant="outline" className="text-xs px-1.5 py-0">
                      {mattress.firmness}
                    </Badge>
                    <Badge variant="outline" className="text-xs px-1.5 py-0">
                      {mattress.type}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredMattresses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No mattresses match your filters</p>
            <Button variant="outline" onClick={clearFilters}>
              Clear filters
            </Button>
          </div>
        )}
      </main>
      
      <MobileNav />
    </div>
  );
}
