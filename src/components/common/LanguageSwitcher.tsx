import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const currentLanguage = i18n.language;

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lng;
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Change language"
            >
                <span className="material-symbols-outlined text-xl">language</span>
                <span className="text-sm font-medium uppercase">{currentLanguage}</span>
            </button>

            {isOpen && (
                <div className="absolute top-full mt-2 right-0 bg-white dark:bg-[#1a150d] border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden z-50 min-w-[120px]">
                    <button
                        onClick={() => changeLanguage('en')}
                        className={`w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${currentLanguage === 'en' ? 'bg-primary/10 text-primary font-semibold' : ''
                            }`}
                    >
                        English
                    </button>
                    <button
                        onClick={() => changeLanguage('ar')}
                        className={`w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${currentLanguage === 'ar' ? 'bg-primary/10 text-primary font-semibold' : ''
                            }`}
                    >
                        العربية
                    </button>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
