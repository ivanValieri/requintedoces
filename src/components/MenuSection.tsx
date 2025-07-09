import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle } from "lucide-react";

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("doces");

  const categories = [
    { id: "doces", name: "Doces", icon: "🧁" },
    { id: "salgados", name: "Salgados", icon: "🥐" },
    { id: "veganos", name: "Veganos", icon: "🌱" },
    { id: "sazonais", name: "Sazonais", icon: "🎉" },
  ];

const products = {
    doces: [
      {
        id: 1,
        name: "Brigadeiro Gourmet",
        description: "Brigadeiro tradicional com chocolate belga e granulado especial",
        image: "placeholder-doce-1",
        badges: ["Sem Glúten"]
      },
      {
        id: 2,
        name: "Beijinho Premium",
        description: "Beijinho com coco fresco e leite condensado artesanal",
        image: "placeholder-doce-2",
        badges: ["Vegetariano"]
      },
      {
        id: 3,
        name: "Trufa de Maracujá",
        description: "Trufa cremosa com recheio de maracujá e cobertura de chocolate branco",
        image: "placeholder-doce-3",
        badges: ["Sem Lactose"]
      },
    ],
    salgados: [
      {
        id: 4,
        name: "Coxinha Gourmet",
        description: "Coxinha com recheio de frango desfiado e catupiry artesanal",
        image: "placeholder-salgado-1",
        badges: ["Tradicional"]
      },
      {
        id: 5,
        name: "Pastel de Queijo",
        description: "Pastel crocante com queijo derretido e orégano fresco",
        image: "placeholder-salgado-2",
        badges: ["Vegetariano"]
      },
    ],
    veganos: [
      {
        id: 6,
        name: "Brownie Vegano",
        description: "Brownie fudgy com chocolate 70% e nozes caramelizadas",
        image: "placeholder-vegano-1",
        badges: ["Vegano", "Sem Lactose"]
      },
    ],
    sazonais: [
      {
        id: 7,
        name: "Panetone Artesanal",
        description: "Panetone tradicional com frutas cristalizadas selecionadas",
        image: "placeholder-sazonal-1",
        badges: ["Edição Limitada"]
      },
    ],
  };

  const currentProducts = products[activeCategory as keyof typeof products] || [];

  return (
    <section id="cardapio" className="py-20 bg-gradient-to-br from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-wine mb-6">
              Nosso Cardápio
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-purple-dark max-w-3xl mx-auto">
              Sabores únicos criados com ingredientes especiais para todos os gostos
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="lg"
                onClick={() => setActiveCategory(category.id)}
                className="gap-2"
              >
                <span className="text-lg">{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProducts.map((product) => (
              <Card key={product.id} className="group hover-lift overflow-hidden border-wine/20">
                <div className="aspect-square bg-gradient-to-br from-rose-candy/30 to-lavender/30 flex items-center justify-center">
                  <p className="text-wine text-center text-sm">
                    Imagem do produto
                    <br />
                    {product.name}
                  </p>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {product.badges.map((badge) => (
                      <Badge 
                        key={badge} 
                        variant="secondary" 
                        className="text-xs bg-wine/10 text-wine"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="text-xl font-playfair font-bold text-wine mb-2">
                    {product.name}
                  </h3>
                  
                  <p className="text-purple-800 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-center mt-4">
                    <Button 
                      size="sm" 
                      variant="default" 
                      className="gap-2"
                      onClick={() => window.open('https://wa.me/5511988367990?text=Olá! Gostaria de fazer uma encomenda personalizada.', '_blank')}
                    >
                      <MessageCircle className="h-4 w-4" />
                      Fazer Encomenda
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-lg text-purple-800 mb-6">
              Não encontrou o que procura? Entre em contato para encomendas personalizadas!
            </p>
            <Button 
              variant="gold" 
              size="xl" 
              className="gap-2"
              onClick={() => window.open('https://wa.me/5511988367990?text=Olá! Gostaria de fazer uma encomenda personalizada.', '_blank')}
            >
              <MessageCircle className="h-5 w-5" />
              Fazer Encomenda Personalizada
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;