import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 px-3 py-2.5 sm:px-4 sm:py-3 rounded-full bg-gray-200 dark:bg-white/10 backdrop-blur-md border border-gray-300 dark:border-white/20 hover:bg-gray-300 dark:hover:bg-white/20 transition-all flex items-center gap-1.5 sm:gap-2 shadow-lg touch-manipulation"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle language"
      title={language === "en" ? "Switch to French" : "Switch to English"}
    >
      <span className="text-xs sm:text-sm text-gray-900 dark:text-white">
        {language === "en" ? "🇫🇷 FR" : "🇺🇸 EN"}
      </span>
    </motion.button>
  );
}
