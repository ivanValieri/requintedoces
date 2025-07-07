import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Clock, Star, Send } from "lucide-react";

const EventsSection = () => {
  const [formData, setFormData] = useState({
    eventType: "",
    eventDate: "",
    guestCount: "",
    location: "",
    preferences: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Event form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const eventTypes = [
    { id: "casamento", name: "Casamento", icon: "💒", description: "Mesa de doces elegante para seu grande dia" },
    { id: "aniversario", name: "Aniversário", icon: "🎂", description: "Celebração especial com sabores únicos" },
    { id: "corporativo", name: "Evento Corporativo", icon: "🏢", description: "Impressione clientes e colaboradores" },
    { id: "infantil", name: "Festa Infantil", icon: "🎈", description: "Alegria e sabor para os pequenos" },
    { id: "formatura", name: "Formatura", icon: "🎓", description: "Comemore esta conquista com estilo" },
    { id: "outro", name: "Outro", icon: "🎉", description: "Conte-nos sobre seu evento especial" },
  ];

  return (
    <section id="encomendas" className="py-20 bg-gradient-to-b from-white to-rose-candy/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-wine mb-6">
              Festas e Confraternizações
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-purple-dark mb-4">
                Transforme sua festa em um momento inesquecível com o toque artesanal da Requinte
              </p>
              <p className="text-lg text-gray-600">
                Cada evento é único, assim como nossos sabores especialmente criados para você
              </p>
            </div>
          </div>

          {/* Event Types Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {eventTypes.map((event) => (
              <Card 
                key={event.id} 
                className="group hover-lift border-wine/20 cursor-pointer transition-all"
                onClick={() => setFormData({ ...formData, eventType: event.name })}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{event.icon}</div>
                  <h3 className="text-xl font-playfair font-bold text-wine mb-2">
                    {event.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-wine" />
              </div>
              <h4 className="font-semibold text-wine mb-2">Planejamento</h4>
              <p className="text-sm text-gray-600">Organizamos todos os detalhes do seu evento</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-wine" />
              </div>
              <h4 className="font-semibold text-wine mb-2">Qualquer Tamanho</h4>
              <p className="text-sm text-gray-600">De 10 a 500+ convidados</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-wine" />
              </div>
              <h4 className="font-semibold text-wine mb-2">Pontualidade</h4>
              <p className="text-sm text-gray-600">Entrega sempre no horário combinado</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-wine" />
              </div>
              <h4 className="font-semibold text-wine mb-2">Qualidade</h4>
              <p className="text-sm text-gray-600">Ingredientes premium e frescor garantido</p>
            </div>
          </div>

          {/* Pre-order Form */}
          <Card className="border-wine/20 shadow-elegant">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-playfair text-wine">
                Solicite seu Orçamento
              </CardTitle>
              <p className="text-gray-600">
                Preencha os dados abaixo e entraremos em contato em até 24 horas
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-wine mb-2">
                      Tipo de Evento *
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-wine/20 rounded-md focus:outline-none focus:ring-2 focus:ring-wine/50"
                      required
                    >
                      <option value="">Selecione o tipo</option>
                      {eventTypes.map((event) => (
                        <option key={event.id} value={event.name}>
                          {event.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-wine mb-2">
                      Data do Evento *
                    </label>
                    <Input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-wine mb-2">
                      Número de Convidados *
                    </label>
                    <Input
                      type="number"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      placeholder="Ex: 50"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-wine mb-2">
                      Local do Evento
                    </label>
                    <Input
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Cidade/Bairro"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-wine mb-2">
                    Preferências Alimentares
                  </label>
                  <Input
                    name="preferences"
                    value={formData.preferences}
                    onChange={handleChange}
                    placeholder="Ex: Vegano, Sem glúten, Sem lactose..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-wine mb-2">
                    Detalhes do Evento
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte-nos mais sobre seu evento: tema, horário, estilo, orçamento aproximado..."
                    rows={4}
                  />
                </div>

                <div className="bg-wine/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-wine mb-2">📋 Incluso no Orçamento:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Cardápio personalizado para seu evento</li>
                    <li>• Sugestões de apresentação e decoração comestível</li>
                    <li>• Opções para todas as restrições alimentares</li>
                    <li>• Entrega e montagem no local (conforme região)</li>
                  </ul>
                </div>

                <Button type="submit" variant="default" size="lg" className="w-full gap-2">
                  <Send className="h-4 w-4" />
                  Solicitar Orçamento Personalizado
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Special Offers */}
          <div className="mt-16 text-center">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-gold/30 bg-gradient-to-br from-gold/5 to-gold/10">
                <CardContent className="p-6 text-center">
                  <Badge className="bg-gold text-wine mb-4">Promoção</Badge>
                  <h4 className="font-playfair font-bold text-wine mb-2">
                    Primeira Encomenda
                  </h4>
                  <p className="text-sm text-gray-600">
                    10% de desconto para novos clientes em pedidos acima de R$ 200
                  </p>
                </CardContent>
              </Card>

              <Card className="border-wine/20">
                <CardContent className="p-6 text-center">
                  <Badge variant="secondary" className="mb-4">Fidelidade</Badge>
                  <h4 className="font-playfair font-bold text-wine mb-2">
                    Cliente Especial
                  </h4>
                  <p className="text-sm text-gray-600">
                    A cada 5 eventos, ganhe 15% de desconto no próximo
                  </p>
                </CardContent>
              </Card>

              <Card className="border-wine/20">
                <CardContent className="p-6 text-center">
                  <Badge variant="outline" className="mb-4 border-wine text-wine">Antecipação</Badge>
                  <h4 className="font-playfair font-bold text-wine mb-2">
                    Reserva Antecipada
                  </h4>
                  <p className="text-sm text-gray-600">
                    Eventos agendados com 30+ dias de antecedência têm 5% de desconto
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;