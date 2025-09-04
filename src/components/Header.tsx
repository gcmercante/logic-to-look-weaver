import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LuMenu, LuSun, LuMoon } from "react-icons/lu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  currentPage?: string;
}

const Header = ({ darkMode, toggleDarkMode, currentPage = "home" }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { href: "/about", label: "Sobre" },
    { href: "/cases", label: "Cases" },
    { href: "/services", label: "Serviços" },
    { href: "/contact", label: "Contato" },
  ];

  if (currentPage === "home") {
    navigationItems[0] = { href: "/about", label: "Sobre" };
  }

  const handleNavigation = (href: string) => {
    if (href.startsWith("#")) {
      // If we're on the home page, scroll to the section
      if (currentPage === "home") {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
      } else {
        // If we're on another page, navigate to home with hash
        window.location.href = `/${href}`;
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/95 backdrop-blur-sm shadow-soft border-b"
        : "bg-background/80 backdrop-blur-sm"
        }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <h1
          className="text-2xl font-bold text-primary cursor-pointer"
          onClick={() => window.location.href = "/"}
        >
          Operação Nutri
        </h1>

        <div className="flex items-center gap-4">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Dark Mode Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="rounded-full hover:bg-accent"
          >
            {darkMode ? <LuSun className="h-5 w-5" /> : <LuMoon className="h-5 w-5" />}
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <LuMenu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-6">
                <h2 className="text-lg font-semibold text-primary">Menu</h2>
                <nav className="flex flex-col gap-4">
                  {navigationItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleNavigation(item.href)}
                      className="text-left text-foreground hover:text-primary transition-smooth py-2 font-medium"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;