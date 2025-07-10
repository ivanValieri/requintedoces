import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

const PortfolioSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const portfolioItems = [
    {
      id: 1,
      type: "image",
      src: "/lovable-uploads/6.png",
      title: "Cupcakes Artesanais",
      description: "Cupcakes decorados com detalhes únicos e sabores especiais",
      category: "Cupcakes",
    },
    {
      id: 2,
      type: "image",
      src: "/lovable-uploads/bedc355d-12e6-47db-993c-bcb42cc1f129.png",
      title: "Embalagens Personalizadas",
      description: "Doces embalados com carinho para presentes especiais",
      category: "Presentes",
    },
    {
      id: 3,
      type: "image",
      src: "/lovable-uploads/6ecfbd87-d7f9-44e5-bd06-d3e3e353d68b.png",
      title: "Bolo Elegante",
      description: "Bolo decorado com flores para ocasiões especiais",
      category: "Bolos",
    },
    {
      id: 4,
      type: "image",
      src: "/lovable-uploads/7a7102c0-5a59-4b8e-b754-cdfcf70b88ca.png",
      title: "Brigadeiros Gourmet",
      description: "Brigadeiros com cobertura de castanhas e sabores únicos",
      category: "Brigadeiros",
    },
    {
      id: 5,
      type: "image",
      src: "/lovable-uploads/5.png",
      title: "Apresentação Especial",
      description: "Doces apresentados de forma elegante em forminhas decorativas",
      category: "Apresentação",
    },
    {
      id: 6,
      type: "image",
      src: "/lovable-uploads/f00c8965-3c55-4961-acf6-9955b8aa0338.png",
      title: "Bolo Naked Cake",
      description: "Bolo estilo naked cake com laço rosa e acabamento rústico",
      category: "Bolos",
    },
    {
      id: 7,
      type: "image",
      src: "/lovable-uploads/c70bc6e6-26f1-4d72-bef9-cc06c3fd731d.png",
      title: "Torta Gourmet",
      description: "Torta com cobertura especial e castanhas",
      category: "Tortas",
    },
    {
      id: 8,
      type: "image",
      src: "/lovable-uploads/a710b630-5853-411a-88d2-383b735f7611.png",
      title: "Bolo de Aniversário",
      description: "Bolo de dois andares decorado com flores naturais",
      category: "Aniversários",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(portfolioItems.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(portfolioItems.length / 3)) % Math.ceil(portfolioItems.length / 3));
  };

  const getVisibleItems = () => {
    const start = currentSlide * 3;
    return portfolioItems.slice(start, start + 3);
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-lavender/30 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-wine mb-6">
              Nosso Portfólio
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-purple-dark max-w-3xl mx-auto">
              Momentos especiais que ajudamos a criar com sabor e elegância
            </p>
          </div>

          {/* Portfolio Carousel */}
          <div className="relative">
            <div className="grid md:grid-cols-3 gap-8">
              {getVisibleItems().map((item) => (
                <Card key={item.id} className="group overflow-hidden hover-lift border-wine/20">
                  <div className="relative aspect-square">
                    <img 
                      src={item.src} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-wine px-3 py-1 rounded-full text-xs font-medium">
                        {item.category}
                      </span>
                    </div>

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-wine/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="font-playfair font-bold text-lg mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm opacity-90">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Navigation buttons */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 hidden lg:flex bg-white shadow-elegant"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 hidden lg:flex bg-white shadow-elegant"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile navigation */}
          <div className="flex justify-center gap-4 mt-8 lg:hidden">
            <Button variant="outline" onClick={prevSlide}>
              <ChevronLeft className="h-4 w-4 mr-2" />
              Anterior
            </Button>
            <Button variant="outline" onClick={nextSlide}>
              Próximo
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(portfolioItems.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? "bg-wine" : "bg-wine/30"
                }`}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Quer ver seu evento aqui? Vamos criar algo único juntos!
            </p>
            <Button variant="accent" size="lg">
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;