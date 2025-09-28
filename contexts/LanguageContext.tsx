'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 翻译数据
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.blog': 'Blog',
    'nav.download': 'Download Now',
    
    // Hero Section
    'hero.title': 'One-Click Receipt Capture,\nStress-Free Tax Filing',
    'hero.subtitle': 'DeductDD — Smart receipt and expense management assistant designed for 1099 self-employed individuals. Capture receipts to automatically generate records, annual serial numbers, support Excel/PDF/CSV export, and receipts can be packaged as ZIP.',
    'hero.note': '* Currently open for iOS applications, Android version in preparation',
    
    // Core Features
    'features.title': 'Core Features',
    'features.subtitle': 'Covering the entire tax filing process with "receipt capture + serial numbers + export" as core capabilities.',
    'features.photo.title': 'One-Click Receipt Photography',
    'features.photo.desc': 'Capture receipts to generate records and bind serial numbers; photo-only mode also automatically creates placeholder records.',
    'features.serial.title': 'Annual Unified Serial Numbers',
    'features.serial.desc': 'YYYY-00001 standard numbering to avoid duplication and omission, convenient for audit reconciliation.',
    'features.export.title': 'Excel/PDF/CSV Export',
    'features.export.desc': 'One-click export for accountants or IRS filing, with clear and traceable records.',
    'features.zip.title': 'Receipt ZIP Packaging',
    'features.zip.desc': 'Automatically collect all receipts from selected years and package as ZIP, including README instructions.',
    
    // Pain Points
    'pain.title': 'Common Pain Points, We Solve Them',
    'pain.messy.title': 'Receipts Too Messy?',
    'pain.messy.desc': 'Photo storage with automatic archiving, bidirectional linking between photos and records.',
    'pain.tax.title': 'Tax Filing Too Hard?',
    'pain.tax.desc': 'Unified serial numbers + multi-format export, structured and clear.',
    'pain.entry.title': 'Data Entry Inefficient?',
    'pain.entry.desc': 'Smart sorting of historical suggestions, one-click input of common fields.',
    
    // Security
    'security.title': 'Security & Local First',
    'security.subtitle': 'Data is saved locally by default, can be exported to iCloud/local files as needed.',
    'security.desc': 'We value your data privacy and security, data only leaves your device when you actively export.',
    
    // CTA
    'cta.title': 'Download DeductDD Now',
    'cta.subtitle': 'Make tax filing easier, starting now',
    'cta.desc': 'Capture receipts, manage records, generate reports - all in one solution.',
    'cta.contact': 'Contact & Collaboration:',
    
    // Additional Features
    'additional.title': 'Additional Features',
    'additional.subtitle': 'More practical functions to make expense management more convenient.',
    'additional.security.title': 'Data Security',
    'additional.security.desc': 'Local storage, privacy protection, data belongs to you.',
    'additional.sync.title': 'Cloud Sync',
    'additional.sync.desc': 'Multi-device synchronization, access anytime, anywhere.',
    'additional.backup.title': 'Automatic Backup',
    'additional.backup.desc': 'Regular automatic backup to prevent data loss.',
    'additional.search.title': 'Smart Search',
    'additional.search.desc': 'Quickly find receipts by date, amount, or merchant.',
    
    // Footer
    'footer.product': 'Product',
    'footer.features': 'Features',
    'footer.download': 'Download',
    'footer.support': 'Support',
    'footer.help': 'Help Center',
    'footer.contact': 'Contact Us',
    'footer.company': 'Company',
    'footer.about': 'About Us',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.copyright': '© 2024 DeductDD. All rights reserved.',
    
    // Download Buttons
    'download.ios': 'Download for iOS',
    'download.android': 'Download for Android',
    'download.coming': 'Coming Soon',
    
    // Pages
    'page.features.title': 'Features',
    'page.features.description': 'Discover all the powerful features of DeductDD.',
    'page.blog.title': 'Blog',
    'page.blog.description': 'Latest news and tips about expense management.',
    'page.faq.title': 'FAQ',
    'page.faq.description': 'Frequently asked questions about DeductDD.',
  },
  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.features': '功能',
    'nav.blog': '博客',
    'nav.download': '立即下载',
    
    // Hero Section
    'hero.title': '一键拍收据，\n轻松报税无忧',
    'hero.subtitle': 'DeductDD — 专为 1099 自雇人士打造的智能收据与费用管理助手。拍收据自动生成记录，年度流水号，支持 Excel / PDF / CSV 导出，收据还能打包 ZIP。',
    'hero.note': '* 目前开放 iOS 申请，Android 版本准备中',
    
    // Core Features
    'features.title': '核心卖点',
    'features.subtitle': '以"拍收据 + 流水号 + 导出"为核心能力，覆盖报税全流程。',
    'features.photo.title': '一键收据拍照',
    'features.photo.desc': '拍下收据即生成记录并绑定流水号；仅拍照也会自动创建占位记录。',
    'features.serial.title': '年度统一流水号',
    'features.serial.desc': 'YYYY-00001 规范编号，避免重复与遗漏，便于稽核对账。',
    'features.export.title': 'Excel/PDF/CSV 导出',
    'features.export.desc': '一键导出给会计师或 IRS 申报，记录清晰可追溯。',
    'features.zip.title': '收据 ZIP 打包',
    'features.zip.desc': '自动收集所选年份的所有收据并打包为 ZIP，含 README 说明。',
    
    // Pain Points
    'pain.title': '常见痛点，我们来解决',
    'pain.messy.title': '收据太乱？',
    'pain.messy.desc': '拍照即存自动归档，照片与记录双向关联。',
    'pain.tax.title': '报税太难？',
    'pain.tax.desc': '统一流水号 + 多格式导出，结构化清晰。',
    'pain.entry.title': '录入低效？',
    'pain.entry.desc': '历史建议智能排序，常用字段一键带入。',
    
    // Security
    'security.title': '安全与本地优先',
    'security.subtitle': '数据默认保存在本地，可按需导出至 iCloud/本地文件。',
    'security.desc': '我们重视您的数据隐私与安全，仅在您主动导出时才会离开设备。',
    
    // CTA
    'cta.title': '立即下载 DeductDD',
    'cta.subtitle': '让报税更轻松，从现在开始',
    'cta.desc': '拍收据、管流水、出报表，一站式搞定。',
    'cta.contact': '沟通合作：',
    
    // Additional Features
    'additional.title': '更多功能',
    'additional.subtitle': '更多实用功能，让费用管理更便捷。',
    'additional.security.title': '数据安全',
    'additional.security.desc': '本地存储，隐私保护，数据属于您。',
    'additional.sync.title': '云端同步',
    'additional.sync.desc': '多设备同步，随时随地访问。',
    'additional.backup.title': '自动备份',
    'additional.backup.desc': '定期自动备份，防止数据丢失。',
    'additional.search.title': '智能搜索',
    'additional.search.desc': '按日期、金额或商家快速查找收据。',
    
    // Footer
    'footer.product': '产品',
    'footer.features': '功能特色',
    'footer.download': '下载应用',
    'footer.support': '支持',
    'footer.help': '帮助中心',
    'footer.contact': '联系我们',
    'footer.company': '公司',
    'footer.about': '关于我们',
    'footer.privacy': '隐私政策',
    'footer.terms': '服务条款',
    'footer.copyright': '© 2024 DeductDD. 保留所有权利。',
    
    // Download Buttons
    'download.ios': 'iOS 下载',
    'download.android': 'Android 下载',
    'download.coming': '即将推出',
    
    // Pages
    'page.features.title': '功能特色',
    'page.features.description': '探索 DeductDD 的所有强大功能。',
    'page.blog.title': '博客',
    'page.blog.description': '关于费用管理的最新资讯和技巧。',
    'page.faq.title': '常见问题',
    'page.faq.description': '关于 DeductDD 的常见问题解答。',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  // 从 localStorage 加载语言设置
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'zh')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // 保存语言设置到 localStorage
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  // 翻译函数
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}