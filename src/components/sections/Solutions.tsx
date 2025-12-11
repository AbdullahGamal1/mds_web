import React from 'react';

const Solutions: React.FC = () => {
    return (
        <section className="px-6 md:px-10 py-20 md:py-24 bg-gray-50 dark:bg-gray-900/70">
            <div className="pb-12 text-center">
                <h2 className="text-gray-900 dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] md:text-4xl">Solutions Tailored for Business Growth</h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">We focus on outcomes that matter, leveraging Zoho's powerful suite to solve your most pressing business challenges.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex flex-1 gap-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-background-light dark:bg-background-dark p-6 flex-col hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="flex items-center justify-center size-12 rounded-lg bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-300">
                        <span className="material-symbols-outlined !text-3xl">trending_up</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight">Boost Sales Efficiency</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-relaxed">Streamline your sales process from lead to close. We implement and customize Zoho CRM to fit your unique sales funnel, providing insights that drive revenue.</p>
                    </div>
                </div>
                <div className="flex flex-1 gap-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-background-light dark:bg-background-dark p-6 flex-col hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="flex items-center justify-center size-12 rounded-lg bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-300">
                        <span className="material-symbols-outlined !text-3xl">settings_suggest</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight">Automate Business Processes</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-relaxed">Eliminate repetitive tasks and reduce manual error. Our experts build custom workflows and integrations that automate your operations for maximum efficiency.</p>
                    </div>
                </div>
                <div className="flex flex-1 gap-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-background-light dark:bg-background-dark p-6 flex-col hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="flex items-center justify-center size-12 rounded-lg bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-300">
                        <span className="material-symbols-outlined !text-3xl">account_balance_wallet</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight">Gain Financial Control</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-relaxed">Get a clear, real-time view of your company's finances. We configure Zoho Books for seamless accounting, invoicing, and expense tracking.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solutions;
