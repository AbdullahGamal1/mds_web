import React, { useEffect, useState } from 'react';
import api from '../services/api';

interface Testimonial {
    id: string;
    name: string;
    position: string;
    company: string;
    content: string;
    image?: string;
    featured: boolean;
}

const TestimonialsPage: React.FC = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTestimonials();
    }, []);

    const fetchTestimonials = async () => {
        try {
            const response = await api.get('/testimonials?featured=true');
            setTestimonials(response.data.testimonials);
        } catch (error) {
            console.error('Error fetching testimonials:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex-grow">
            <div className="@container">
                <div className="py-16 md:py-24">
                    <div className="flex min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 items-center justify-center text-center p-4" data-alt="Abstract orange and white geometric pattern background" style={{ backgroundImage: 'linear-gradient(rgba(26, 21, 16, 0.6) 0%, rgba(26, 21, 16, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAhPfx-0V34ywpq24H0HZVqRp4zSyDatIBKl0TFm_MWQpWZDWn4O_VecB-M8_yHiHHVYHSTaTNvkyUMSzq93snecB1lNA5bITXRLpTLOMrU6FUPrJR-xx26ZcIHus_g5dhq_iknS3CeS9axPTph2E8yYsSsP-REuclwOKU4GjtdnxLugy1zD4maKySm5zlLaTDByaj3zLfhi-ZqyFf7YRLFN8IfVtgbqZYl8QHUKByzKVdGQa0xenXFFpCSXSL3v-aYHCW9BzFvyCk")' }}>
                        <div className="flex flex-col gap-2 max-w-3xl">
                            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl">Success Stories Our Clients Tell</h1>
                            <p className="text-gray-200 text-base font-normal leading-normal md:text-lg">See how we empower businesses with tailored Zoho solutions.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <h2 className="text-[#111811] dark:text-white text-2xl md:text-3xl font-bold leading-tight tracking-tight text-center">What Our Clients Say</h2>

                {loading ? (
                    <div className="text-center py-12">Loading testimonials...</div>
                ) : testimonials.length === 0 ? (
                    <div className="text-center py-12 text-gray-500">No testimonials yet.</div>
                ) : (
                    <div className="mt-12 space-y-12">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                                <blockquote className="text-center">
                                    <p className="text-xl md:text-2xl font-medium leading-relaxed italic text-[#111811] dark:text-gray-200">"{testimonial.content}"</p>
                                    <footer className="mt-4 text-base font-bold text-[#111811] dark:text-white">
                                        - {testimonial.name}, {testimonial.position} at {testimonial.company}
                                    </footer>
                                </blockquote>
                            </div>
                        ))}
                    </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 text-center mt-20">
                    <div className="bg-white dark:bg-background-dark/50 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                        <span className="material-symbols-outlined text-4xl text-primary">trending_up</span>
                        <p className="text-4xl font-extrabold text-primary mt-2">40%</p>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1">Increase in Lead Conversion</p>
                    </div>
                    <div className="bg-white dark:bg-background-dark/50 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                        <span className="material-symbols-outlined text-4xl text-primary">schedule</span>
                        <p className="text-4xl font-extrabold text-primary mt-2">50%</p>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1">Reduction in Admin Time</p>
                    </div>
                    <div className="bg-white dark:bg-background-dark/50 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                        <span className="material-symbols-outlined text-4xl text-primary">monitoring</span>
                        <p className="text-4xl font-extrabold text-primary mt-2">25%</p>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1">Growth in Sales Revenue</p>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 dark:bg-background-dark/50 py-16 md:py-24">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#111811] dark:text-white">Ready to Write Your Own Success Story?</h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Let's discuss how our tailored Zoho solutions can transform your business processes and drive growth.</p>
                    <div className="mt-8">
                        <button className="flex mx-auto min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-wide hover:bg-opacity-80 transition-colors">
                            <span className="truncate">Schedule a Free Consultation</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsPage;
