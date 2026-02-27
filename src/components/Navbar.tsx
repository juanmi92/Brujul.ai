import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import { useLanguage } from "../context/LanguageContext";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { scrollY } = useScroll();

  // Opacity and visibility transforms based on scroll
  // Elements disappear after 50px of scroll
  const navContentOpacity = useTransform(scrollY, [0, 50], [1, 0]);
  const navContentPointerEvents = useTransform(scrollY, (latest) => latest > 50 ? "none" : "auto");

  const links = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.services, href: "#services" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-6 text-white transition-all ${isOpen ? '' : 'mix-blend-difference'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 group">
          <a href="#" className="flex items-center gap-2">
            <Logo className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:rotate-180 duration-700" />
          </a>
          <motion.span 
            style={{ opacity: navContentOpacity, pointerEvents: navContentPointerEvents }}
            className="font-display font-bold text-xl tracking-tighter hidden md:block"
          >
            brujul.ai
          </motion.span>
          {/* Mobile version of the text always visible or follows mobile rules */}
          <span className="font-display font-bold text-xl tracking-tighter md:hidden">brujul.ai</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <motion.div 
            style={{ opacity: navContentOpacity, pointerEvents: navContentPointerEvents }}
            className="flex items-center gap-8"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium uppercase tracking-widest hover:text-gray-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-sm font-medium uppercase tracking-widest hover:text-gray-300 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'en' ? 'ES' : 'EN'}</span>
            </button>
          </motion.div>

          <a
            href="#contact"
            className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-gray-200 transition-colors"
          >
            {t.nav.talk} <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleLanguage}
            className="text-sm font-bold uppercase tracking-widest"
          >
            {language === 'en' ? 'ES' : 'EN'}
          </button>
          <button
            className="z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden z-40"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-display font-bold uppercase"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-bold uppercase"
            >
              {t.nav.talk} <ArrowRight />
            </a>
          </motion.div>
        )}
      </div>
    </nav>
  );
};
