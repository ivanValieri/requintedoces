import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MessageCircle, Instagram, Heart, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#97DFAD] text-black">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-16">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/Logo%20Sabor%20Inclusivo.png"
                alt="Sabor Inclusivo" 
                className="h-12 w-12 rounded-full"
              />
              <div>
                <h3 className="text-2xl font-playfair font-bold text-[#843809]">Sabor</h3>
                <p className="text-[#843809]/80">Inclusivo</p>
              </div>
            </div>
            
            <p className="text-[#843809]/90 mb-6 max-w-md">
              Transformando momentos especiais em experiências inesquecíveis 
              através de sabores únicos e atendimento personalizado.
            </p>

            <div className="space-y-3">
              <a 
                href="tel:+5511988367990" 
                className="flex items-center gap-3 text-[#843809]/90 hover:text-[#843809] transition-colors"
              >
                <Phone className="h-4 w-4" />
                (11) 98836-7990
              </a>
              <a 
                href="mailto:mariaaparecidavalieri@gmail.com" 
                className="flex items-center gap-3 text-[#843809]/90 hover:text-[#843809] transition-colors"
              >
                <Mail className="h-4 w-4" />
                mariaaparecidavalieri@gmail.com
              </a>
              <a 
                href="https://wa.me/5511988367990" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#843809]/90 hover:text-[#843809] transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp: Chat direto
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-playfair font-bold mb-6 text-[#843809]">Menu Rápido</h4>
            <nav className="space-y-3">
              <a href="#inicio" className="block text-[#843809]/80 hover:text-[#843809] transition-colors">
                Início
              </a>
              <a href="#sobre" className="block text-[#843809]/80 hover:text-[#843809] transition-colors">
                Sobre Maria
              </a>
              <a href="#portfolio" className="block text-[#843809]/80 hover:text-[#843809] transition-colors">
                Portfólio
              </a>
              <a href="#contato" className="block text-[#843809]/80 hover:text-[#843809] transition-colors">
                Contato
              </a>
            </nav>
          </div>

          {/* Redes Sociais Centralizadas no rodapé */}
          <div className="w-full flex flex-col items-center justify-center mt-8 mb-2">
            <h4 className="text-lg font-playfair font-bold mb-4 text-center text-[#843809]">Siga-nos nas redes</h4>
            <div className="flex gap-5 justify-center mb-2">
              <a 
                href="https://instagram.com/requinte_docesesalgados" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#843809]/10 rounded-full flex items-center justify-center hover:bg-[#843809]/20 transition-colors"
              >
                <Instagram className="h-5 w-5 text-[#843809]" />
              </a>
              <a 
                href="https://wa.me/5511988367990" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#843809]/10 rounded-full flex items-center justify-center hover:bg-[#843809]/20 transition-colors"
              >
                <MessageCircle className="h-5 w-5 text-[#843809]" />
              </a>
              <a
                href="https://www.facebook.com/requintedocesesalgados2016/?ref=_xav_ig_profile_page_web#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#843809]/10 rounded-full flex items-center justify-center hover:bg-[#843809]/20 transition-colors"
              >
                <Facebook className="h-5 w-5 text-[#843809]" />
              </a>
            </div>
            <span className="text-[#843809]/80 text-sm">@requinte_docesesalgados</span>
          </div>
        </div>

        <Separator className="border-black/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8">
          <div className="text-[#843809]/80 text-sm text-center md:text-left">
            © 2025 Sabor Inclusivo. Todos os direitos reservados.
          </div>
          <div className="text-[#843809]/80 text-sm text-center md:text-left">
            Sabor Incluso uma linha exclusiva da Requinte doces e colocar o CNPJ 36.059.265/0001-02
          </div>
          <div className="flex items-center gap-2 text-[#843809]/80 text-sm">
            <span>Feito com</span>
            <Heart className="h-4 w-4 text-red-400" />
            <a
              href="https://www.instagram.com/mikal_designs/?hl=pt"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#843809] transition-colors"
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