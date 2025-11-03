import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Shield, Lock, Eye } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";

export function About() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-[#0a1628] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 dark:from-blue-950/20 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center"
        >
          {/* Left - Cybersecurity Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-2 lg:order-1"
          >
            {/* Abstract Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl blur-3xl" />
            
            {/* Main Visual Container */}
            <div className="relative bg-gradient-to-br from-blue-600/5 to-purple-600/5 dark:from-blue-500/10 dark:to-purple-500/10 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-blue-200 dark:border-blue-800/30 backdrop-blur-sm">
              {/* Cybersecurity Image */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent z-10" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1724219616919-aab943e7b00d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHNoaWVsZHxlbnwxfHx8fDE3NjIyMDExNTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Cybersecurity & Information Assurance"
                  className="w-full h-48 sm:h-64 md:h-80 object-cover"
                />
              </div>

              {/* Security Icons Grid */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="bg-blue-50 dark:bg-blue-950/30 p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl flex flex-col items-center gap-1 sm:gap-2 border border-blue-200 dark:border-blue-800/30"
                >
                  <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600 dark:text-blue-400" />
                  <span className="text-[10px] sm:text-xs text-center text-gray-700 dark:text-gray-300">Protection</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="bg-purple-50 dark:bg-purple-950/30 p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl flex flex-col items-center gap-1 sm:gap-2 border border-purple-200 dark:border-purple-800/30"
                >
                  <Lock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-purple-600 dark:text-purple-400" />
                  <span className="text-[10px] sm:text-xs text-center text-gray-700 dark:text-gray-300">Integrity</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                  className="bg-blue-50 dark:bg-blue-950/30 p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl flex flex-col items-center gap-1 sm:gap-2 border border-blue-200 dark:border-blue-800/30"
                >
                  <Eye className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600 dark:text-blue-400" />
                  <span className="text-[10px] sm:text-xs text-center text-gray-700 dark:text-gray-300">Monitoring</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 sm:space-y-5 md:space-y-6 order-1 lg:order-2"
          >
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="text-xs sm:text-sm uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2"
              >
                {t.about.badge}
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="text-gray-900 dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              >
                {t.about.title} <span className="text-gradient">{t.about.titleHighlight}</span>
              </motion.h2>
            </div>

            {/* Specialization Subsection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border-l-4 border-blue-600 dark:border-blue-400"
            >
              <h3 className="text-blue-900 dark:text-blue-100 mb-2 text-base sm:text-lg md:text-xl lg:text-2xl">
                {t.about.specializationTitle}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm">
                {t.about.specializationSubtitle}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="space-y-3 sm:space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base"
            >
              <p>
                {t.about.paragraph1}
              </p>
              
              <p>
                {t.about.paragraph2}
              </p>

              <p>
                {t.about.paragraph3}
              </p>
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="relative pl-4 sm:pl-6 border-l-4 border-blue-600 dark:border-blue-400 py-3 sm:py-4"
            >
              <p className="text-base sm:text-lg md:text-xl italic text-gray-800 dark:text-gray-200">
                "{t.about.quote}"
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.0 }}
              className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 pt-4 sm:pt-6"
            >
              <div className="text-center p-3 sm:p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                <p className="text-blue-600 dark:text-blue-400 mb-1 text-xs sm:text-sm">{t.about.locationLabel}</p>
                <p className="text-gray-900 dark:text-white text-xs sm:text-sm md:text-base">{t.about.location}</p>
              </div>
              <div className="text-center p-3 sm:p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                <p className="text-blue-600 dark:text-blue-400 mb-1 text-xs sm:text-sm">{t.about.specializationLabel}</p>
                <p className="text-gray-900 dark:text-white text-xs sm:text-sm md:text-base">{t.about.specialization}</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
