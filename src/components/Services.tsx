import { Shield, GraduationCap, Users } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Auditorias de Segurança Alimentar",
      description: "Avaliações completas de suas operações para identificar áreas de melhoria e garantir a conformidade com os regulamentos."
    },
    {
      icon: GraduationCap,
      title: "Programas de Treinamento",
      description: "Programas de treinamento abrangentes para sua equipe, cobrindo todos os aspectos de segurança alimentar e higiene."
    },
    {
      icon: Users,
      title: "Serviços de Consultoria",
      description: "Orientação especializada no desenvolvimento e implementação de sistemas eficazes de gestão da segurança alimentar."
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-accent">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Nossos Serviços
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Oferecemos soluções completas e personalizadas para atender às necessidades 
            específicas da sua empresa em segurança alimentar.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card shadow-card hover:shadow-hero transition-smooth hover:-translate-y-2 border-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
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
  );
};

export default Services;