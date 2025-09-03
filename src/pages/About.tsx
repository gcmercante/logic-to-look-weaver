import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import teamCeo from "@/assets/team-ceo.jpg";
import teamTraining from "@/assets/team-training.jpg";
import teamConsultant from "@/assets/team-consultant.jpg";

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
      title: "Integridade",
      description: "Mantemos os mais altos padrões éticos em todas as nossas interações."
    },
    {
      title: "Excelência", 
      description: "Estamos comprometidos em entregar qualidade excepcional em tudo que fazemos."
    },
    {
      title: "Inovação",
      description: "Buscamos continuamente formas novas e melhoradas de servir nossos clientes."
    },
    {
      title: "Colaboração",
      description: "Trabalhamos em estreita colaboração com nossos clientes para alcançar seus objetivos de segurança alimentar."
    },
    {
      title: "Responsabilidade",
      description: "Assumimos a responsabilidade pelo nosso trabalho e somos responsáveis pelos nossos resultados."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} currentPage="about" />
      
      <main className="mt-20">
        {/* Hero Section */}
        <section className="text-center py-16 px-4 bg-secondary">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in">
              Sobre Nossa Empresa
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in">
              Somos dedicados a revolucionar a segurança alimentar. Descubra nossa história, missão e a equipe apaixonada por trás do nosso sucesso.
            </p>
          </div>
        </section>

        <div className="px-4 py-16 space-y-20">
          {/* Our Story */}
          <section className="animate-fade-in">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                Nossa História
              </h2>
              <div className="w-20 h-1 bg-primary mb-8 rounded-full mx-auto" />
              <p className="text-muted-foreground text-lg leading-relaxed text-justify">
                Fundada em 2010, a Operação Nutri emergiu de uma paixão compartilhada pela segurança alimentar e saúde pública. Nossa jornada começou com uma pequena equipe de especialistas dedicados a fornecer soluções inovadoras para a indústria alimentar. Ao longo dos anos, crescemos para nos tornar um provedor líder, atendendo clientes em vários setores. Estamos comprometidos com a excelência, adaptando-nos continuamente e evoluindo para enfrentar os desafios dinâmicos da indústria alimentar e garantir o bem-estar dos consumidores.
              </p>
            </div>
          </section>

          {/* Our Mission */}
          <section className="animate-fade-in">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                Nossa Missão
              </h2>
              <div className="w-20 h-1 bg-primary mb-8 rounded-full mx-auto" />
              <p className="text-muted-foreground text-lg leading-relaxed text-justify">
                Capacitar empresas de alimentos com o conhecimento e ferramentas necessárias para garantir os mais altos padrões de segurança alimentar. Nos esforçamos para proteger os consumidores e aprimorar a reputação de nossos clientes através de treinamento abrangente, consultoria e soluções tecnológicas. Nosso objetivo é promover uma cultura de segurança e qualidade que permeie todos os aspectos das operações de nossos clientes.
              </p>
            </div>
          </section>

          {/* Our Values */}
          <section className="animate-fade-in">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                Nossos Valores
              </h2>
              <div className="w-20 h-1 bg-primary mb-12 rounded-full mx-auto" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="p-6 bg-card rounded-lg shadow-card border border-border hover:shadow-soft transition-all duration-300">
                    <h3 className="font-bold text-primary text-xl mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Meet Our Team */}
          <section className="animate-fade-in">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                Conheça Nossa Equipe
              </h2>
              <div className="w-20 h-1 bg-primary mb-12 rounded-full mx-auto" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-6 bg-card border border-border rounded-lg shadow-card hover:shadow-soft transition-all duration-300 group">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4 shadow-soft group-hover:shadow-card transition-all duration-300">
                      <img 
                        alt={member.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                        src={member.image}
                      />
                    </div>
                    <h3 className="font-bold text-foreground text-lg mb-2">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary font-semibold">
                      {member.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;