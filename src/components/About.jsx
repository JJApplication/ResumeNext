import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code, Coffee, Heart, Zap } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const highlights = [
    {
      icon: Code,
      title: '5+ 年经验',
      description: '丰富的全栈开发经验'
    },
    {
      icon: Coffee,
      title: '50+ 项目',
      description: '热爱开源项目'
    },
    {
      icon: Heart,
      title: '技术热爱',
      description: '对新技术的持续学习'
    },
    {
      icon: Zap,
      title: '高效执行',
      description: '快速响应和问题解决'
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-dark-800/30">
      <div className="container-max section-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="gradient-text">{t('about.title')}</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            {t('about.description')}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="card-dark p-6 text-center group hover:border-primary-500/50 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-primary-500/20 rounded-full mb-4 group-hover:bg-primary-500/30 transition-colors duration-300"
                >
                  <Icon size={32} className="text-primary-400" />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                  {highlight.title}
                </h3>
                
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {highlight.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;