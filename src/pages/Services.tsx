import { useState, useEffect } from "react";
import {
  LuShield,
  LuGraduationCap,
  LuUsers,
  LuFileText,
  LuCircleCheckBig,
  LuClock,
  LuAward,
  LuChartColumn,
  LuBookOpen,
  LuSettings,
  LuSearch,
  LuTarget
} from "react-icons/lu";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
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

  const mainServices = [
    {
      icon: LuShield,
      title: "Auditorias de Segurança Alimentar",
      shortDescription: "Avaliações completas de suas operações para identificar áreas de melhoria e garantir a conformidade com os regulamentos.",
      detailedDescription: "Realizamos auditorias completas e detalhadas de todos os aspectos da sua operação alimentar, desde a recepção de matérias-primas até a distribuição do produto final.",
      features: [
        "Avaliação completa dos processos produtivos",
        "Identificação de pontos críticos de controle",
        "Análise de conformidade com normas nacionais e internacionais",
        "Relatório detalhado com recomendações",
        "Plano de ação para correções necessárias",
        "Auditoria de acompanhamento incluída"
      ],
      duration: "3-5 dias",
      deliverables: ["Relatório Executivo", "Plano de Ação", "Certificado de Auditoria"]
    },
    {
      icon: LuGraduationCap,
      title: "Programas de Treinamento",
      shortDescription: "Programas de treinamento abrangentes para sua equipe, cobrindo todos os aspectos de segurança alimentar e higiene.",
      detailedDescription: "Desenvolvemos programas de capacitação personalizados para diferentes níveis hierárquicos, garantindo que toda a equipe tenha o conhecimento necessário para manter os padrões de segurança alimentar.",
      features: [
        "Treinamento customizado por função e nível",
        "Material didático exclusivo e atualizado",
        "Aulas práticas e teóricas",
        "Certificação individual dos participantes",
        "Programa de educação continuada",
        "Avaliação de eficácia do treinamento"
      ],
      duration: "1-3 semanas",
      deliverables: ["Material Didático", "Certificados", "Relatório de Avaliação"]
    },
    {
      icon: LuUsers,
      title: "Serviços de Consultoria",
      shortDescription: "Orientação especializada no desenvolvimento e implementação de sistemas eficazes de gestão da segurança alimentar.",
      detailedDescription: "Nossa equipe de consultores especializados trabalha lado a lado com sua empresa para desenvolver, implementar e otimizar sistemas de gestão de segurança alimentar adequados ao seu negócio.",
      features: [
        "Desenvolvimento de sistemas HACCP",
        "Implementação de normas ISO 22000",
        "Consultoria em BRC, IFS e outros padrões",
        "Assessoria em certificações internacionais",
        "Suporte na implementação de melhorias",
        "Acompanhamento pós-implementação"
      ],
      duration: "2-6 meses",
      deliverables: ["Sistema Documentado", "Procedimentos", "Manual de Qualidade"]
    }
  ];

  const additionalServices = [
    {
      icon: LuFileText,
      title: "Documentação e Procedimentos",
      description: "Elaboração de manuais, POPs e documentação técnica completa para garantir a conformidade."
    },
    {
      icon: LuChartColumn,
      title: "Análise de Riscos",
      description: "Identificação e avaliação detalhada de riscos em toda a cadeia produtiva alimentar."
    },
    {
      icon: LuBookOpen,
      title: "Capacitação Online",
      description: "Plataforma digital com cursos interativos e atualizações constantes sobre segurança alimentar."
    },
    {
      icon: LuSettings,
      title: "Otimização de Processos",
      description: "Melhoria contínua dos processos produtivos com foco em eficiência e segurança."
    },
    {
      icon: LuSearch,
      title: "Due Diligence",
      description: "Avaliação completa de fornecedores e parceiros comerciais em aspectos de segurança alimentar."
    },
    {
      icon: LuAward,
      title: "Preparação para Certificações",
      description: "Suporte especializado para obtenção de certificações nacionais e internacionais."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Diagnóstico Inicial",
      description: "Avaliação completa da situação atual da empresa e identificação das necessidades específicas."
    },
    {
      step: "02",
      title: "Proposta Personalizada",
      description: "Desenvolvimento de uma proposta customizada com cronograma e metodologia adequados."
    },
    {
      step: "03",
      title: "Implementação",
      description: "Execução do projeto com acompanhamento constante e ajustes quando necessário."
    },
    {
      step: "04",
      title: "Validação e Entrega",
      description: "Verificação dos resultados alcançados e entrega de toda a documentação necessária."
    },
    {
      step: "05",
      title: "Suporte Continuado",
      description: "Acompanhamento pós-projeto para garantir a sustentabilidade das melhorias implementadas."
    }
  ];

  const scrollToContact = () => {
    // For now, just scroll to footer since we don't have a contact section yet
    const footer = document.querySelector('footer');
    footer?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} currentPage="services" />

      <main className="mt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-4xl text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-foreground">
              Nossos{" "}
              <span className="text-primary gradient-primary bg-clip-text">
                Serviços
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Soluções completas e personalizadas para atender às necessidades específicas da sua empresa em segurança alimentar.
            </p>

            <Button
              onClick={scrollToContact}
              size="lg"
              className="text-lg font-semibold rounded-full transition-smooth shadow-card hover:shadow-hero"
            >
              Solicite uma Consulta
            </Button>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20 px-4 bg-primary/10">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Serviços Principais
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" />
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Três pilares fundamentais para a excelência em segurança alimentar da sua empresa.
              </p>
            </div>

            <div className="space-y-16">
              {mainServices.map((service, index) => (
                <Card
                  key={index}
                  className="bg-card shadow-card hover:shadow-hero transition-smooth border-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-8">
                    {/* Mobile Header - Icon on top */}
                    <div className="block md:hidden text-center mb-8">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-card-foreground mb-4">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">{service.detailedDescription}</p>
                    </div>

                    {/* Desktop Header - Icon on left */}
                    <div className="hidden md:block lg:col-span-3 mb-6">
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <service.icon className="w-8 h-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-card-foreground mb-3">{service.title}</h3>
                          <p className="text-muted-foreground leading-relaxed text-lg">{service.detailedDescription}</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">

                      {/* Features */}
                      <div className="lg:col-span-2">
                        <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                          <LuCircleCheckBig className="w-5 h-5 text-primary" />
                          O que está incluído:
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start gap-2">
                              <LuCircleCheckBig className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground text-sm leading-relaxed">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Service Details */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                            <LuClock className="w-5 h-5 text-primary" />
                            Duração
                          </h4>
                          <p className="text-muted-foreground">{service.duration}</p>
                        </div>

                        <div>
                          <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                            <LuFileText className="w-5 h-5 text-primary" />
                            Entregáveis
                          </h4>
                          <ul className="space-y-1">
                            {service.deliverables.map((deliverable, deliverableIndex) => (
                              <li key={deliverableIndex} className="text-muted-foreground text-sm">
                                • {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Serviços Complementares
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" />
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Soluções adicionais para atender necessidades específicas e garantir excelência completa.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <Card
                  key={index}
                  className="bg-card shadow-card hover:shadow-hero transition-smooth hover:-translate-y-2 border-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground">
                      {service.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-20 px-4 bg-primary/10">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Nosso Processo
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" />
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Metodologia comprovada para garantir resultados eficazes e duradouros.
              </p>
            </div>

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <Card
                  key={index}
                  className="bg-card shadow-card hover:shadow-hero transition-smooth border-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    {/* Mobile Layout - Icon on top */}
                    <div className="block md:hidden text-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold text-card-foreground mb-3">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>

                    {/* Desktop Layout - Icon on left */}
                    <div className="hidden md:flex items-start gap-6">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-card-foreground mb-3">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-primary/10 rounded-2xl p-8 md:p-12 animate-fade-in">
              <LuTarget className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Pronto para Transformar sua Operação?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Entre em contato conosco hoje mesmo e descubra como podemos ajudar sua empresa a alcançar a excelência em segurança alimentar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="text-lg font-semibold rounded-full transition-smooth shadow-card hover:shadow-hero"
                >
                  Solicitar Orçamento
                </Button>
                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  size="lg"
                  className="text-lg font-semibold rounded-full transition-smooth border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Agendar Consulta
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

export default Services;