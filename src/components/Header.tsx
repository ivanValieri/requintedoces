import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Phone, Mail, MessageCircle, ShoppingCart, User } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Cardápio", href: "#cardapio" },
    { name: "Portfólio", href: "#portfolio" },
    { name: "Encomendas", href: "#encomendas" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-elegant">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/25b41acb-ca00-4342-8caa-c91c93773d3b.png" 
              alt="Requinte Doces e Salgados" 
              className="h-12 w-12 rounded-full"
            />
            <div>
              <h1 className="text-xl font-playfair font-bold text-wine">
                Requinte
              </h1>
              <p className="text-sm text-purple-dark">Doces e Salgados</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-wine hover:text-purple-dark transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Icons & Cart */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Quick Contact */}
            <div className="flex items-center space-x-2">
              <a
                href="tel:+5511988367990"
                className="p-2 text-wine hover:text-purple-dark transition-colors"
                title="WhatsApp: +55 11 98836-7990"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="mailto:mariaaparecidavalieri@gmail.com"
                className="p-2 text-wine hover:text-purple-dark transition-colors"
                title="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/5511988367990"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-wine hover:text-purple-dark transition-colors"
                title="Chat WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>

            {/* Cart & User */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-wine text-white text-xs">
                  0
                </Badge>
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <User className="h-4 w-4" />
                Login
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-wine"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-lavender">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-wine hover:text-purple-dark transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center justify-center space-x-4 mt-4">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-wine text-white text-xs">
                  0
                </Badge>
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <User className="h-4 w-4" />
                Login
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;