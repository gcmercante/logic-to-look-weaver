import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
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
          onClick={scrollToContact}
          size="xlg"
          className="text-2xl font-bold rounded-full transition-smooth shadow-hero hover:shadow-card hover:text-white"
        >
          Comece Agora
        </Button>
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;