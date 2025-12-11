import React from 'react';

const CTA: React.FC = () => {
    return (
        <section className="px-6 md:px-10 py-20 md:py-24">
            <div className="bg-gray-900 dark:bg-gray-800/50 rounded-xl p-10 md:p-16 text-center border border-transparent dark:border-gray-800">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Ready to transform your business operations?</h2>
                <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">Let's build a smarter, more efficient workflow for your business with Zoho. Get in touch with our experts today.</p>
                <button className="mt-8 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal shadow-lg shadow-primary/30 hover:bg-primary-600 transition-colors mx-auto">
                    <span className="truncate">Get Started Today</span>
                </button>
            </div>
        </section>
    );
};

export default CTA;
