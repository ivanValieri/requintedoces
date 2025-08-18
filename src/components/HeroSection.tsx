import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('hero-title');
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
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gold blur-xl"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 rounded-full bg-rose-candy blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-lavender blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 
            id="hero-title"
            className={`text-5xl md:text-7xl font-playfair font-extrabold mb-6 drop-shadow-lg transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-10'
            }`}
          >
            <span className="text-6xl md:text-8xl tracking-tight bg-gradient-to-r from-[#843809] via-[#A0522D] to-[#8B4513] bg-clip-text text-transparent animate-gradient text-glow-animation hover:scale-105 transition-transform duration-500 cursor-pointer">Sabor Inclusivo</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#843809] mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            Transformamos ingredientes especiais em momentos inesquecíveis, 
            respeitando todas as restrições alimentares com o máximo de sabor.
          </p>

          {/* Specialties badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Badge variant="secondary" className="bg-[#97DFAD] text-[#843809] border-[#843809]/30 shadow-md px-4 py-2 text-base">
              Vegano
            </Badge>
            <Badge variant="secondary" className="bg-[#97DFAD] text-[#843809] border-[#843809]/30 shadow-md px-4 py-2 text-base">
              Vegetariano
            </Badge>
            <Badge variant="secondary" className="bg-[#97DFAD] text-[#843809] border-[#843809]/30 shadow-md px-4 py-2 text-base">
              Sem Glúten
            </Badge>
            <Badge variant="secondary" className="bg-[#97DFAD] text-[#843809] border-[#843809]/30 shadow-md px-4 py-2 text-base">
              Sem Lactose
            </Badge>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl" 
              className="text-lg px-10 py-5 bg-gradient-to-r from-[#843809] via-[#A0522D] to-[#8B4513] text-white shadow-xl hover:scale-105 transition-transform duration-200"
              onClick={() => window.open('https://wa.me/5511988367990?text=Olá! Gostaria de fazer uma encomenda personalizada.', '_blank')}
            >
              Faça sua encomenda personalizada
            </Button>
          </div>

          {/* Contact info */}
          <div className="mt-12 text-[#843809]">
            <p className="text-lg mb-2 font-semibold">
              Atendimento personalizado com Maria Aparecida
            </p>
            <p className="text-sm text-[#843809]">
              WhatsApp: (11) 98836-7990 | Email: mariaaparecidavalieri@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-purple-700/50 rounded-full flex justify-center bg-white/30 shadow-lg">
          <div className="w-1.5 h-4 bg-purple-700/70 rounded-full mt-3 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;