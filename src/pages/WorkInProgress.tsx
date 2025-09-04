import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiInstagram, SiWhatsapp } from 'react-icons/si';
import { LuClock, LuMail, LuPhoneCall, LuSettings } from "react-icons/lu";

const WorkInProgress = () => {
  const [darkMode, setDarkMode] = useState(false);

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

  const comingSoonFeatures = [
    "Portfólio completo de casos de sucesso",
    "Detalhamento dos nossos serviços",
    "Informações sobre nossa equipe",
    "Sistema de contato integrado",
    "Blog com dicas de segurança alimentar"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} currentPage="wip" />

      <main className="mt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-4xl text-center animate-fade-in">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <LuSettings className="w-12 h-12 text-primary animate-spin" style={{ animationDuration: '3s' }} />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-foreground">
              Site em{" "}
              <span className="text-primary gradient-primary bg-clip-text">
                Construção
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Estamos trabalhando para trazer a você a melhor experiência em segurança alimentar.
              Em breve, nosso site completo estará disponível com todas as informações sobre nossos serviços.
            </p>

            <div className="bg-primary/10 rounded-2xl p-6 mb-12">
              <p className="text-primary font-semibold text-lg mb-2">
                🚀 Lançamento Previsto
              </p>
              <p className="text-muted-foreground">
                Nosso site completo estará disponível em breve. Enquanto isso, você pode entrar em contato conosco através dos canais abaixo.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 px-4 bg-primary/10">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Entre em Contato
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" />
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Mesmo com o site em construção, nossa equipe está pronta para atender você.
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
                  <CardHeader className="text-center pb-4 px-6 pt-8">
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <method.icon className={`w-8 h-8 ${method.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                      {method.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="text-center pb-8 px-6">
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

        {/* Business Hours */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Horário de Atendimento
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" />
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Estamos disponíveis para atender você nos seguintes horários.
              </p>
            </div>

            <Card className="bg-card shadow-card hover:shadow-hero transition-smooth border-0 animate-fade-in max-w-md mx-auto">
              <CardContent className="p-8">
                {/* Mobile Layout - Icon on top */}
                <div className="block text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <LuClock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-card-foreground text-xl mb-6">
                    Horário de Atendimento
                  </h3>
                  <div className="space-y-3">
                    <p className="text-muted-foreground leading-relaxed text-lg">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-muted-foreground leading-relaxed text-lg">Feriados: Fechado</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Coming Soon Features */}
        <section className="py-20 px-4 bg-primary/10">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Em Breve
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" />
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Veja o que estará disponível em nosso site completo.
              </p>
            </div>

            <Card className="bg-card shadow-card border-0 animate-fade-in">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {comingSoonFeatures.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-lg animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-primary/10 rounded-2xl p-8 md:p-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Precisa de Nossos Serviços?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Não espere o site ficar pronto! Entre em contato conosco agora mesmo e descubra como podemos ajudar sua empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => window.open("https://wa.me/5511979940775?text=Olá! Gostaria de saber mais sobre os serviços da Operação Nutri.", "_blank")}
                  size="lg"
                  className="text-lg font-semibold rounded-full transition-smooth shadow-card hover:shadow-hero px-8 flex items-center gap-2"
                >
                  <SiWhatsapp className="w-5 h-5" />
                  WhatsApp
                </Button>
                <Button
                  onClick={() => window.open("tel:+5511979940775", "_self")}
                  variant="outline"
                  size="lg"
                  className="text-lg font-semibold rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-smooth px-8 flex items-center gap-2"
                >
                  <LuPhoneCall className="w-5 h-5" />
                  Ligar Agora
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WorkInProgress;