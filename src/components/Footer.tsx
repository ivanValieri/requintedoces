import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
<<<<<<< HEAD
import { Phone, Mail, MessageCircle, Instagram, Heart, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-primary text-black">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-16">
=======
import { Phone, Mail, MessageCircle, Instagram, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-primary text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
>>>>>>> 1c97cefcab474811bd77b1786096a1bc74c5e491
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/25b41acb-ca00-4342-8caa-c91c93773d3b.png" 
                alt="Requinte Doces e Salgados" 
                className="h-12 w-12 rounded-full"
              />
              <div>
                <h3 className="text-2xl font-playfair font-bold">Requinte</h3>
<<<<<<< HEAD
                <p className="text-black/80">Doces e Salgados</p>
              </div>
            </div>
            
            <p className="text-black/90 mb-6 max-w-md">
=======
                <p className="text-white/80">Doces e Salgados</p>
              </div>
            </div>
            
            <p className="text-white/90 mb-6 max-w-md">
>>>>>>> 1c97cefcab474811bd77b1786096a1bc74c5e491
              Transformando momentos especiais em experiências inesquecíveis 
              através de sabores únicos e atendimento personalizado.
            </p>

            <div className="space-y-3">
              <a 
                href="tel:+5511988367990" 
<<<<<<< HEAD
                className="flex items-center gap-3 text-black/90 hover:text-black transition-colors"
=======
                className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
>>>>>>> 1c97cefcab474811bd77b1786096a1bc74c5e491
              >
                <Phone className="h-4 w-4" />
                (11) 98836-7990
              </a>
              <a 
                href="mailto:mariaaparecidavalieri@gmail.com" 
<<<<<<< HEAD
                className="flex items-center gap-3 text-black/90 hover:text-black transition-colors"
=======
                className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
>>>>>>> 1c97cefcab474811bd77b1786096a1bc74c5e491
              >
                <Mail className="h-4 w-4" />
                mariaaparecidavalieri@gmail.com
              </a>
              <a 
                href="https://wa.me/5511988367990" 
                target="_blank" 
                rel="noopener noreferrer"
<<<<<<< HEAD
                className="flex items-center gap-3 text-black/90 hover:text-black transition-colors"
=======
                className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
>>>>>>> 1c97cefcab474811bd77b1786096a1bc74c5e491
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
<<<<<<< HEAD
              <a href="#inicio" className="block text-black/80 hover:text-black transition-colors">
                Início
              </a>
              <a href="#sobre" className="block text-black/80 hover:text-black transition-colors">
                Sobre Maria
              </a>
              <a href="#cardapio" className="block text-black/80 hover:text-black transition-colors">
                Cardápio
              </a>
              <a href="#portfolio" className="block text-black/80 hover:text-black transition-colors">
                Portfólio
              </a>
              <a href="#contato" className="block text-black/80 hover:text-black transition-colors">
=======
              <a href="#inicio" className="block text-white/80 hover:text-white transition-colors">
                Início
              </a>
              <a href="#sobre" className="block text-white/80 hover:text-white transition-colors">
                Sobre Maria
              </a>
              <a href="#cardapio" className="block text-white/80 hover:text-white transition-colors">
                Cardápio
              </a>
              <a href="#portfolio" className="block text-white/80 hover:text-white transition-colors">
                Portfólio
              </a>
              <a href="#contato" className="block text-white/80 hover:text-white transition-colors">
>>>>>>> 1c97cefcab474811bd77b1786096a1bc74c5e491
                Contato
              </a>
            </nav>
          </div>

<<<<<<< HEAD
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
            © 2024 Requinte Doces e Salgados. Todos os direitos reservados.
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
=======
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-playfair font-bold mb-6">Newsletter</h4>
            <p className="text-white/80 text-sm mb-4">
              Receba novidades, promoções especiais e dicas exclusivas!
            </p>
            <div className="space-y-3">
              <Input 
                placeholder="Seu email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button variant="hero" size="sm" className="w-full bg-white/20 hover:bg-white/30">
                Inscrever-se
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="mt-6">
              <h5 className="text-sm font-medium mb-3">Siga-nos</h5>
              <div className="flex gap-3">
                <a 
                  href="https://instagram.com/requinte_docesesalgados" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a 
                  href="https://wa.me/5511988367990" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="border-white/20" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/80 text-sm text-center md:text-left">
            © 2024 Requinte Doces e Salgados. Todos os direitos reservados.
          </div>
          
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <span>Feito com</span>
            <Heart className="h-4 w-4 text-red-400" />
            <span>por Maria Aparecida</span>
>>>>>>> 1c97cefcab474811bd77b1786096a1bc74c5e491
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