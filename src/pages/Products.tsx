import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import pipesImg from "@/assets/pipes.jpg";
import faucetsImg from "@/assets/faucets.jpg";
import wiresImg from "@/assets/wires.jpg";
import pliersImg from "@/assets/pliers.jpg";
import refillsImg from "@/assets/refills.jpg";

// Mock product data
const mockProducts = [
  { id: 1, name: "Tubo PVC 50mm", category: "hydraulic", type: "pipes", brand: "Fortlev", image: pipesImg },
  { id: 2, name: "Torneira Monocomando", category: "hydraulic", type: "faucets", brand: "Lorenzetti", image: faucetsImg },
  { id: 3, name: "Fio Flexível 2.5mm", category: "electrical", type: "wires", brand: "Weg", image: wiresImg },
  { id: 4, name: "Alicate Universal", category: "tools", type: "pliers", brand: "Astra", image: pliersImg },
  { id: 5, name: "Refil Planeta Água", category: "refills", type: "refills", brand: "planeta-agua", image: refillsImg },
];

const Products = () => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);

  const category = searchParams.get("category");
  const type = searchParams.get("type");
  const brand = searchParams.get("brand");

  const brands = Array.from(new Set(mockProducts.map((p) => p.brand)));
  const types = Array.from(new Set(mockProducts.map((p) => p.type)));

  // Initialize state from URL parameters
  const [selectedBrands, setSelectedBrands] = useState<string[]>(() => 
    brand ? [brand] : []
  );
  const [selectedTypes, setSelectedTypes] = useState<string[]>(() => 
    type ? [type] : []
  );

  useEffect(() => {
    let filtered = mockProducts;

    // Filter by category from URL
    if (category) {
      filtered = filtered.filter((p) => p.category === category);
    }
    
    // Filter by selected brands (unified state)
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((p) => selectedBrands.includes(p.brand));
    }
    
    // Filter by selected types (unified state)
    if (selectedTypes.length > 0) {
      filtered = filtered.filter((p) => selectedTypes.includes(p.type));
    }

    setFilteredProducts(filtered);
  }, [category, selectedBrands, selectedTypes]);

  const toggleBrand = (brandName: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brandName)
        ? prev.filter((b) => b !== brandName)
        : [...prev, brandName]
    );
  };

  const toggleType = (typeName: string) => {
    setSelectedTypes((prev) =>
      prev.includes(typeName) ? prev.filter((t) => t !== typeName) : [...prev, typeName]
    );
  };

  const FilterPanel = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-bold text-lg mb-3">Marcas</h3>
        <div className="space-y-2">
          {brands.map((brandName) => (
            <label key={brandName} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brandName)}
                onChange={() => toggleBrand(brandName)}
                className="rounded border-primary text-primary focus:ring-primary"
              />
              <span className="text-sm capitalize">{brandName}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-bold text-lg mb-3">Tipos</h3>
        <div className="space-y-2">
          {types.map((typeName) => (
            <label key={typeName} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedTypes.includes(typeName)}
                onChange={() => toggleType(typeName)}
                className="rounded border-primary text-primary focus:ring-primary"
              />
              <span className="text-sm capitalize">{typeName}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />

      <div className="container mx-auto px-4 py-8">
        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full">
                <Filter className="w-4 h-4 mr-2" />
                Filtros
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Filtros</SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <FilterPanel />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex gap-8">
          {/* Desktop Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <Card className="p-6 sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Filtros</h2>
              <FilterPanel />
            </Card>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            <h1 className="text-3xl font-bold mb-8 text-primary">
              Nossos Produtos
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="capitalize">
                        {product.brand}
                      </Badge>
                      <Badge variant="outline" className="capitalize">
                        {product.type}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
