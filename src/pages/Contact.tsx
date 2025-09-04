import { useState, useEffect } from "react";
import {
  LuPhone,
  LuMail,
  LuClock,
  LuSend,
  LuBuilding,
  LuUser,
  LuMessageSquare,
  LuPhoneCall
} from "react-icons/lu";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

const Contact = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const contactMethods = [
    {
      icon: LuPhoneCall,
      title: "Telefone",
      description: "Ligue diretamente para nossa equipe",
      contact: "+55 (11) 97994-0775",
      action: () => window.open("tel:+5511979940775", "_self"),
      color: "text-green-600"
    },
    {
      icon: SiWhatsapp,
      title: "WhatsApp",
      description: "Converse conosco pelo WhatsApp",
      contact: "+55 (11) 97994-0775",
      action: () => window.open("https://wa.me/5511979940775?text=Olá! Gostaria de saber mais sobre os serviços da Operação Nutri.", "_blank"),
      color: "text-green-500"
    },
    {
      icon: LuMail,
      title: "E-mail",
      description: "Envie sua mensagem por e-mail",
      contact: "contato@operacaonutri.com.br",
      action: () => window.open("mailto:contato@operacaonutri.com.br?subject=Contato - Operação Nutri", "_self"),
      color: "text-blue-600"
    },
    {
      icon: SiInstagram,
      title: "Instagram",
      description: "Siga-nos nas redes sociais",
      contact: "@operacaonutri",
      action: () => window.open("https://instagram.com/operacaonutri", "_blank"),
      color: "text-pink-600"
    }
  ];

  const officeInfo = [
    {
      icon: LuClock,
      title: "Horário de Atendimento",
      details: [
        "Segunda a Sexta: 8h às 18h",
        "Feriados: Fechado"
      ]
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    alert('Obrigado! Sua mensagem foi enviada. Entraremos em contato em breve.');

    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} currentPage="contact" />

      <main className="mt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-4xl text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-foreground">
              Entre em{" "}
              <span className="text-primary gradient-primary bg-clip-text">
                Contato
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Estamos prontos para ajudar sua empresa a alcançar a excelência em segurança alimentar. Entre em contato conosco através do canal de sua preferência.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 px-4 bg-primary/10">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Fale Conosco
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" />
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Escolha a forma mais conveniente para entrar em contato. Estamos sempre prontos para atender você.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  className="bg-card shadow-card hover:shadow-hero transition-smooth hover:-translate-y-2 border-0 animate-fade-in cursor-pointer group h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={method.action}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <method.icon className={`w-8 h-8 ${method.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                      {method.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="text-center pb-6">
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {method.description}
                    </p>
                    <p className="font-semibold text-primary break-all">
                      {method.contact}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Office Info */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="animate-fade-in">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                    Envie sua Mensagem
                  </h2>
                  <div className="w-20 h-1 bg-primary mb-6 rounded-full" />
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível.
                  </p>
                </div>

                <Card className="bg-card shadow-card border-0">
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="flex items-center gap-2">
                            <LuUser className="w-4 h-4 text-primary" />
                            Nome Completo *
                          </Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            placeholder="Seu nome completo"
                            required
                            className="border-border focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="flex items-center gap-2">
                            <LuMail className="w-4 h-4 text-primary" />
                            E-mail *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="seu@email.com"
                            required
                            className="border-border focus:border-primary"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="flex items-center gap-2">
                            <LuPhone className="w-4 h-4 text-primary" />
                            Telefone
                          </Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder="(11) 99999-9999"
                            className="border-border focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company" className="flex items-center gap-2">
                            <LuBuilding className="w-4 h-4 text-primary" />
                            Empresa
                          </Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                            placeholder="Nome da sua empresa"
                            className="border-border focus:border-primary"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Serviço de Interesse</Label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                          <SelectTrigger className="border-border focus:border-primary">
                            <SelectValue placeholder="Selecione um serviço" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="auditoria">Auditoria de Segurança Alimentar</SelectItem>
                            <SelectItem value="treinamento">Programa de Treinamento</SelectItem>
                            <SelectItem value="consultoria">Consultoria Especializada</SelectItem>
                            <SelectItem value="documentacao">Documentação e Procedimentos</SelectItem>
                            <SelectItem value="certificacao">Preparação para Certificação</SelectItem>
                            <SelectItem value="outros">Outros Serviços</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="flex items-center gap-2">
                          <LuMessageSquare className="w-4 h-4 text-primary" />
                          Mensagem *
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          placeholder="Conte-nos mais sobre suas necessidades..."
                          rows={5}
                          required
                          className="border-border focus:border-primary resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full text-lg font-semibold rounded-full transition-smooth shadow-card hover:shadow-hero flex items-center gap-2"
                      >
                        <LuSend className="w-5 h-5" />
                        Enviar Mensagem
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Office Information */}
              <div className="animate-slide-in">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                    Horário de Atendimento
                  </h2>
                  <div className="w-20 h-1 bg-primary mb-6 rounded-full" />
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Estamos disponíveis para atender você nos seguintes horários.
                  </p>
                </div>

                <div className="space-y-6">
                  {officeInfo.map((info, index) => (
                    <Card
                      key={index}
                      className="bg-card shadow-card hover:shadow-hero transition-smooth border-0 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardContent className="p-8">
                        {/* Mobile Layout - Icon on top */}
                        <div className="block md:hidden text-center">
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <info.icon className="w-8 h-8 text-primary" />
                          </div>
                          <h3 className="font-bold text-card-foreground text-xl mb-6">
                            {info.title}
                          </h3>
                          <div className="space-y-3">
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-muted-foreground leading-relaxed text-lg">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>

                        {/* Desktop Layout - Icon on left */}
                        <div className="hidden md:flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <info.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-bold text-card-foreground text-lg mb-4">
                              {info.title}
                            </h3>
                            <div className="space-y-2">
                              {info.details.map((detail, detailIndex) => (
                                <p key={detailIndex} className="text-muted-foreground leading-relaxed text-lg">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;