import { useState, useEffect } from "react";
import { Star, Users, TrendingUp, Shield, CheckCircle, Building } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Cases = () => {
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

  const successCases = [
    {
      title: "Rede de Restaurantes FastFood+",
      category: "Restaurantes",
      challenge: "Implementação de sistema HACCP em 45 unidades",
      solution: "Programa de treinamento customizado e auditoria completa",
      results: [
        "100% das unidades certificadas",
        "Redução de 85% em não conformidades",
        "Aumento de 30% na satisfação do cliente"
      ],
      icon: Building,
      metrics: { locations: "45", improvement: "85%", satisfaction: "30%" }
    },
    {
      title: "Indústria AlimentosBR",
      category: "Indústria",
      challenge: "Adequação às normas internacionais de exportação",
      solution: "Consultoria especializada em BRC e IFS",
      results: [
        "Certificação BRC Grade A",
        "Abertura de mercados internacionais",
        "Aumento de 50% na receita de exportação"
      ],
      icon: TrendingUp,
      metrics: { certification: "Grade A", markets: "12", revenue: "50%" }
    },
    {
      title: "Cooperativa AgroVerde",
      category: "Agronegócio",
      challenge: "Rastreabilidade completa da cadeia produtiva",
      solution: "Sistema integrado de monitoramento e controle",
      results: [
        "Rastreabilidade de 100% dos produtos",
        "Redução de perdas em 40%",
        "Certificação orgânica obtida"
      ],
      icon: Shield,
      metrics: { traceability: "100%", reduction: "40%", organic: "Certificada" }
    }
  ];

  const clients = [
    { name: "RestauranTech", sector: "Restaurantes", logo: "🍽️" },
    { name: "FoodCorp Brasil", sector: "Indústria Alimentícia", logo: "🏭" },
    { name: "AgroSul Cooperativa", sector: "Agronegócio", logo: "🌾" },
    { name: "SuperMercados Unidos", sector: "Varejo", logo: "🛒" },
    { name: "Café Premium", sector: "Torrefação", logo: "☕" },
    { name: "Lacticínios Vale", sector: "Laticínios", logo: "🥛" },
    { name: "Panificadora Moderna", sector: "Panificação", logo: "🍞" },
    { name: "Frutas & Verduras SA", sector: "Hortifrúti", logo: "🥬" }
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      position: "Diretor de Qualidade",
      company: "RestauranTech",
      feedback: "A Operação Nutri transformou nossa operação. O programa de treinamento foi excepcional e os resultados superaram nossas expectativas. Toda a equipe está mais preparada e confiante.",
      rating: 5
    },
    {
      name: "Ana Santos",
      position: "Gerente de Produção",
      company: "FoodCorp Brasil",
      feedback: "Conseguimos nossa certificação BRC Grade A graças ao suporte da Operação Nutri. O conhecimento técnico e a dedicação da equipe fizeram toda a diferença no nosso processo de internacionalização.",
      rating: 5
    },
    {
      name: "Roberto Oliveira",
      position: "CEO",
      company: "AgroSul Cooperativa",
      feedback: "O sistema de rastreabilidade implementado revolucionou nossa operação. Agora temos controle total sobre toda a cadeia produtiva e nossos clientes têm total confiança em nossos produtos.",
      rating: 5
    },
    {
      name: "Marina Costa",
      position: "Supervisora de Qualidade",
      company: "SuperMercados Unidos",
      feedback: "A consultoria em segurança alimentar nos ajudou a estabelecer protocolos rigorosos. Reduzimos significativamente os problemas operacionais e melhoramos a satisfação dos nossos clientes.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} currentPage="cases" />

      <main className="mt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-4xl text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-foreground">
              Casos de{" "}
              <span className="text-primary gradient-primary bg-clip-text text-transparent">
                Sucesso
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Conheça as histórias reais de empresas que transformaram suas operações com nossas soluções em segurança alimentar.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
              <div className="bg-primary/10 rounded-2xl p-6 animate-fade-in">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground font-medium">Projetos Concluídos</div>
              </div>
              <div className="bg-primary/10 rounded-2xl p-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground font-medium">Taxa de Sucesso</div>
              </div>
              <div className="bg-primary/10 rounded-2xl p-6 animate-fade-in col-span-2 lg:col-span-1" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground font-medium">Setores Atendidos</div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Cases */}
        <section className="py-20 px-4 bg-primary/10">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Histórias de Transformação
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" />
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Cada projeto é único, mas o resultado é sempre o mesmo: excelência em segurança alimentar.
              </p>
            </div>

            <div className="space-y-8">
              {successCases.map((case_study, index) => (
                <Card
                  key={index}
                  className="bg-card shadow-card hover:shadow-hero transition-smooth border-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-8">
                    {/* Mobile Header - Icon on top */}
                    <div className="block md:hidden text-center mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <case_study.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-card-foreground mb-2">{case_study.title}</h3>
                      <p className="text-primary font-semibold">{case_study.category}</p>
                    </div>

                    {/* Desktop Header - Icon on left */}
                    <div className="hidden md:block lg:col-span-3 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <case_study.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-card-foreground">{case_study.title}</h3>
                          <p className="text-primary font-semibold">{case_study.category}</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 items-start">

                      {/* Challenge */}
                      <div>
                        <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                          <Users className="w-4 h-4 text-primary" />
                          Desafio
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">{case_study.challenge}</p>
                      </div>

                      {/* Solution */}
                      <div>
                        <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          Solução
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">{case_study.solution}</p>
                      </div>

                      {/* Results */}
                      <div>
                        <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-primary" />
                          Resultados
                        </h4>
                        <ul className="space-y-2">
                          {case_study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="text-muted-foreground flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Nossos Clientes
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" />
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Empresas de diversos setores confiam na Operação Nutri para suas necessidades de segurança alimentar.
              </p>
            </div>

            {/* Mobile - Show only 5 clients, one per line */}
            <div className="grid grid-cols-1 gap-4 md:hidden max-w-sm mx-auto">
              {clients.slice(0, 5).map((client, index) => (
                <Card
                  key={index}
                  className="bg-card shadow-card hover:shadow-hero transition-smooth hover:-translate-y-1 border-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-5xl mb-4">{client.logo}</div>
                    <h3 className="font-bold text-card-foreground text-lg mb-2">{client.name}</h3>
                    <p className="text-primary text-sm font-semibold">{client.sector}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Desktop - Show all clients */}
            <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {clients.map((client, index) => (
                <Card
                  key={index}
                  className="bg-card shadow-card hover:shadow-hero transition-smooth hover:-translate-y-1 border-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{client.logo}</div>
                    <h3 className="font-bold text-card-foreground text-lg mb-2">{client.name}</h3>
                    <p className="text-primary text-sm font-semibold">{client.sector}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 bg-primary/10">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                O que Dizem Nossos Clientes
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" />
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Depoimentos reais de profissionais que experimentaram a diferença da Operação Nutri.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-card shadow-card hover:shadow-hero transition-smooth border-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-8">
                    {/* Stars */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-muted-foreground leading-relaxed mb-6 text-lg">
                      "{testimonial.feedback}"
                    </blockquote>

                    {/* Author */}
                    <div className="border-t pt-4">
                      <p className="font-bold text-card-foreground">{testimonial.name}</p>
                      <p className="text-primary font-semibold text-sm">{testimonial.position}</p>
                      <p className="text-muted-foreground text-sm">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Cases;