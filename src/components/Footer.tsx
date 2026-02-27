import { motion } from "motion/react";
import { ArrowRight, Instagram, Linkedin, Youtube } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const Footer = () => {
  const { t, language } = useLanguage();

  return (
    <footer id="contact" className="bg-white text-black py-24 px-6 rounded-t-[3rem] mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <p className="font-mono text-sm uppercase tracking-widest mb-8 text-gray-500">
              {t.footer.start}
            </p>
            <h2 className={`font-display font-black tracking-tighter leading-[0.9] mb-8 ${
              language === 'es' 
                ? 'text-3xl md:text-4xl lg:text-5xl' 
                : 'text-5xl md:text-6xl lg:text-7xl'
            }`}>
              {t.footer.talk.split(' ').map((word, i, arr) => (
                <span key={i} className="block">
                  {word}
                </span>
              ))}
            </h2>
          </div>
          
          <div className="flex flex-col justify-between">
            <div className="mb-12">
              <div>
                <h4 className="font-bold mb-4">{t.footer.contact}</h4>
                <p className="text-gray-600">juanmibrujul.ai@gmail.com</p>
              </div>
            </div>
            
            <form className="space-y-6">
              <div className="border-b border-black/20 pb-2">
                <input 
                  type="email" 
                  placeholder={t.footer.emailPlaceholder}
                  className="w-full bg-transparent outline-none text-xl placeholder:text-gray-400"
                />
              </div>
              <button className="w-full bg-black text-white py-4 rounded-full font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                {t.footer.send} <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            {t.footer.rights}
          </p>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/brujul.ai" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/juan-miguel-garcia-alejo/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="https://www.youtube.com/@juanmi92JP" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors"><Youtube className="w-5 h-5" /></a>
            <a href="https://www.youtube.com/@juanmi92BM" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors"><Youtube className="w-5 h-5" /></a>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="font-display font-black text-xl sm:text-2xl md:text-6xl lg:text-7xl tracking-tighter leading-none uppercase text-black">
            {t.footer.reminder}
          </h3>
        </div>
      </div>
    </footer>
  );
};
