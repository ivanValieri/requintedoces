import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MessageCircle, Instagram, Heart, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-primary text-black">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-16">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/logo.png"
                alt="Requinte Doces e Salgados" 
                className="h-12 w-12 rounded-full"
              />
              <div>
                <h3 className="text-2xl font-playfair font-bold">Requinte</h3>
                <p className="text-black/80">Doces e Salgados</p>
              </div>
            </div>
            
            <p className="text-black/90 mb-6 max-w-md">
              Transformando momentos especiais em experiências inesquecíveis 
              através de sabores únicos e atendimento personalizado.
            </p>

            <div className="space-y-3">
              <a 
                href="tel:+5511988367990" 
                className="flex items-center gap-3 text-black/90 hover:text-black transition-colors"
              >
                <Phone className="h-4 w-4" />
                (11) 98836-7990
              </a>
              <a 
                href="mailto:mariaaparecidavalieri@gmail.com" 
                className="flex items-center gap-3 text-black/90 hover:text-black transition-colors"
              >
                <Mail className="h-4 w-4" />
                mariaaparecidavalieri@gmail.com
              </a>
              <a 
                href="https://wa.me/5511988367990" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-black/90 hover:text-black transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp: Chat direto
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-playfair font-bold mb-6">Menu Rápido</h4>
            <nav className="space-y-3">
              <a href="#inicio" className="block text-black/80 hover:text-black transition-colors">
                Início
              </a>
              <a href="#sobre" className="block text-black/80 hover:text-black transition-colors">
                Sobre Maria
              </a>
              <a href="#portfolio" className="block text-black/80 hover:text-black transition-colors">
                Portfólio
              </a>
              <a href="#contato" className="block text-black/80 hover:text-black transition-colors">
                Contato
              </a>
            </nav>
          </div>

          {/* Redes Sociais Centralizadas no rodapé */}
          <div className="w-full flex flex-col items-center justify-center mt-8 mb-2">
            <h4 className="text-lg font-playfair font-bold mb-4 text-center">Siga-nos nas redes</h4>
            <div className="flex gap-5 justify-center mb-2">
              <a 
                href="https://instagram.com/requinte_docesesalgados" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center hover:bg-black/20 transition-colors"
              >
                <Instagram className="h-5 w-5 text-black" />
              </a>
              <a 
                href="https://wa.me/5511988367990" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center hover:bg-black/20 transition-colors"
              >
                <MessageCircle className="h-5 w-5 text-black" />
              </a>
              <a
                href="https://www.facebook.com/requintedocesesalgados2016/?ref=_xav_ig_profile_page_web#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center hover:bg-black/20 transition-colors"
              >
                <Facebook className="h-5 w-5 text-black" />
              </a>
            </div>
            <span className="text-black/80 text-sm">@requinte_docesesalgados</span>
          </div>
        </div>

        <Separator className="border-black/20" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-black/80 text-sm text-center md:text-left">
            © 2025 Requinte Doces e Salgados. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-2 text-black/80 text-sm">
            <span>Feito com</span>
            <Heart className="h-4 w-4 text-red-400" />
            <a
              href="https://www.instagram.com/mikal_designs/?hl=pt"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-purple-700 transition-colors"
            >
              por Mikal Designs
            </a>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5511988367990"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors z-50 animate-pulse"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </a>
    </footer>
  );
};

export default Footer;