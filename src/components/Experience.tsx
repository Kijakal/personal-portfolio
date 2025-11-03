import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, Award, Briefcase, CheckCircle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const timelineIcons = [GraduationCap, GraduationCap, Award, Briefcase];

export function Experience() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-[#0a1628] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <p className="text-xs sm:text-sm uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            {t.experience.badge}
          </p>
          <h2 className="text-gray-900 dark:text-white mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            {t.experience.title} <span className="text-gradient">{t.experience.titleHighlight}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-8"
          >
            {t.experience.timeline.map((item, index) => {
              const IconComponent = timelineIcons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="relative pl-10 sm:pl-12"
                >
                  {/* Timeline line */}
                  {index !== t.experience.timeline.length - 1 && (
                    <div className="absolute left-5 sm:left-6 top-14 sm:top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-transparent" />
                  )}

                  {/* Icon */}
                  <div className="absolute left-0 top-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="bg-gray-50 dark:bg-gray-900/50 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-lg">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                      <span className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 rounded-full text-[10px] sm:text-xs">
                        {item.category}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="text-gray-900 dark:text-white mb-1 text-sm sm:text-base md:text-lg">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 mb-2 sm:mb-3">
                      {item.institution}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Key Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="lg:sticky lg:top-24">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 sm:p-7 md:p-8 rounded-xl sm:rounded-2xl text-white">
                <h3 className="mb-4 sm:mb-6 text-lg sm:text-xl md:text-2xl">{t.experience.achievementsTitle}</h3>
                <div className="space-y-3 sm:space-y-4">
                  {t.experience.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="flex items-start gap-2 sm:gap-3"
                    >
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 mt-0.5 sm:mt-1" />
                      <p className="text-xs sm:text-sm">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Additional info card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="mt-4 sm:mt-6 p-4 sm:p-5 md:p-6 bg-gray-50 dark:bg-gray-900/50 rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-800"
              >
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                  {t.experience.additionalInfo}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 rounded-full text-[10px] sm:text-xs">
                    {t.experience.lifelongLearner}
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-purple-100 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 rounded-full text-[10px] sm:text-xs">
                    {t.experience.innovationFocused}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
