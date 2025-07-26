import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-dark-900 border-t border-dark-700/50">
      <div className="container-max section-padding">
        {/* Main Footer Content */}
        <div className="py-12">
          {/* Slogan Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-primary-500/5 rounded-full blur-3xl"></div>
              </div>
              
              {/* Slogan */}
              <div className="relative z-10">
                <motion.h3
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-2xl md:text-3xl font-bold mb-4"
                >
                  <span className="gradient-text">{t('footer.slogan')}</span>
                </motion.h3>
                
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  whileInView={{ opacity: 1, width: '100px' }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 mb-8"
          >
            {[
              { key: 'about', href: '#about' },
              { key: 'skills', href: '#skills' },
              { key: 'experience', href: '#experience' },
              { key: 'projects', href: '#projects' },
              { key: 'contact', href: '#contact' }
            ].map((item) => (
              <motion.a
                key={item.key}
                href={item.href}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300 font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(item.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {t(`nav.${item.key}`)}
              </motion.a>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center space-x-6 mb-8"
          >
            {[
              { name: 'GitHub', href: 'https://github.com/Landers1037', icon: '🐙' },
              { name: 'LinkedIn', href: 'https://linkedin.com', icon: '💼' },
              { name: 'Twitter', href: 'https://twitter.com', icon: '🐦' },
              { name: 'Email', href: 'mailto:liaorenj@gmail.com', icon: '📧' }
            ].map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="w-12 h-12 bg-dark-800 hover:bg-primary-500/20 border border-dark-700 hover:border-primary-500/50 rounded-full flex items-center justify-center transition-all duration-300 group"
                aria-label={social.name}
              >
                <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-dark-700/50 pt-8 pb-4"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} {t('hero.name')}.</span>
              <span>{t('footer.rights')}</span>
              <Heart size={16} className="text-red-400 animate-pulse" />
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors duration-300 group"
            >
              <span className="text-sm font-medium">回到顶部</span>
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.button>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-primary-400 to-primary-600 opacity-50"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border border-primary-500 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-primary-400 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-primary-600 rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 border border-primary-500 rounded-full"></div>
      </div>
    </footer>
  );
};

export default Footer;