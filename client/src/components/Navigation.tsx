import { Link as ScrollLink } from "react-scroll";
import { Menu, X, Utensils } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", to: "hero" },
    { name: "Recursos", to: "features" },
    { name: "Planos", to: "pricing" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <ScrollLink
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer flex items-center gap-2 group"
          >
            <div className="bg-primary p-2 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
              <Utensils size={24} />
            </div>
            <span className="text-2xl font-serif font-bold tracking-tight text-secondary">
              Gustoo<span className="text-primary">.</span>
            </span>
          </ScrollLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-100}
                className="text-sm font-medium cursor-pointer transition-colors text-secondary/80 hover:text-primary"
              >
                {link.name}
              </ScrollLink>
            ))}
            <ScrollLink to="pricing" smooth={true} duration={500} offset={-50}>
              <Button 
                className="rounded-full px-6 shadow-lg hover:shadow-xl transition-all"
                data-testid="button-nav-cta"
              >
                Começar Agora
              </Button>
            </ScrollLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-secondary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-secondary p-2 hover:bg-muted rounded-lg cursor-pointer"
                >
                  {link.name}
                </ScrollLink>
              ))}
              <ScrollLink to="pricing" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                <Button className="w-full rounded-full mt-4" data-testid="button-mobile-nav-cta">
                  Começar Agora
                </Button>
              </ScrollLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
