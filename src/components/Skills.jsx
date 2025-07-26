import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Skills = () => {
  const { t } = useTranslation();
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { 
      name: 'React', 
      category: 'Frontend',
      icon: '⚛️',
      gradient: 'from-blue-400 via-blue-500 to-cyan-500',
      description: '构建现代化用户界面'
    },
    { 
      name: 'Vue3', 
      category: 'Frontend',
      icon: '💚',
      gradient: 'from-green-400 via-emerald-500 to-teal-500',
      description: '渐进式JavaScript框架'
    },
    { 
      name: 'Node.js', 
      category: 'Backend',
      icon: '🟢',
      gradient: 'from-green-400 via-emerald-500 to-teal-500',
      description: '服务端JavaScript运行时'
    },
    { 
      name: 'Golang', 
      category: 'Language',
      icon: '🐹',
      gradient: 'from-cyan-400 via-blue-500 to-indigo-500',
      description: '高性能并发编程语言'
    },
    { 
      name: 'MongoDB', 
      category: 'Database',
      icon: '🍃',
      gradient: 'from-green-500 via-teal-500 to-cyan-500',
      description: 'NoSQL文档数据库'
    },
    { 
      name: 'Docker', 
      category: 'DevOps',
      icon: '🐳',
      gradient: 'from-blue-400 via-sky-500 to-indigo-500',
      description: '容器化部署解决方案'
    },
    { 
      name: 'Rust', 
      category: 'Language',
      icon: '🦀',
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      description: '内存安全的系统编程语言'
    },
    { 
      name: 'Python', 
      category: 'Language',
      icon: '🐍',
      gradient: 'from-yellow-400 via-orange-500 to-red-500',
      description: '数据科学与后端开发'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">{t('skills.title')}</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            精通现代化技术栈，专注于构建高性能、可扩展的全栈应用
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={skillVariants}
              className="group relative"
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <motion.div
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: `${index * 0.2}s` }}
                className="relative"
              >
                {/* Skill Card */}
                <div className="relative p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-dark-800/80 to-dark-900/80 backdrop-blur-sm border border-dark-700/50 hover:border-primary-500/50 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-primary-500/20">
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
                  
                  {/* Icon */}
                  <div className="relative z-10 text-center">
                    <div className="text-4xl lg:text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    
                    {/* Skill Name */}
                    <h3 className="text-lg lg:text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-cyan-400 transition-all duration-300">
                      {skill.name}
                    </h3>
                    
                    {/* Category */}
                    <div className="text-sm text-gray-400 mb-3 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                      {skill.category}
                    </div>
                    
                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-2xl">
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} style={{
                        background: `conic-gradient(from 0deg, transparent, ${skill.gradient.split(' ')[1]}, transparent)`,
                        padding: '2px',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'exclude'
                      }}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <div className="relative p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-dark-800/50 to-dark-900/50 backdrop-blur-sm border border-dark-700/50 max-w-4xl mx-auto overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #06b6d4 0%, transparent 50%)`
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-8">
                <span className="gradient-text">技术理念</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-cyan-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl">💎</span>
                    </div>
                    <h4 className="text-xl font-semibold text-primary-400">代码质量</h4>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    坚持编写清晰、可维护的代码，遵循最佳实践和设计模式，注重代码的可读性和可扩展性。
                  </p>
                </div>
                <div className="group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl">⚡</span>
                    </div>
                    <h4 className="text-xl font-semibold text-emerald-400">性能优化</h4>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    关注应用性能，从前端渲染优化到后端查询优化，确保用户体验的流畅性和系统的高效运行。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;