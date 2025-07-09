import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gold blur-xl"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 rounded-full bg-rose-candy blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-lavender blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6">
            <span className="text-purple-900">Sabor com</span>
            <br />
            <span className="text-purple-800 text-6xl md:text-8xl">Requinte</span>
          </h1>

          <p className="text-xl md:text-2xl text-purple-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transformamos ingredientes especiais em momentos inesquecíveis, 
            respeitando todas as restrições alimentares com o máximo de sabor.
          </p>

          {/* Specialties badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge variant="secondary" className="bg-purple-800/20 text-purple-900 border-purple-700/30 hover:bg-purple-800/30 transition-colors">
              Vegano
            </Badge>
            <Badge variant="secondary" className="bg-purple-800/20 text-purple-900 border-purple-700/30 hover:bg-purple-800/30 transition-colors">
              Vegetariano
            </Badge>
            <Badge variant="secondary" className="bg-purple-800/20 text-purple-900 border-purple-700/30 hover:bg-purple-800/30 transition-colors">
              Sem Glúten
            </Badge>
            <Badge variant="secondary" className="bg-purple-800/20 text-purple-900 border-purple-700/30 hover:bg-purple-800/30 transition-colors">
              Sem Lactose
            </Badge>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl" 
              className="text-lg px-8"
              onClick={() => window.open('https://wa.me/5511988367990?text=Olá! Gostaria de fazer uma encomenda personalizada.', '_blank')}
            >
              Faça sua encomenda personalizada
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="text-purple-900 border-purple-700/50 bg-purple-100/70 hover:bg-purple-200/80"
              onClick={() => document.getElementById('cardapio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Cardápio
            </Button>
          </div>

          {/* Contact info */}
          <div className="mt-12 text-purple-800">
            <p className="text-lg mb-2">
              Atendimento personalizado com Maria Aparecida
            </p>
            <p className="text-sm">
              WhatsApp: (11) 98836-7990 | Email: mariaaparecidavalieri@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-700/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-700/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;