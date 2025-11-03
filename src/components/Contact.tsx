import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, Youtube, Send, MapPin } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { useLanguage } from "../contexts/LanguageContext";
import emailjs from "emailjs-com";

export function Contact() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  };

  emailjs
    .send(
      "service_dipj95f",   // replace
      "template_sig1m3d",  // replace
      templateParams,
      "kNfwRujr3ETwT6fAW"    // replace
    )
    .then(
      () => {
        toast.success(t.contact.successMessage || "✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        console.error("EmailJS Error:", error);
        toast.error("❌ Failed to send message. Please try again.");
      }
    );
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-blue-600" },
    { icon: Github, label: "GitHub", href: "#", color: "hover:text-gray-800 dark:hover:text-gray-200" },
    { icon: Youtube, label: "YouTube", href: "#", color: "hover:text-red-600" },
    { icon: Mail, label: "Email", href: "mailto:hilkija@example.com", color: "hover:text-blue-500" }
  ];

  return (
    <section id="contact" className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-[#0a1628] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 dark:from-blue-950/20 via-transparent to-purple-50 dark:to-purple-950/20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <p className="text-xs sm:text-sm uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            {t.contact.badge}
          </p>
          <h2 className="text-gray-900 dark:text-white mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            {t.contact.title} <span className="text-gradient">{t.contact.titleHighlight}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-sm sm:text-base px-4">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-gray-900 dark:text-white mb-4 sm:mb-6 text-lg sm:text-xl md:text-2xl">
                {t.contact.contactInfo}
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                {/* Location */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-blue-100 dark:bg-blue-950/50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white mb-1 text-sm sm:text-base">{t.contact.locationLabel}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">{t.contact.location}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-blue-100 dark:bg-blue-950/50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white mb-1 text-sm sm:text-base">{t.contact.emailLabel}</p>
                    <a href="mailto:hilkija@example.com" className="text-blue-600 dark:text-blue-400 hover:underline text-xs sm:text-sm">
                      hilkija@example.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-gray-900 dark:text-white mb-3 sm:mb-4 text-base sm:text-lg">
                {t.contact.socialTitle}
              </h4>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-gray-600 dark:text-gray-400 ${link.color} transition-all touch-manipulation`}
                    aria-label={link.label}
                  >
                    <link.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="p-4 sm:p-5 md:p-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl sm:rounded-2xl text-white"
            >
              <p className="text-xs sm:text-sm italic mb-2">
                "{t.contact.quote}"
              </p>
              <p className="text-[10px] sm:text-xs text-blue-200">
                {t.contact.quoteAuthor}
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm mb-2 text-gray-700 dark:text-gray-300">
                  {t.contact.formName}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-50 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-700 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white transition-all text-sm sm:text-base"
                  placeholder={t.contact.formNamePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm mb-2 text-gray-700 dark:text-gray-300">
                  {t.contact.formEmail}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-50 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-700 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white transition-all text-sm sm:text-base"
                  placeholder={t.contact.formEmailPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm mb-2 text-gray-700 dark:text-gray-300">
                  {t.contact.formMessage}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-50 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-700 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white resize-none transition-all text-sm sm:text-base"
                  placeholder={t.contact.formMessagePlaceholder}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg sm:rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/50 transition-all text-sm sm:text-base touch-manipulation"
              >
                {t.contact.sendButton}
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 sm:mt-20 md:mt-24 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800 text-center"
        >
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            {t.contact.footerCopyright}
          </p>
          <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500 mt-2">
            {t.contact.footerTagline}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
