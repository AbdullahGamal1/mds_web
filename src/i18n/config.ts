import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
    en: {
        translation: {
            // Navigation
            nav: {
                services: 'Services',
                caseStudies: 'Case Studies',
                about: 'About Us',
                contact: 'Contact Us',
                getQuote: 'Get a Quote',
                blog: 'Blog',
                faq: 'FAQ'
            },
            // Hero Section
            hero: {
                badge: 'ZOHO CERTIFIED PARTNER',
                title: 'Unlock Your Business Potential with a Zoho Certified Partner',
                subtitle: 'We design and implement custom Zoho solutions to streamline your sales, automate operations, and provide clear financial insights.',
                cta: 'Schedule a Free Consultation'
            },
            // Common
            common: {
                readMore: 'Read More',
                learnMore: 'Learn More',
                contactUs: 'Contact Us',
                loading: 'Loading...',
                search: 'Search',
                filter: 'Filter',
                all: 'All',
                categories: 'Categories'
            },
            // Footer
            footer: {
                description: 'Zoho Certified Partner providing custom CRM, ERP, and digital transformation solutions.',
                quickLinks: 'Quick Links',
                contact: 'Contact Information',
                followUs: 'Follow Us',
                newsletter: 'Subscribe to Newsletter',
                emailPlaceholder: 'Enter your email',
                subscribe: 'Subscribe',
                copyright: '© 2025 Mashreq Digital Solutions. All rights reserved.',
                address: 'B115 Smart Village, Giza, Egypt',
                phone: '+20-115 965 9977',
                email: 'info@mds-solutions.com'
            }
        }
    },
    ar: {
        translation: {
            // Navigation
            nav: {
                services: 'الخدمات',
                caseStudies: 'دراسات الحالة',
                about: 'من نحن',
                contact: 'اتصل بنا',
                getQuote: 'احصل على عرض سعر',
                blog: 'المدونة',
                faq: 'الأسئلة الشائعة'
            },
            // Hero Section
            hero: {
                badge: 'شريك زوهو المعتمد',
                title: 'أطلق العنان لإمكانات عملك مع شريك زوهو المعتمد',
                subtitle: 'نصمم وننفذ حلول زوهو المخصصة لتبسيط مبيعاتك، وأتمتة العمليات، وتوفير رؤى مالية واضحة.',
                cta: 'احجز استشارة مجانية'
            },
            // Common
            common: {
                readMore: 'اقرأ المزيد',
                learnMore: 'تعلم المزيد',
                contactUs: 'اتصل بنا',
                loading: 'جاري التحميل...',
                search: 'بحث',
                filter: 'تصفية',
                all: 'الكل',
                categories: 'الفئات'
            },
            // Footer
            footer: {
                description: 'شريك زوهو المعتمد يقدم حلول CRM و ERP والتحول الرقمي المخصصة.',
                quickLinks: 'روابط سريعة',
                contact: 'معلومات الاتصال',
                followUs: 'تابعنا',
                newsletter: 'اشترك في النشرة الإخبارية',
                emailPlaceholder: 'أدخل بريدك الإلكتروني',
                subscribe: 'اشترك',
                copyright: '© 2025 مشرق للحلول الرقمية. جميع الحقوق محفوظة.',
                address: 'B115 القرية الذكية، الجيزة، مصر',
                phone: '+20-115 965 9977',
                email: 'info@mds-solutions.com'
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        debug: false,
        interpolation: {
            escapeValue: false
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage']
        }
    });

export default i18n;
