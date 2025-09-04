import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import { LuArrowRight, LuCircleCheckBig, LuGraduationCap, LuShield, LuStar, LuTrendingUp, LuUser } from "react-icons/lu"

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
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

  const navigateToContact = () => {
    window.location.href = "/contact";
  };

  const navigateToPage = (path: string) => {
    window.location.href = path;
  };

  const services = [
    {
      icon: LuShield,
      title: "Auditorias de Segurança Alimentar",
      description: "Avaliações completas de suas operações para identificar áreas de melhoria e garantir a conformidade regulatória.",
      path: "/services"
    },
    {
      icon: LuGraduationCap,
      title: "Programas de Treinamento",
      description: "Programas de treinamento abrangentes para sua equipe, cobrindo todos os aspectos de segurança alimentar e higiene.",
      path: "/services"
    },
    {
      icon: LuUser,
      title: "Serviços de Consultoria",
      description: "Orientação especializada no desenvolvimento e implementação de sistemas eficazes de gestão da segurança alimentar.",
      path: "/services"
    }
  ];

  const stats = [
    { number: "500", label: "Projetos Concluídos", suffix: "+" },
    { number: "98", label: "Taxa de Sucesso", suffix: "%" },
    { number: "15", label: "Setores Atendidos", suffix: "+" },
    { number: "14", label: "Anos de Experiência", suffix: "+" }
  ];

  const highlights = [
    {
      title: "Nossa Empresa",
      description: "Conheça nossa história, missão e a equipe especializada que transformou centenas de empresas.",
      path: "/about",
      icon: LuUser,
      features: ["14 anos de mercado", "Equipe especializada", "Certificações internacionais"]
    },
    {
      title: "Casos de Sucesso",
      description: "Descubra histórias reais de transformação e os resultados alcançados por nossos clientes.",
      path: "/cases",
      icon: LuTrendingUp,
      features: ["500+ projetos", "98% taxa de sucesso", "Clientes satisfeitos"]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} currentPage="home" />
      <main>
        {/* Hero Section - Maintained as requested */}
        <section
          className="relative min-h-[80vh] flex items-center justify-center px-4"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-background/90 dark:bg-background/70" />

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-foreground">
              Garantindo a Segurança dos Alimentos,{" "}
              <span className="text-primary gradient-primary bg-clip-text">
                Protegendo a Sua Marca
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Oferecemos soluções completas em segurança alimentar para ajudar as empresas a manter
              os mais altos padrões e proteger sua reputação.
            </p>

            <Button
              onClick={navigateToContact}
              size="lg"
              className="text-xl font-bold rounded-full transition-smooth shadow-hero hover:shadow-card hover:text-white px-8 py-4"
            >
              Comece Agora
            </Button>
          </div>

          {/* Decorative gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-primary/10 shadow-card hover:shadow-hero transition-smooth border-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      {stat.number}{stat.suffix}
                    </div>
                    <div className="text-sm md:text-base text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 px-4 bg-primary/10">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Nossos Serviços
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" />
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Soluções completas e personalizadas para atender às necessidades específicas da sua empresa.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="bg-card shadow-card hover:shadow-hero transition-smooth hover:-translate-y-2 border-0 animate-fade-in cursor-pointer group h-full flex flex-col"
                  style={{ animationDelay: `${index * 0.2}s` }}
                  onClick={() => navigateToPage(service.path)}
                >
                  <CardHeader className="text-center pb-4 flex-shrink-0 px-6 pt-8">
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors leading-tight min-h-[3.5rem] flex items-center justify-center">
                      {service.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between pt-0 px-6 pb-8">
                    <p className="text-muted-foreground text-center leading-relaxed mb-6 flex-1 flex items-center justify-center">
                      {service.description}
                    </p>
                    <div className="text-center flex-shrink-0">
                      <span className="text-primary font-semibold flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                        Saiba mais <LuArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Button
                onClick={() => navigateToPage('/services')}
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white transition-smooth rounded-full px-8"
              >
                Ver Todos os Serviços
              </Button>
            </div>
          </div>
        </section>

        {/* Company Highlights */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Por Que Escolher a Operação Nutri?
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" />
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Expertise comprovada e resultados que transformam empresas em referências de segurança alimentar.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className="bg-card shadow-card hover:shadow-hero transition-smooth border-0 animate-fade-in group cursor-pointer"
                  style={{ animationDelay: `${index * 0.2}s` }}
                  onClick={() => navigateToPage(highlight.path)}
                >
                  <CardContent className="p-8 text-center md:text-left">
                    {/* Mobile/Tablet Layout - Icon on top */}
                    <div className="block md:hidden mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                        <highlight.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    {/* Desktop Layout - Icon on left */}
                    <div className="hidden md:flex items-start gap-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <highlight.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                          {highlight.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {highlight.description}
                        </p>

                        <ul className="space-y-2 mb-6">
                          {highlight.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2 text-muted-foreground">
                              <LuCircleCheckBig className="w-4 h-4 text-primary flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                          Descubra mais <LuArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Mobile/Tablet Content - Below icon */}
                    <div className="block md:hidden">
                      <h3 className="text-2xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                        {highlight.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {highlight.description}
                      </p>

                      <div className="flex justify-center mb-6">
                        <ul className="space-y-2">
                          {highlight.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2 text-muted-foreground">
                              <LuCircleCheckBig className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                        Descubra mais <LuArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Preview */}
        <section className="py-20 px-4 bg-primary/10">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="animate-fade-in">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <LuStar key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8">
                "A Operação Nutri transformou nossa operação. O programa de treinamento foi excepcional e os resultados superaram nossas expectativas."
              </blockquote>

              <div className="mb-8">
                <p className="font-bold text-foreground text-lg">Carlos Silva</p>
                <p className="text-primary font-semibold">Diretor de Qualidade, RestauranTech</p>
              </div>

              <Button
                onClick={() => navigateToPage('/cases')}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white transition-smooth rounded-full px-8"
              >
                Ver Mais Depoimentos
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-primary/10 rounded-2xl p-8 md:p-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Pronto para Transformar sua Operação?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Entre em contato conosco hoje mesmo e descubra como podemos ajudar sua empresa a alcançar a excelência em segurança alimentar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={navigateToContact}
                  size="lg"
                  className="text-lg font-semibold rounded-full transition-smooth shadow-card hover:shadow-hero px-8"
                >
                  Fale Conosco
                </Button>
                <Button
                  onClick={() => navigateToPage('/about')}
                  variant="outline"
                  size="lg"
                  className="text-lg font-semibold rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-smooth px-8"
                >
                  Sobre Nós
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

export default Index;
