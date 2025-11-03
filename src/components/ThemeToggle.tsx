import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "../contexts/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 sm:p-3 rounded-full bg-gray-200 dark:bg-white/10 backdrop-blur-md border border-gray-300 dark:border-white/20 hover:bg-gray-300 dark:hover:bg-white/20 transition-all shadow-lg touch-manipulation"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
      title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
      ) : (
        <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
      )}
    </motion.button>
  );
}
