import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MessageCircle, MapPin, Clock, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-white to-lavender/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-wine mb-6">
              Entre em Contato
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-purple-dark max-w-3xl mx-auto">
              Estamos prontos para tornar seu evento inesquecível. Fale conosco!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-playfair font-bold text-wine mb-6">
                  Fale Diretamente Conosco
                </h3>
                <div className="space-y-6">
                  {/* WhatsApp */}
                  <Card className="border-wine/20 hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <MessageCircle className="h-6 w-6 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-wine">WhatsApp</h4>
                          <p className="text-gray-600">(11) 98836-7990</p>
                          <Badge className="mt-2 bg-green-100 text-green-700">
                            Resposta rápida
                          </Badge>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open("https://wa.me/5511988367990", "_blank")}
                        >
                          Conversar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Phone */}
                  <Card className="border-wine/20 hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <Phone className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-wine">Telefone</h4>
                          <p className="text-gray-600">(11) 98836-7990</p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open("tel:+5511988367990")}
                        >
                          Ligar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Email */}
                  <Card className="border-wine/20 hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                          <Mail className="h-6 w-6 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-wine">Email</h4>
                          <p className="text-gray-600 text-sm">
                            mariaaparecidavalieri@gmail.com
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open("mailto:mariaaparecidavalieri@gmail.com")}
                        >
                          Enviar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Business Hours */}
              <Card className="border-wine/20 bg-gradient-to-br from-wine/5 to-purple-dark/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-wine">
                    <Clock className="h-5 w-5" />
                    Horário de Atendimento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Segunda a Sexta:</span>
                      <span className="font-medium">8h às 18h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábado:</span>
                      <span className="font-medium">8h às 14h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingo:</span>
                      <span className="font-medium">Sob consulta</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="border-wine/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-wine">Localização</h4>
                      <p className="text-gray-600 text-sm">
                        Atendimento e entrega na Grande São Paulo
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="border-wine/20 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-wine">Envie sua Mensagem</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-wine mb-2">
                        Nome *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-wine mb-2">
                        WhatsApp *
                      </label>
                      <Input
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-wine mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-wine mb-2">
                      Assunto
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Ex: Orçamento para festa de aniversário"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-wine mb-2">
                      Mensagem *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Conte-nos sobre seu evento: data, número de convidados, tipo de festa, restrições alimentares..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" variant="default" size="lg" className="w-full gap-2">
                    <Send className="h-4 w-4" />
                    Enviar Mensagem
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Responderemos em até 24 horas. Para urgências, use o WhatsApp.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;