import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  zh: {
    translation: {
      // Navigation
      nav: {
        about: '关于我',
        skills: '技能',
        experience: '工作经历',
        projects: '项目经历',
        contact: '联系我'
      },
      // Hero Section
      hero: {
        greeting: '你好，我是',
        name: 'Landers',
        title: '全栈开发工程师',
        description: '专注于现代Web技术栈，拥有丰富的前后端开发经验，热爱技术创新与分享。',
        downloadCV: '下载简历',
        contactMe: '联系我'
      },
      // About Section
      about: {
        title: '关于我',
        description: '一名全栈开发工程师，拥有5年以上的开发经验。擅长使用现代技术栈构建高质量的Web应用程序，注重用户体验和代码质量。'
      },
      // Skills Section
      skills: {
        title: '技术栈',
        frontend: '前端技术',
        backend: '后端技术',
        database: '数据库',
        tools: '开发工具'
      },
      // Experience Section
      experience: {
        title: '工作经历',
        present: '至今',
        company: '公司',
        position: '职位'
      },
      // Projects Section
      projects: {
        title: '项目经历',
        viewDemo: '查看演示',
        viewCode: '查看代码',
        github: 'GitHub项目',
        work: '工作项目'
      },
      // Contact Section
      contact: {
        title: '联系我',
        email: '邮箱',
        phone: '电话',
        location: '位置',
        social: '社交媒体'
      },
      // Footer
      footer: {
        slogan: '须知少时凌云志 曾许人间第一流',
        rights: '版权所有'
      }
    }
  },
  en: {
    translation: {
      // Navigation
      nav: {
        about: 'About',
        skills: 'Skills',
        experience: 'Experience',
        projects: 'Projects',
        contact: 'Contact'
      },
      // Hero Section
      hero: {
        greeting: 'Hello, I am',
        name: 'Landers',
        title: 'Full Stack Developer',
        description: 'Focused on modern web technology stack with rich experience in front-end and back-end development, passionate about technology innovation and sharing.',
        downloadCV: 'Download CV',
        contactMe: 'Contact Me'
      },
      // About Section
      about: {
        title: 'About Me',
        description: 'I am a passionate full-stack developer with over 5 years of development experience. Skilled in building high-quality web applications using modern technology stacks, with a focus on user experience and code quality.'
      },
      // Skills Section
      skills: {
        title: 'Tech Stack',
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Database',
        tools: 'Tools'
      },
      // Experience Section
      experience: {
        title: 'Work Experience',
        present: 'Present',
        company: 'Company',
        position: 'Position'
      },
      // Projects Section
      projects: {
        title: 'Projects',
        viewDemo: 'View Demo',
        viewCode: 'View Code',
        github: 'GitHub Projects',
        work: 'Work Projects'
      },
      // Contact Section
      contact: {
        title: 'Contact Me',
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
        social: 'Social Media'
      },
      // Footer
      footer: {
        slogan: 'Know that young ambitions once promised to be the best in the world',
        rights: 'All rights reserved'
      }
    }
  },
  ja: {
    translation: {
      // Navigation
      nav: {
        about: '私について',
        skills: 'スキル',
        experience: '職歴',
        projects: 'プロジェクト',
        contact: 'お問い合わせ'
      },
      // Hero Section
      hero: {
        greeting: 'こんにちは、私は',
        name: 'Landers',
        title: 'フルスタック開発者',
        description: 'モダンなWebテクノロジースタックに焦点を当て、フロントエンドとバックエンドの豊富な開発経験を持ち、技術革新と共有に情熱を注いでいます。',
        downloadCV: '履歴書をダウンロード',
        contactMe: 'お問い合わせ'
      },
      // About Section
      about: {
        title: '私について',
        description: '私は5年以上の開発経験を持つ情熱的なフルスタック開発者です。モダンなテクノロジースタックを使用して高品質なWebアプリケーションを構築することに長けており、ユーザーエクスペリエンスとコード品質に重点を置いています。'
      },
      // Skills Section
      skills: {
        title: '技術スタック',
        frontend: 'フロントエンド',
        backend: 'バックエンド',
        database: 'データベース',
        tools: '開発ツール'
      },
      // Experience Section
      experience: {
        title: '職歴',
        present: '現在',
        company: '会社',
        position: '職位'
      },
      // Projects Section
      projects: {
        title: 'プロジェクト',
        viewDemo: 'デモを見る',
        viewCode: 'コードを見る',
        github: 'GitHubプロジェクト',
        work: '仕事のプロジェクト'
      },
      // Contact Section
      contact: {
        title: 'お問い合わせ',
        email: 'メール',
        phone: '電話',
        location: '場所',
        social: 'ソーシャルメディア'
      },
      // Footer
      footer: {
        slogan: '少年の頃の大志を知り、かつて人間世界で一流になることを約束した',
        rights: '全著作権所有'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'zh',
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;