import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      company: '华为',
      position: '全栈开发&安全测试工程师',
      location: '东莞',
      period: '2023 - 2024',
      description: '负责华为ICT运营商业务的安全测试工作',
      achievements: [
        '主导多个运营商上面的安全渗透测试工作',
        '设计并开发安全辅助测试平台，快速针对通用场景展开测试',
        '参与云原生安全技术研讨，编写云原生场景安全测试白皮书',
      ],
      technologies: ['Python', 'Vue', 'Docker', 'K8s']
    },
    {
      company: '华为',
      position: '全栈开发工程师',
      location: '武汉',
      period: '2022 - 2023',
      description: '参与低代码平台的重构与推广工作',
      achievements: [
        '开发低代码平台vscode插件支撑数百名开发从vscode生成低代码',
        '优化低代码平台语法树逻辑，完善从JSON到Vue，React的生成适配',
        '推广自主研发中间层抽象语法框架Weml，完成技术栈Vue，React的归一化',
        '参与制定Weml的语法Lint规范'
      ],
      technologies: ['NodeJS', 'React', 'Vue']
    },
    {
      company: '华为',
      position: '开发工程师',
      location: '武汉',
      period: '2021.10 - 2022',
      description: '负责数据库交互中间件和API网关的开发，专注于性能提升。',
      achievements: [
        '优化数据库大批量数据查询性能缓慢问题',
        '优化数据库中间件内存泄露，性能异常问题',
        '完成数据库服务和API网关服务的容器化场景切换'
      ],
      technologies: ['Golang', 'GaussDB', 'Kafka']
    },
    {
      company: '华为',
      position: '初级开发工程师',
      location: '武汉',
      period: '2020.07 - 2021.10',
      description: '参与华为运营商业务网管服务开发工作，学习并掌握了现代前后端开发技术栈。',
      achievements: [
        '完成云化License分发系统的开发和维护',
        '参与后端南向设备侧代理的开发',
        '学习React技术栈结合Febs前端模块化开发',
        '参与团队技术分享和代码评审'
      ],
      technologies: ['JavaScript', 'React', 'Golang', 'GaussDB']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-dark-800/30">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">{t('experience.title')}</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            我的职业发展历程，从初级开发者成长为高级全栈工程师的技术积累之路。
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400 to-primary-600"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-900 z-10"></div>

              {/* Content */}
              <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              }`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="card-dark p-6 group hover:border-primary-500/50 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 text-primary-400 mb-2">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors duration-300">
                      {exp.position}
                    </h3>
                    
                    <div className="flex items-center space-x-4 text-gray-400 text-sm">
                      <div className="flex items-center space-x-1">
                        <Building size={14} />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-primary-400 mb-2">主要成就：</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-400 text-sm flex items-start">
                          <span className="text-primary-400 mr-2 mt-1.5 w-1 h-1 bg-primary-400 rounded-full flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-primary-400 mb-2">技术栈：</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-primary-500/20 text-primary-300 text-xs rounded-md border border-primary-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;