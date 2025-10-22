import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";

const categories = [
  { name: "Materiais Hidráulicos", path: "/produtos?category=hydraulic" },
  { name: "Materiais Elétricos", path: "/produtos?category=electrical" },
  { name: "Ferramentas", path: "/produtos?category=tools" },
  { name: "Refis para Purificadores", path: "/produtos?category=refills" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-primary px-4 py-2 rounded">
              <span className="text-xl md:text-2xl font-bold text-primary-foreground">
                Hidronorte
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => navigate(category.path)}
              >
                {category.name}
              </Button>
            ))}
            <Link to="/sobre">
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                Sobre
              </Button>
            </Link>
            <Link to="/contato">
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                Contato
              </Button>
            </Link>
          </nav>

          {/* Phone Number */}
          <div className="hidden md:flex items-center space-x-2 text-primary-foreground">
            <Phone className="w-5 h-5" />
            <span className="font-medium">(27) 99999-9999</span>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-2">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant="ghost"
                className="w-full justify-start text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => {
                  navigate(category.path);
                  setIsMenuOpen(false);
                }}
              >
                {category.name}
              </Button>
            ))}
            <Link to="/sobre" onClick={() => setIsMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start text-primary-foreground hover:bg-primary-foreground/10">
                Sobre
              </Button>
            </Link>
            <Link to="/contato" onClick={() => setIsMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start text-primary-foreground hover:bg-primary-foreground/10">
                Contato
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};
