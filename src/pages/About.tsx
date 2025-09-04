import { useState, useEffect } from "react";
import { Shield, Users, Award, Target, Lightbulb, Handshake } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import teamCeo from "@/assets/team-ceo.jpg";
import teamTraining from "@/assets/team-training.jpg";
import teamConsultant from "@/assets/team-consultant.jpg";
import teamAbout from "@/assets/team-about.jpg";

const About = () => {
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

  const teamMembers = [
    {
      name: "Dra. Anya Sharma",
      role: "CEO",
      image: teamCeo,
      alt: "Dra. Anya Sharma - CEO da Operação Nutri"
    },
    {
      name: "Sr. Ben Carter",
      role: "Diretor de Treinamento",
      image: teamTraining,
      alt: "Sr. Ben Carter - Diretor de Treinamento da Operação Nutri"
    },
    {
      name: "Sra. Chloe Davis",
      role: "Consultora Principal",
      image: teamConsultant,
      alt: "Sra. Chloe Davis - Consultora Principal da Operação Nutri"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Integridade",
      description: "Mantemos os mais altos padrões éticos em todas as nossas interações e processos."
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Estamos comprometidos em entregar qualidade excepcional em tudo que fazemos."
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Buscamos continuamente formas novas e melhoradas de servir nossos clientes."
    },
    {
      icon: Handshake,
      title: "Colaboração",
      description: "Trabalhamos em estreita colaboração com nossos clientes para alcançar seus objetivos."
    },
    {
      icon: Target,
      title: "Responsabilidade",
      description: "Assumimos a responsabilidade pelo nosso trabalho e somos responsáveis pelos nossos resultados."
    },
    {
      icon: Users,
      title: "Compromisso",
      description: "Dedicamo-nos integralmente ao sucesso e segurança alimentar dos nossos clientes."
    }
  ];

  const stats = [
    { number: "14", label: "Anos de Experiência", suffix: "+" },
    { number: "500", label: "Clientes Atendidos", suffix: "+" },
    { number: "50", label: "Especialistas", suffix: "+" },
    { number: "99", label: "Taxa de Satisfação", suffix: "%" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} currentPage="about" />

      <main className="mt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-4xl text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-foreground">
              Sobre a{" "}
              <span className="text-primary gradient-primary bg-clip-text">
                Operação Nutri
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Somos dedicados a revolucionar a segurança alimentar. Descubra nossa história, missão e a equipe apaixonada por trás do nosso sucesso.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="bg-primary/10 rounded-2xl p-6 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="animate-slide-in">
                <img
                  src={teamAbout}
                  alt="Equipe da Operação Nutri trabalhando em consultoria de segurança alimentar"
                  className="rounded-2xl shadow-card w-full h-auto object-cover"
                />
              </div>

              {/* Content */}
              <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Nossa História
                </h2>
                <div className="w-20 h-1 bg-primary mb-8 rounded-full" />

                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Fundada em 2010, a <strong className="text-primary font-semibold">Operação Nutri</strong> emergiu de uma paixão compartilhada pela segurança alimentar e saúde pública. Nossa jornada começou com uma pequena equipe de especialistas dedicados a fornecer soluções inovadoras para a indústria alimentar.
                  </p>

                  <p>
                    Ao longo dos anos, crescemos para nos tornar um provedor líder, atendendo clientes em vários setores. Nossa equipe de especialistas oferece soluções personalizadas, desde treinamentos e auditorias até gerenciamento de riscos e suporte de conformidade.
                  </p>

                  <p>
                    Estamos comprometidos com a excelência, adaptando-nos continuamente e evoluindo para enfrentar os desafios dinâmicos da indústria alimentar e garantir o bem-estar dos consumidores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4 bg-primary/10">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Missão e Visão
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" />
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Os pilares que orientam nossa empresa e definem nosso propósito no mercado.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-card shadow-card hover:shadow-hero transition-smooth border-0 animate-fade-in">
                <CardHeader className="text-center pb-4 px-8 pt-8">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground">
                    Nossa Missão
                  </h3>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <p className="text-muted-foreground text-center leading-relaxed text-lg">
                    Capacitar empresas de alimentos com o conhecimento e ferramentas necessárias para garantir os mais altos padrões de segurança alimentar. Nos esforçamos para proteger os consumidores e aprimorar a reputação de nossos clientes através de treinamento abrangente, consultoria e soluções tecnológicas.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-card hover:shadow-hero transition-smooth border-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <CardHeader className="text-center pb-4 px-8 pt-8">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Lightbulb className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground">
                    Nossa Visão
                  </h3>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <p className="text-muted-foreground text-center leading-relaxed text-lg">
                    Ser reconhecida como a principal referência em segurança alimentar no Brasil, promovendo uma cultura de segurança e qualidade que permeie todos os aspectos das operações de nossos clientes e transforme toda a cadeia produtiva alimentar.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Nossos Valores
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" />
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Os princípios que guiam cada decisão e ação em nossa empresa.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="bg-card shadow-card hover:shadow-hero transition-smooth hover:-translate-y-2 border-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground">
                      {value.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="py-20 px-4 bg-primary/10">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Conheça Nossa Equipe
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" />
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Profissionais experientes e apaixonados por segurança alimentar.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="bg-card shadow-card hover:shadow-hero transition-smooth hover:-translate-y-2 border-0 animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      alt={member.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      src={member.image}
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold text-card-foreground text-xl mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold">
                      {member.role}
                    </p>
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

export default About;