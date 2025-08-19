import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const EventsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('events-title');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const phone = "5511988367990";
    const message = "Olá! Gostaria de solicitar um orçamento para meu evento.";
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="encomendas" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <h2 
            id="events-title"
            className={`text-4xl md:text-5xl font-playfair font-bold mb-6 transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-10'
            }`}
          >
            <span className="bg-gradient-to-r from-[#843809] via-[#A0522D] to-[#8B4513] bg-clip-text text-transparent animate-gradient text-glow-animation hover:scale-105 transition-transform duration-500 cursor-pointer">
              Festas e Confraternizações
            </span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          
          {/* Main Content */}
          <div className="mb-12">
            <p className="text-xl text-[#843809] mb-6 leading-relaxed">
              Transforme sua festa em um momento inesquecível com o toque artesanal da Requinte. 
              Criamos cardápios personalizados para eventos de todos os tamanhos, respeitando 
              todas as restrições alimentares e garantindo sabor e elegância em cada detalhe.
            </p>
            
            <p className="text-lg text-[#843809] mb-8">
              De casamentos íntimos a grandes confraternizações corporativas, 
              nossa experiência de mais de 20 anos garante o sucesso do seu evento.
            </p>
          </div>

          {/* Call to Action */}
          <Button 
            onClick={handleWhatsAppClick}
            variant="gold" 
            size="xl" 
            className="text-lg px-12 py-4 bg-[#97DFAD] text-[#843809] border-[#843809] hover:bg-[#97DFAD]/90 animate-pulse hover:animate-none"
          >
            Solicite seu Orçamento
          </Button>
          
          <p className="text-sm text-gray-500 mt-4">
            Resposta em até 24 horas • Orçamento sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;