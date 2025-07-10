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
<<<<<<< HEAD
          <h1 className="text-5xl md:text-7xl font-playfair font-extrabold mb-6 drop-shadow-lg">
            <span className="text-purple-900">Sabor com</span>
            <br />
            <span className="text-purple-800 text-6xl md:text-8xl tracking-tight bg-gradient-to-r from-gold via-pink-400 to-purple-800 bg-clip-text text-transparent animate-gradient">Requinte</span>
          </h1>

          <p className="text-xl md:text-2xl text-purple-700 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
=======
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6">
            <span className="text-purple-900">Sabor com</span>
            <br />
            <span className="text-purple-800 text-6xl md:text-8xl">Requinte</span>
          </h1>

          <p className="text-xl md:text-2xl text-purple-700 mb-8 max-w-2xl mx-auto leading-relaxed">
>>>>>>> 1c97cefcab474811bd77b1786096a1bc74c5e491
            Transformamos ingredientes especiais em momentos inesquecíveis, 
            respeitando todas as restrições alimentares com o máximo de sabor.
          </p>

          {/* Specialties badges */}
<<<<<<< HEAD
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Badge variant="secondary" className="bg-gradient-to-r from-purple-400/30 to-purple-800/30 text-purple-900 border-purple-700/30 shadow-md px-4 py-2 text-base">
              Vegano
            </Badge>
            <Badge variant="secondary" className="bg-gradient-to-r from-purple-400/30 to-purple-800/30 text-purple-900 border-purple-700/30 shadow-md px-4 py-2 text-base">
              Vegetariano
            </Badge>
            <Badge variant="secondary" className="bg-gradient-to-r from-purple-400/30 to-purple-800/30 text-purple-900 border-purple-700/30 shadow-md px-4 py-2 text-base">
              Sem Glúten
            </Badge>
            <Badge variant="secondary" className="bg-gradient-to-r from-purple-400/30 to-purple-800/30 text-purple-900 border-purple-700/30 shadow-md px-4 py-2 text-base">
=======
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
>>>>>>> 1c97cefcab474811bd77b1786096a1bc74c5e491
              Sem Lactose
            </Badge>
          </div>

<<<<<<< HEAD
          {/* CTA Button */}
          <div className="flex flex-col gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl" 
              className="text-lg px-10 py-5 bg-gradient-to-r from-pink-400 via-gold to-purple-700 text-white shadow-xl hover:scale-105 transition-transform duration-200"
=======
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl" 
              className="text-lg px-8"
>>>>>>> 1c97cefcab474811bd77b1786096a1bc74c5e491
              onClick={() => window.open('https://wa.me/5511988367990?text=Olá! Gostaria de fazer uma encomenda personalizada.', '_blank')}
            >
              Faça sua encomenda personalizada
            </Button>
<<<<<<< HEAD
=======
            <Button 
              variant="outline" 
              size="xl" 
              className="text-purple-900 border-purple-700/50 bg-purple-100/70 hover:bg-purple-200/80"
              onClick={() => document.getElementById('cardapio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Cardápio
            </Button>
>>>>>>> 1c97cefcab474811bd77b1786096a1bc74c5e491
          </div>

          {/* Contact info */}
          <div className="mt-12 text-purple-800">
<<<<<<< HEAD
            <p className="text-lg mb-2 font-semibold">
=======
            <p className="text-lg mb-2">
>>>>>>> 1c97cefcab474811bd77b1786096a1bc74c5e491
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
<<<<<<< HEAD
        <div className="w-8 h-12 border-2 border-purple-700/50 rounded-full flex justify-center bg-white/30 shadow-lg">
          <div className="w-1.5 h-4 bg-purple-700/70 rounded-full mt-3 animate-pulse"></div>
=======
        <div className="w-6 h-10 border-2 border-purple-700/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-700/70 rounded-full mt-2 animate-pulse"></div>
>>>>>>> 1c97cefcab474811bd77b1786096a1bc74c5e491
        </div>
      </div>
    </section>
  );
};

export default HeroSection;