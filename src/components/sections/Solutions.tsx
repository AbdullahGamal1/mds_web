import React from 'react';
import AnimatedCard from '../animations/AnimatedCard';
import FadeIn from '../animations/FadeIn';

const Solutions: React.FC = () => {
    const solutions = [
        {
            icon: 'analytics',
            title: 'CRM Implementation',
            description: 'Streamline your sales pipeline with custom Zoho CRM setup tailored to your business needs.',
            features: ['Lead Management', 'Sales Automation', 'Custom Workflows']
        },
        {
            icon: 'account_balance',
            title: 'ERP Solutions',
            description: 'Integrate all your business processes with comprehensive Zoho ERP implementation.',
            features: ['Financial Management', 'Inventory Control', 'Procurement']
        },
        {
            icon: 'integration_instructions',
            title: 'Custom Integration',
            description: 'Connect Zoho with your existing tools and third-party applications seamlessly.',
            features: ['API Integration', 'Data Migration', 'System Sync']
        },
        {
            icon: 'support_agent',
            title: 'Training and Support',
            description: 'Comprehensive training programs and ongoing support to ensure your team\'s success.',
            features: ['User Training', '24/7 Support', 'Documentation']
        }
    ];

    return (
        <div className="@container px-6 sm:px-10 lg:px-20 py-20 md:py-32">
            <div className="flex flex-col gap-12">
                <FadeIn>
                    <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
                        <h2 className="text-gray-900 dark:text-white text-4xl font-extrabold leading-tight tracking-tighter @[520px]:text-5xl">
                            Our Zoho Solutions
                        </h2>
                        <p className="text-base font-normal leading-relaxed text-gray-600 dark:text-gray-400 @[520px]:text-lg">
                            Comprehensive Zoho services designed to transform your business operations and drive growth.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {solutions.map((solution, index) => (
                        <AnimatedCard key={index} delay={index * 0.1}>
                            <div className="flex flex-col gap-4 p-6 lg:p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 h-full hover:border-primary transition-colors">
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-3xl text-primary">
                                        {solution.icon}
                                    </span>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h3 className="text-gray-900 dark:text-white text-2xl font-bold">
                                        {solution.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                                        {solution.description}
                                    </p>
                                </div>

                                <ul className="flex flex-col gap-2 mt-2">
                                    {solution.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                            <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Solutions;
