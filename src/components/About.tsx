import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-black relative overflow-hidden">
      {/* Decorative thin circle line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150vw] h-[150vw] border border-white/10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-white rounded-full" />
            <span className="text-sm font-mono uppercase tracking-widest text-gray-400">
              {t.about.label}
            </span>
          </div>
          
          <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl uppercase leading-[0.9] tracking-tight max-w-5xl">
            {t.about.title} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-white">
              {t.about.titleHighlight}
            </span>
            <br />{t.about.titleEnd}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
          <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden group">
             {/* Abstract 3D-like shape placeholder */}
             <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                <div className="w-3/4 h-3/4 border-[20px] border-white/5 rounded-full rotate-45 group-hover:rotate-90 transition-transform duration-1000 ease-in-out" />
                <div className="absolute w-1/2 h-1/2 border-[20px] border-blue-500/20 rounded-full -rotate-12 group-hover:-rotate-45 transition-transform duration-1000 ease-in-out" />
             </div>
             <img 
                src="https://picsum.photos/seed/tech/800/600?grayscale&blur=2" 
                alt="Abstract AI Art" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay"
                referrerPolicy="no-referrer"
                loading="lazy"
             />
          </div>

          <div className="space-y-8 text-lg md:text-xl text-gray-400 leading-relaxed">
            <p>
              {t.about.p1}
            </p>
            <p>
              {t.about.p2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
