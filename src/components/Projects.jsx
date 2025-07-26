import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, Code, Briefcase } from 'lucide-react';

const Projects = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('work');

  const workProjects = [
    {
      title: 'License分发平台',
      description: '基于国密ALM的License分发平台。',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Nginx', 'Golang', 'Python'],
      features: [
        '支持万级网元单位设备分发申请',
        '实现分布式事务处理',
        '多特性分发，支持试用，超期使用，自动刷新',
      ],
      codeUrl: null,
    },
    {
      title: 'UIStudio低代码平台',
      description: '内部低代码前端开发平台',
      image: '/api/placeholder/400/250',
      technologies: ['NodeJS', 'React', 'Vue'],
      features: [
        '实时拖拽预览生成组件',
        '基于文档数据库高效比对数据实时渲染',
        '支持Web开发和VsCode插件',
        '支持自定义Lint语法检查'
      ],
      codeUrl: null,
    }
  ];

  const githubProjects = [
    {
      title: 'Blogo',
      description: 'Markdown驱动的支持模板语法的动态博客生成器',
      image: '/api/placeholder/400/250',
      technologies: ['Vue', 'Golang', 'MySQL', 'Sqlite'],
      features: [
        '原生Markdown语法支持',
        '支持在线编辑，在线预览，数据统计，评论管理，权限认证',
        '主题定制系统',
        '完整的文档和示例'
      ],
      demoUrl: 'https://blog.renj.io',
      codeUrl: 'https://github.com/Landers1037/Blog',
      stars: 2,
      forks: 0
    },
    {
      title: 'ImgHOST',
      description: '轻量级Web图床',
      image: '/api/placeholder/400/250',
      technologies: ['Javascript', 'Python', 'Flask'],
      features: [
        '用户认证系统',
        '图片上传，下载，外链生成',
        '防盗链设计',
        '响应式设计'
      ],
      demoUrl: 'https://github.com/Landers1037/mgekimghost',
      codeUrl: 'https://github.com/Landers1037/mgekimghost',
      stars: 8,
      forks: 0
    },
    {
      title: 'Zip',
      description: '符合zip64规范的创建带AES256保护的zip库',
      image: '/api/placeholder/400/250',
      technologies: ['Golang'],
      features: [
        '高性能解压和压缩zip',
        'AES256加密支持',
        'zip和zip64支持'
      ],
      demoUrl: 'https://github.com/Landers1037/zip',
      codeUrl: 'https://github.com/Landers1037/zip',
      stars: 0,
      forks: 0
    },
    {
      title: 'Apollo',
      description: '基于Fushin框架的微服务群组管理平台',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Websocket', 'Golang', 'MongoDB', 'GRPC', 'Docker'],
      features: [
        '基于微服务元数据自动发现',
        '微服务生命周期管理',
        '环境变量控制，远程管理，日志管理，任务管理',
        '支持传统认证和OAuth2.0',
      ],
      demoUrl: 'https://chat.example.com',
      codeUrl: 'https://github.com/username/realtime-chat',
      stars: 0,
      forks: 0
    }
  ];

  const tabs = [
    { id: 'work', label: t('projects.work'), icon: Briefcase },
    { id: 'github', label: t('projects.github'), icon: Github }
  ];

  const currentProjects = activeTab === 'work' ? workProjects : githubProjects;

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
    <section id="projects" className="py-20">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">{t('projects.title')}</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            展示我在工作中参与的项目以及个人开源项目，体现我的技术能力和创新思维。
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="card-dark p-2 flex space-x-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-primary-500 text-white'
                      : 'text-gray-400 hover:text-primary-400 hover:bg-dark-700/50'
                  }`}
                >
                  <Icon size={20} />
                  <span>{tab.label}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {currentProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="card-dark overflow-hidden group hover:border-primary-500/50 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden bg-dark-700 h-48">
                  <div className="w-full h-full bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center">
                    <Code size={48} className="text-primary-400" />
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {project.demoUrl && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-primary-500 rounded-full text-white hover:bg-primary-600 transition-colors duration-300"
                      >
                        <Eye size={20} />
                      </motion.a>
                    )}
                    {project.codeUrl && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-dark-600 rounded-full text-white hover:bg-dark-500 transition-colors duration-300"
                      >
                        <Github size={20} />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    {activeTab === 'github' && (
                      <div className="flex items-center space-x-3 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <span>⭐</span>
                          <span>{project.stars}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span>🍴</span>
                          <span>{project.forks}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-primary-400 mb-2">主要功能：</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-400 text-sm flex items-start">
                          <span className="text-primary-400 mr-2 mt-1.5 w-1 h-1 bg-primary-400 rounded-full flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-primary-500/20 text-primary-300 text-xs rounded-md border border-primary-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors duration-300"
                      >
                        <ExternalLink size={16} />
                        <span>{t('projects.viewDemo')}</span>
                      </motion.a>
                    )}
                    {project.codeUrl && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 border border-gray-600 hover:border-primary-500 text-gray-300 hover:text-primary-400 text-sm rounded-lg transition-all duration-300"
                      >
                        <Github size={16} />
                        <span>{t('projects.viewCode')}</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;