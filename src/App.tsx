import { useEffect } from "react";
import { Toaster } from "./components/ui/sonner";
import { ScrollProgress } from "./components/ScrollProgress";
import { ThemeToggle } from "./components/ThemeToggle";
import { LanguageToggle } from "./components/LanguageToggle";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Expertise } from "./components/Expertise";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

export default function App() {
  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-[#0a1628] transition-colors duration-300">
          <ScrollProgress />
          <ThemeToggle />
          <LanguageToggle />
          
          <main>
            <Hero />
            <About />
            <Expertise />
            <Experience />
            <Skills />
            <Contact />
          </main>

          <Toaster position="bottom-right" />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
