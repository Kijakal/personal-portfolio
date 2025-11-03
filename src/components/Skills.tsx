import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code, Users, Target } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { TechLogos } from "./TechLogos";

const skillIcons = [Code, Target, Users];
const skillColors = ["blue", "purple", "gold"];

export function Skills() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-600 to-blue-400",
      purple: "from-purple-600 to-purple-400",
      gold: "from-amber-600 to-amber-400"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-[#1a2332] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="skills-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="currentColor" className="text-blue-600"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#skills-grid)" />
        </svg>
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
            {t.skills.badge}
          </p>
          <h2 className="text-gray-900 dark:text-white mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            {t.skills.title} <span className="text-gradient">{t.skills.titleHighlight}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-sm sm:text-base px-4">
            {t.skills.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {t.skills.categories.map((category, categoryIndex) => {
            const IconComponent = skillIcons[categoryIndex];
            const colorClass = skillColors[categoryIndex];
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="bg-white dark:bg-gray-900/50 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-7 md:p-8 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-xl"
              >
                {/* Header */}
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${getColorClasses(colorClass)} flex items-center justify-center shadow-lg`}>
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-gray-900 dark:text-white text-base sm:text-lg md:text-xl">
                    {category.title}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: 0.6, 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1 
                      }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            duration: 1, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                            ease: "easeOut"
                          }}
                          className={`h-full bg-gradient-to-r ${getColorClasses(colorClass)} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Technologies & Tools - Sliding Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 sm:mt-14 md:mt-16"
        >
          <p className="text-xs sm:text-sm uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-6 sm:mb-8 text-center">
            {t.skills.technologiesLabel}
          </p>
          <TechLogos />
        </motion.div>
      </div>
    </section>
  );
}
