import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="px-6 md:px-10 py-20 md:py-32">
            <div className="@container">
                <div className="flex flex-col gap-12 @[864px]:flex-row @[864px]:items-center">
                    <div className="flex flex-col gap-8 w-full @[864px]:w-1/2">
                        <div className="flex flex-col gap-4 text-left">
                            <p className="text-sm font-bold text-primary uppercase tracking-widest">ZOHO CERTIFIED PARTNER</p>
                            <h1 className="text-gray-900 dark:text-white text-4xl font-extrabold leading-tight tracking-[-0.03em] @[480px]:text-5xl @[864px]:text-6xl">Unlock Your Business Potential with a Zoho Certified Partner</h1>
                            <h2 className="text-base font-normal leading-relaxed text-gray-600 dark:text-gray-400 @[480px]:text-lg">We design and implement custom Zoho solutions to streamline your sales, automate operations, and provide clear financial insights.</h2>
                        </div>
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center self-start overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal shadow-lg shadow-primary/30 hover:bg-primary-600 transition-colors">
                            <span className="truncate">Schedule a Free Consultation</span>
                        </button>
                    </div>
                    <div className="w-full @[864px]:w-1/2">
                        <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl" data-alt="Team collaborating on a project dashboard" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCUjc7qwsuwiVILlYFKwWdzhFoGWqF7msc9YHZJK9uegMT12H_Q0E6A5-BUA-HY0ewJ6MDQ_B8jp010u81bWCh1X1fO9qFgNLeDmzRigiDAtUs32P2kz1Afx3VdNxhKBMtdYO6J6Ew_InulGkqojeoAcD2v5jP9u0aHGGf38vlZDyI9isn5hXnZrh4Ag8Y6QTq-gmkpefJ3JBrPO09WfVIU_E8akvy4RRWtfMXo4JZWd4GNzlMtdskTROvaYDpQNsq7N0TB-d3zQOA")' }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
