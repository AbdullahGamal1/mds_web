import React from 'react';
import AnimatedCard from '../animations/AnimatedCard';
import FadeIn from '../animations/FadeIn';
import TestimonialCarousel from '../testimonials/TestimonialCarousel';

const Testimonials: React.FC = () => {
    return (
        <div className="@container px-6 sm:px-10 lg:px-20 py-20 md:py-32 bg-gradient-to-br from-primary/5 to-transparent">
            <div className="flex flex-col gap-12">
                <FadeIn>
                    <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
                        <h2 className="text-gray-900 dark:text-white text-4xl font-extrabold leading-tight tracking-tighter @[520px]:text-5xl">
                            What Our Clients Say
                        </h2>
                        <p className="text-base font-normal leading-relaxed text-gray-600 dark:text-gray-400 @[520px]:text-lg">
                            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
                        </p>
                    </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <TestimonialCarousel />
                </FadeIn>

                {/* Trust Badges */}
                <FadeIn delay={0.4}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-4xl mx-auto">
                        {[
                            { icon: 'verified', label: 'Zoho Certified', value: 'Partner' },
                            { icon: 'groups', label: 'Happy Clients', value: '150+' },
                            { icon: 'workspace_premium', label: 'Success Rate', value: '98%' },
                            { icon: 'support_agent', label: '24/7 Support', value: 'Available' }
                        ].map((badge, index) => (
                            <AnimatedCard key={index} delay={0.5 + index * 0.1}>
                                <div className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                                    <span className="material-symbols-outlined text-4xl text-primary">
                                        {badge.icon}
                                    </span>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                            {badge.value}
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">
                                            {badge.label}
                                        </div>
                                    </div>
                                </div>
                            </AnimatedCard>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default Testimonials;
