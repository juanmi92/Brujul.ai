import { motion } from "motion/react";
import { Brain, Cpu, Globe, MessageSquareCode, Zap } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const icons = {
  "01": Brain,
  "02": Zap,
  "03": Cpu,
};

const images = {
  "01": "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop", // Android vibe
  "02": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop", // High quality car image
  "03": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop", // Robot/Tech
  "04": "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=2048&auto=format&fit=crop", // AI/Chatbot vibe
  "05": "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop", // Social media
  "06": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", // Web design/coding
};

export const Services = () => {
  const { t, language } = useLanguage();

  return (
    <section id="services" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <span className="text-sm font-mono uppercase tracking-widest text-gray-400">
              {t.services.label}
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl uppercase leading-none flex flex-col">
            <span className={language === 'es' ? 'text-2xl sm:text-4xl md:text-7xl' : ''}>
              {t.services.title}
            </span>
            <span className={`text-gray-600 ${language === 'en' ? 'text-2xl sm:text-4xl md:text-7xl' : ''}`}>
              {t.services.titleHighlight}
            </span>
          </h2>
        </div>

        <div className="space-y-6">
          {t.services.items.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.01,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                borderColor: "rgba(255, 255, 255, 0.2)"
              }}
              viewport={{ once: true }}
              className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer"
            >
              <div className="p-8 md:p-12 grid md:grid-cols-[1fr_2fr_1fr] gap-8 items-center">
                <div className="flex items-start gap-4">
                  <span className="font-display font-bold text-3xl text-blue-500/50 group-hover:text-blue-500 transition-colors">
                    {service.id}
                  </span>
                  <h3 className="font-display font-bold text-2xl md:text-4xl">
                    {service.title}
                  </h3>
                </div>

                <div className="transition-all duration-500">
                   <img 
                    src={images[service.id as keyof typeof images]} 
                    alt={service.title}
                    className="w-full h-48 md:h-64 object-cover rounded-xl transition-all duration-500"
                    referrerPolicy="no-referrer"
                   />
                </div>

                <p className="text-gray-400 group-hover:text-gray-200 transition-colors text-lg">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
