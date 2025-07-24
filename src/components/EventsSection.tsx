import { Button } from "@/components/ui/button";

const EventsSection = () => {
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
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-wine mb-6">
            Festas e Confraternizações
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          
          {/* Main Content */}
          <div className="mb-12">
            <p className="text-xl text-purple-dark mb-6 leading-relaxed">
              Transforme sua festa em um momento inesquecível com o toque artesanal da Requinte. 
              Criamos cardápios personalizados para eventos de todos os tamanhos, respeitando 
              todas as restrições alimentares e garantindo sabor e elegância em cada detalhe.
            </p>
            
            <p className="text-lg text-gray-600 mb-8">
              De casamentos íntimos a grandes confraternizações corporativas, 
              nossa experiência de mais de 20 anos garante o sucesso do seu evento.
            </p>
          </div>

          {/* Call to Action */}
          <Button 
            onClick={handleWhatsAppClick}
            variant="gold" 
            size="xl" 
            className="text-lg px-12 py-4"
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