import teamAbout from "@/assets/team-about.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
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
              Sobre Nós
            </h2>
            <div className="w-20 h-1 bg-primary mb-8 rounded-full" />
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Na <strong className="text-primary font-semibold">Operação Nutri</strong>, 
                nos dedicamos a ajudar empresas de alimentos de todos os portes a alcançar 
                e manter os mais altos padrões de segurança alimentar.
              </p>
              
              <p>
                Nossa equipe de especialistas oferece soluções personalizadas, desde 
                treinamentos e auditorias até gerenciamento de riscos e suporte de conformidade, 
                garantindo que sua empresa atenda a todas as regulamentações necessárias.
              </p>
              
              <p>
                Com anos de experiência no setor alimentício, desenvolvemos metodologias 
                comprovadas que protegem sua marca e garantem a confiança dos consumidores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;