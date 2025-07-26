import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Github } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: Mail,
      label: '邮箱',
      value: 'liaorenj@gmail.com',
      href: 'mailto:liaorenj@gmail.com'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Landers1037',
      href: 'https://github.com/Landers1037',
    }
  ];



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-dark-800/30">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">{t('contact.title')}</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            如果您对我的技能和经验感兴趣，或者有任何合作机会，欢迎与我联系。
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-2xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="group block"
                  >
                    <div className="relative p-8 rounded-2xl bg-gradient-to-br from-dark-800/80 to-dark-900/80 backdrop-blur-sm border border-dark-700/50 hover:border-primary-500/50 transition-all duration-500 overflow-hidden">
                      {/* Background Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Icon */}
                      <div className="relative z-10 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-primary-500/20 to-cyan-500/20 group-hover:from-primary-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                          <Icon size={32} className="text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-cyan-400 transition-all duration-300">
                          {info.label}
                        </h3>
                        
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 break-all">
                          {info.value}
                        </p>
                      </div>
                      
                      {/* Animated Border */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500 to-cyan-500" style={{
                          background: 'conic-gradient(from 0deg, transparent, #3b82f6, transparent)',
                          padding: '2px',
                          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                          WebkitMaskComposite: 'exclude'
                        }}></div>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12"
            >
              <p className="text-lg text-gray-400 leading-relaxed">
                欢迎通过以上方式与我联系，期待与您的交流合作！
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;