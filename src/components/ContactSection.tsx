import { useState } from "react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MessageCircle, MapPin, Clock, Send } from "lucide-react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('contact-title');
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
    <section id="contato" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              id="contact-title"
              className={`text-4xl md:text-5xl font-playfair font-bold mb-6 transition-all duration-1000 ease-out ${
                isVisible 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-10'
              }`}
            >
              <span className="bg-gradient-to-r from-[#843809] via-[#A0522D] to-[#8B4513] bg-clip-text text-transparent animate-gradient text-glow-animation hover:scale-105 transition-transform duration-500 cursor-pointer">
                Entre em Contato
              </span>
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-[#843809] max-w-3xl mx-auto">
              Estamos prontos para tornar seu evento inesquecível. Fale conosco!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-playfair font-bold text-[#843809] mb-6">
                  Fale Diretamente Conosco
                </h3>
                <div className="space-y-6">
                  {/* WhatsApp */}
                  <Card className="border-wine/20 hover-lift bg-[#97DFAD]">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <MessageCircle className="h-6 w-6 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-[#843809]">WhatsApp</h4>
                          <p className="text-[#843809]">(11) 98836-7990</p>
                          <Badge className="mt-2 bg-green-100 text-green-700">
                            Resposta rápida
                          </Badge>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-[#97DFAD] text-[#843809] border-[#843809] hover:bg-[#97DFAD]/90"
                          onClick={() => window.open("https://wa.me/5511988367990", "_blank")}
                        >
                          Conversar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Phone */}
                  <Card className="border-wine/20 hover-lift bg-[#97DFAD]">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <Phone className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-[#843809]">Telefone</h4>
                          <p className="text-[#843809]">(11) 98836-7990</p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-[#97DFAD] text-[#843809] border-[#843809] hover:bg-[#97DFAD]/90"
                          onClick={() => window.open("tel:+5511988367990")}
                        >
                          Ligar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Email */}
                  <Card className="border-wine/20 hover-lift bg-[#97DFAD]">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                          <Mail className="h-6 w-6 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-[#843809]">Email</h4>
                          <p className="text-[#843809] text-sm">
                            mariaaparecidavalieri@gmail.com
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-[#97DFAD] text-[#843809] border-[#843809] hover:bg-[#97DFAD]/90"
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
              <Card className="border-wine/20 bg-[#97DFAD]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#843809]">
                    <Clock className="h-5 w-5" />
                    Horário de Atendimento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-[#843809]">
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
            </div>

            {/* Contact Form */}
            <Card className="border-wine/20 shadow-elegant bg-[#97DFAD]">
              <CardHeader>
                <CardTitle className="text-[#843809]">Envie sua Mensagem</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#843809] mb-2">
                        Nome *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome completo"
                        className="bg-white border-[#843809] focus:border-[#843809] focus:ring-[#843809]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#843809] mb-2">
                        WhatsApp *
                      </label>
                      <Input
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                        className="bg-white border-[#843809] focus:border-[#843809] focus:ring-[#843809]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#843809] mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="bg-white border-[#843809] focus:border-[#843809] focus:ring-[#843809]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#843809] mb-2">
                      Assunto
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Ex: Orçamento para festa de aniversário"
                      className="bg-white border-[#843809] focus:border-[#843809] focus:ring-[#843809]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#843809] mb-2">
                      Mensagem *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Conte-nos sobre seu evento: data, número de convidados, tipo de festa, restrições alimentares..."
                      className="bg-white border-[#843809] focus:border-[#843809] focus:ring-[#843809]"
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" variant="default" size="lg" className="w-full gap-2 bg-[#97DFAD] text-[#843809] hover:bg-[#97DFAD]/90">
                    <Send className="h-4 w-4" />
                    Enviar Mensagem
                  </Button>

                  <p className="text-xs text-[#843809]/80 text-center">
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