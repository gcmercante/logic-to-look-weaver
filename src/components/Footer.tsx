import { Button } from "@/components/ui/button";
import { Mail, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background py-16 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Entre em Contato</h2>
          <p className="text-background/80 mb-8 text-lg max-w-2xl mx-auto">
            Tem alguma dúvida ou precisa de uma consulta? Adoraríamos ouvir de você 
            e ajudar sua empresa a alcançar os mais altos padrões de segurança alimentar.
          </p>
          
          <Button 
            asChild
            size="lg"
            className="bg-primary hover:bg-primary-darker text-primary-foreground font-semibold px-8 py-4 rounded-full transition-smooth shadow-hero hover:shadow-card mb-12"
          >
            <a href="mailto:contato@operacaonutri.com">
              <Mail className="w-5 h-5 mr-2" />
              contato@operacaonutri.com
            </a>
          </Button>
        </div>
        
        {/* Links and Social */}
        <div className="border-t border-background/20 pt-8 space-y-6">
          <div className="flex justify-center gap-8 flex-wrap">
            <a 
              href="#" 
              className="text-background/80 hover:text-primary transition-smooth"
            >
              Política de Privacidade
            </a>
            <a 
              href="#" 
              className="text-background/80 hover:text-primary transition-smooth"
            >
              Termos de Serviço
            </a>
          </div>
          
          <div className="flex justify-center gap-6">
            <Button 
              variant="ghost" 
              size="icon"
              className="text-background/80 hover:text-primary hover:bg-background/10 rounded-full"
              asChild
            >
              <a href="#" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="text-background/80 hover:text-primary hover:bg-background/10 rounded-full"
              asChild
            >
              <a href="#" aria-label="Twitter">
                <Twitter className="w-6 h-6" />
              </a>
            </Button>
          </div>
          
          <p className="text-background/60 text-sm">
            © 2024 Operação Nutri. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;