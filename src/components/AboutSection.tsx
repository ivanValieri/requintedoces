import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Star, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-white to-lavender/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-wine mb-6">
              Conheça Maria Aparecida
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-purple-dark max-w-3xl mx-auto">
              Uma paixão que começou há mais de 20 anos e se transformou em arte culinária
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-elegant">
                <div className="aspect-[4/5] bg-gradient-to-br from-rose-candy to-lavender flex items-center justify-center">
                  <p className="text-wine text-center px-8">
                    Foto profissional da Maria Aparecida
                    <br />
                    <span className="text-sm opacity-75">(Aguardando imagem)</span>
                  </p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-wine/20 rounded-full blur-lg"></div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Com mais de <strong className="text-wine">20 anos de experiência</strong>, 
                  cursos especializados e uma paixão genuína por encantar paladares, 
                  <strong className="text-purple-dark"> Maria Aparecida</strong> transforma 
                  ingredientes simples em momentos inesquecíveis.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nossa missão é proporcionar <strong className="text-wine">sabor com requinte 
                  para todos</strong>, respeitando todas as restrições alimentares sem abrir 
                  mão do prazer de uma mesa bem servida.
                </p>
              </div>

              {/* Stats/Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card className="p-6 text-center hover-lift border-wine/20">
                  <Heart className="h-8 w-8 text-wine mx-auto mb-3" />
                  <h3 className="font-semibold text-wine mb-2">Paixão</h3>
                  <p className="text-sm text-gray-600">Por cada receita criada</p>
                </Card>
                
                <Card className="p-6 text-center hover-lift border-wine/20">
                  <Star className="h-8 w-8 text-gold mx-auto mb-3" />
                  <h3 className="font-semibold text-wine mb-2">Qualidade</h3>
                  <p className="text-sm text-gray-600">Ingredientes selecionados</p>
                </Card>
                
                <Card className="p-6 text-center hover-lift border-wine/20">
                  <Award className="h-8 w-8 text-purple-dark mx-auto mb-3" />
                  <h3 className="font-semibold text-wine mb-2">Experiência</h3>
                  <p className="text-sm text-gray-600">20+ anos de tradição</p>
                </Card>
              </div>

              {/* Mission Statement */}
              <div className="bg-gradient-to-r from-wine/5 to-purple-dark/5 p-6 rounded-xl border border-wine/20">
                <h3 className="text-xl font-playfair font-bold text-wine mb-3">
                  Nossa Missão
                </h3>
                <p className="text-gray-700 italic">
                  "Criar experiências gastronômicas únicas que celebram a diversidade 
                  alimentar, onde cada pessoa pode desfrutar de sabores extraordinários, 
                  independentemente de suas restrições ou preferências."
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="default" size="lg" className="flex-1">
                  Fazer Encomenda
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  Ver Portfólio
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