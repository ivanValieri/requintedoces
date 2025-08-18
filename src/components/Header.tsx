import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Phone, Mail, MessageCircle } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Portfólio", href: "#portfolio" },
    { name: "Encomendas", href: "#encomendas" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#97DFAD] backdrop-blur-md shadow-elegant">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/Logo%20Sabor%20Inclusivo.png"
              alt="Requinte Doces e Salgados" 
              className="h-16 w-16 rounded-full"
            />
            <div>
              <h1 className="text-xl font-playfair font-bold text-[#843809]">
                Sabor Inclusivo
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#843809] hover:text-[#843809]/80 transition-colors font-medium"
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
                className="p-2 text-[#843809] hover:text-[#843809]/80 transition-colors"
                title="WhatsApp: +55 11 98836-7990"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="mailto:mariaaparecidavalieri@gmail.com"
                className="p-2 text-[#843809] hover:text-[#843809]/80 transition-colors"
                title="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/5511988367990"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#843809] hover:text-[#843809]/80 transition-colors"
                title="Chat WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[#843809]"
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
                className="block py-2 text-[#843809] hover:text-[#843809]/80 transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;