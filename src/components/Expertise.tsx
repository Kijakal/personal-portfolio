import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { 
  LineChart, 
  Database, 
  Shield, 
  Cloud, 
  Cog, 
  Sparkles 
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const expertiseIcons = [LineChart, Cog, Shield, Database, Cog, Sparkles];

export function Expertise() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-[#1a2332] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #2563eb 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <p className="text-xs sm:text-sm uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            {t.expertise.badge}
          </p>
          <h2 className="text-gray-900 dark:text-white mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            {t.expertise.title} <span className="text-gradient">{t.expertise.titleHighlight}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-sm sm:text-base px-4">
            {t.expertise.description}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {t.expertise.areas.map((area, index) => {
            const IconComponent = expertiseIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="h-full p-6 sm:p-7 md:p-8 bg-white dark:bg-gray-900/50 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-4 sm:mb-5 md:mb-6 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all"
                  >
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h4 className="text-gray-900 dark:text-white mb-2 sm:mb-3 text-base sm:text-lg md:text-xl">
                    {area.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm md:text-base">
                    {area.description}
                  </p>

                  {/* Hover effect line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl sm:rounded-b-2xl" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
