import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Star, Award } from "lucide-react";
import { useEffect, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about-title');
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

  return (
    <section id="sobre" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              id="about-title"
              className={`text-4xl md:text-5xl font-playfair font-bold text-[#843809] mb-6 transition-all duration-1000 ease-out ${
                isVisible 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-10'
              }`}
            >
              <span className="bg-gradient-to-r from-[#843809] via-[#A0522D] to-[#8B4513] bg-clip-text text-transparent animate-gradient text-glow-animation hover:scale-105 transition-transform duration-500 cursor-pointer">
                Conheça Maria Aparecida
              </span>
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-[#843809] max-w-3xl mx-auto">
              Uma paixão que começou há mais de 20 anos e se transformou em arte culinária
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-elegant">
                <img 
                  src="/lovable-uploads/MARIA.png"
                  alt="Maria Aparecida - Confeiteira profissional"
                  className="w-full h-full object-cover aspect-[4/5]"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-wine/20 rounded-full blur-lg"></div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-[#843809] leading-relaxed text-justify">
                  Um pouco sobre minha história e meu percurso profissional. Sou graduada em pedagogia e pós graduação em psicopedagogia. Mesmo Atuando na área tinha um sonho em abraçar a área da confeitaria. Deixei a área da educação e entrei de cabeça nos cursos profissionalizantes de confeitaria, onde me formei como designer cake, confeitaria tradicional e inclusiva, cursos de panificação, doces e salgados, vegetarianos, veganos e inclusivos. Atendo atualmente festas, curso de férias, eventos sociais e corporativos com opções de brindes ou lembrancinhas personalizadas.
                </p>
              </div>

              {/* Stats/Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card className="p-6 text-center hover-lift border-wine/20 bg-[#97DFAD]">
                  <Heart className="h-8 w-8 text-[#843809] mx-auto mb-3" />
                  <h3 className="font-semibold text-[#843809] mb-2">Paixão</h3>
                  <p className="text-sm text-[#843809]">Por cada receita criada</p>
                </Card>
                
                <Card className="p-6 text-center hover-lift border-wine/20 bg-[#97DFAD]">
                  <Star className="h-8 w-8 text-gold mx-auto mb-3" />
                  <h3 className="font-semibold text-[#843809] mb-2">Qualidade</h3>
                  <p className="text-sm text-[#843809]">Ingredientes selecionados</p>
                </Card>
                
                <Card className="p-6 text-center hover-lift border-wine/20 bg-[#97DFAD]">
                  <Award className="h-8 w-8 text-purple-dark mx-auto mb-3" />
                  <h3 className="font-semibold text-[#843809] mb-2">Experiência</h3>
                  <p className="text-sm text-[#843809]">20+ anos de tradição</p>
                </Card>
              </div>

              {/* Mission Statement */}
              <div className="bg-[#97DFAD] p-6 rounded-xl border border-wine/20">
                <h3 className="text-xl font-playfair font-bold text-[#843809] mb-3">
                  Nossa Missão
                </h3>
                <p className="text-[#843809] italic">
                  "Criar experiências gastronômicas únicas que celebram a diversidade 
                  alimentar, onde cada pessoa pode desfrutar de sabores extraordinários, 
                  independentemente de suas restrições ou preferências."
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="flex-1 bg-[#97DFAD] text-[#843809] border-[#843809] hover:bg-[#97DFAD]/90 animate-pulse hover:animate-none"
                  onClick={() => window.open('https://wa.me/5511988367990?text=Olá! Gostaria de fazer uma encomenda personalizada.', '_blank')}
                >
                  Fazer Encomenda
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;