import React from 'react';

const Process: React.FC = () => {
    return (
        <section className="px-6 md:px-10 py-20 md:py-24">
            <div className="pb-12 text-center">
                <h2 className="text-gray-900 dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] md:text-4xl">Our Proven Process</h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">We follow a structured approach to ensure your Zoho implementation is a success from start to finish.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
                <div className="hidden md:block absolute top-10 left-0 w-full h-px -translate-y-1/2">
                    <svg className="text-gray-200 dark:text-gray-800" height="2" width="100%">
                        <line stroke="currentColor" strokeDasharray="8 8" strokeWidth="2" x1="0" x2="100%" y1="1" y2="1"></line>
                    </svg>
                </div>
                <div className="relative flex flex-col items-center text-center p-4">
                    <div className="flex items-center justify-center size-20 rounded-full bg-primary-100 dark:bg-primary-900/50 border-4 border-background-light dark:border-background-dark text-primary-600 dark:text-primary-300 mb-6 z-10">
                        <span className="font-bold text-3xl">1</span>
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Discovery & Strategy</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">We start by understanding your unique business goals, challenges, and existing processes.</p>
                </div>
                <div className="relative flex flex-col items-center text-center p-4">
                    <div className="flex items-center justify-center size-20 rounded-full bg-primary-100 dark:bg-primary-900/50 border-4 border-background-light dark:border-background-dark text-primary-600 dark:text-primary-300 mb-6 z-10">
                        <span className="font-bold text-3xl">2</span>
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Custom Implementation</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Our certified experts configure, customize, and deploy your Zoho applications for a perfect fit.</p>
                </div>
                <div className="relative flex flex-col items-center text-center p-4">
                    <div className="flex items-center justify-center size-20 rounded-full bg-primary-100 dark:bg-primary-900/50 border-4 border-background-light dark:border-background-dark text-primary-600 dark:text-primary-300 mb-6 z-10">
                        <span className="font-bold text-3xl">3</span>
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Training & Support</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">We empower your team with comprehensive training and provide ongoing support to ensure long-term success.</p>
                </div>
            </div>
        </section>
    );
};

export default Process;
