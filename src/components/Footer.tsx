import { Button } from "@/components/ui/button";
import { LuPhoneCall } from "react-icons/lu";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary-foreground text-primary-dark py-16 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        {/* <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Entre em Contato</h2>
          <p className="text-secondary-foreground/80 mb-8 text-lg max-w-2xl mx-auto">
            Tem alguma dúvida ou precisa de uma consulta? Adoraríamos ouvir de você
            e ajudar sua empresa a alcançar os mais altos padrões de segurança alimentar.
          </p>

          <Button
            asChild
            size="lg"
            className="font-bold px-12 py-6 rounded-full text-lg transition-smooth shadow-hero hover:shadow-card mb-12"
          >
            <a href="mailto:contato@operacaonutri.com">
              <Mail className="w-5 h-5 mr-2" />
              <span className="hidden max-[450px]:inline">Email</span>
              <span className="inline max-[450px]:hidden">contato@operacaonutri.com</span>
            </a>
          </Button>
        </div> */}

        {/* Links and Social */}
        <div className="border-t border-secondary-foreground/20 pt-8 space-y-6">
          <div className="flex justify-center gap-8 flex-wrap">
            <a
              href="#"
              className="text-secondary-foreground/80 hover:text-primary transition-smooth"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="text-secondary-foreground/80 hover:text-primary transition-smooth"
            >
              Termos de Serviço
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <Button
              variant="ghost"
              size="icon"
              className="text-secondary-foreground/80 hover:text-primary hover:bg-secondary-foreground/10 rounded-full"
              asChild
            >
              <a href="https://wa.me/5511934707109?text=Olá! Gostaria de saber mais sobre os serviços da Operação Nutri." aria-label="Whatsapp">
                <SiWhatsapp className="w-6 h-6" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-secondary-foreground/80 hover:text-primary hover:bg-secondary-foreground/10 rounded-full"
              asChild
            >
              <a href="https://www.instagram.com/operacaonutri/" aria-label="Instagram">
                <SiInstagram className="w-6 h-6" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-secondary-foreground/80 hover:text-primary hover:bg-secondary-foreground/10 rounded-full"
              asChild
            >
              <a href="tel:+5511934707109" aria-label="Telefone">
                <LuPhoneCall className="w-6 h-6" />
              </a>
            </Button>
          </div>

          <p className="text-secondary-foreground/60 text-sm">
            © 2025 Operação Nutri. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;