import React, { useEffect, useState } from 'react';
import SEO from '../components/common/SEO';
import { getServiceSchema, getBreadcrumbSchema } from '../utils/schemas';
import api from '../services/api';

interface Service {
    id: string;
    name: string;
    description: string;
    image?: string;
}

const Services: React.FC = () => {
    const [servicesList, setServicesList] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const response = await api.get('/services');
            setServicesList(response.data.services);
        } catch (error) {
            console.error('Error fetching services:', error);
        } finally {
            setLoading(false);
        }
    };

    const breadcrumbs = getBreadcrumbSchema([
        { name: 'Home', url: 'https://mds-solutions.com' },
        { name: 'Services', url: 'https://mds-solutions.com/solutions' }
    ]);

    // Use fetched services for schema if available, otherwise fallback to static for SEO initially (though real SSR would be better)
    const serviceSchemas = servicesList.length > 0 ? servicesList.map(s => getServiceSchema({
        name: s.name,
        description: s.description,
        url: `https://mds-solutions.com/solutions#${s.name.replace(/\s+/g, '-').toLowerCase()}`
    })) : [];

    return (
        <>
            <SEO
                title="Zoho Services - Implementation, Customization & Support | MDS"
                description="Expert Zoho services including CRM implementation, ERP solutions, customization, integration, and ongoing support. Certified Zoho Partner in Egypt."
                keywords="Zoho Services, Zoho Implementation, Zoho Customization, Zoho Integration, Zoho Support, CRM Services Egypt"
                url="https://mds-solutions.com/solutions"
                schema={[...serviceSchemas, breadcrumbs]}
            />
            <div className="flex-1">
                <section className="px-6 sm:px-10 lg:px-20 py-20 md:py-32">
                    <div className="mx-auto max-w-7xl">
                        <div className="@container">
                            <div className="flex flex-col gap-12 @[960px]:flex-row @[960px]:items-center">
                                <div className="flex flex-col gap-8 text-left @[960px]:w-1/2 @[960px]:gap-10">
                                    <div className="flex flex-col gap-4">
                                        <h1 className="text-gray-900 dark:text-gray-100 text-5xl font-extrabold leading-tight tracking-tighter @[520px]:text-6xl">Streamline Your Business with Expert Zoho Solutions</h1>
                                        <p className="text-gray-600 dark:text-gray-400 text-lg font-normal leading-relaxed @[520px]:text-xl">From implementation to ongoing support, we build custom workflows that drive growth and efficiency.</p>
                                    </div>
                                    <button className="flex w-full @[480px]:w-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/80 transition-colors shadow-lg shadow-primary/20">
                                        <span className="truncate">Schedule a Free Consultation</span>
                                    </button>
                                </div>
                                <div className="w-full @[960px]:w-1/2 bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-2xl" data-alt="Abstract green and white geometric shapes" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC8iKKYf22fWmou9rsRZg_Sq2lyAx0W7D8kvA98JE6J4qd56XESd32I8WlcSEiUjn57Jp0dKQsihrxjtjdMB0YLtZ32fKaExx7IycAhs6XbMEtVd_XP2oJ6h8sv5QP0IDwnwlUJ0iSnhOoVl9v4QR8ZaW8wqlaFgG8Cx5hp8h46SES9Ah3LmtXLuL-1yuxTDOGpL8yApRvvRUUsNTpywL0QUMbrLgX60ccG96sawXH50zQ9kBi-q0-VnNXYsztnQ03HzwrT__NHOOM")' }}></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="px-6 sm:px-10 lg:px-20 py-20 md:py-32 bg-surface dark:bg-surface-dark">
                    <div className="mx-auto max-w-7xl">
                        <div className="flex flex-col items-center text-center gap-4 mb-12">
                            <h2 className="text-gray-900 dark:text-gray-100 text-4xl font-extrabold leading-tight tracking-tighter max-w-2xl">How We Help: A Look at Our Process</h2>
                            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl leading-relaxed">We follow a structured, transparent workflow for every service to ensure your project's success from start to finish.</p>
                        </div>

                        {loading ? (
                            <div className="text-center py-20 text-gray-500">Loading services...</div>
                        ) : servicesList.length === 0 ? (
                            <div className="text-center py-20 text-gray-500">No services found.</div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {servicesList.map((service) => (
                                    <div key={service.id} className="flex flex-col gap-4 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-background-light dark:bg-background-dark shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl" data-alt={service.name} style={{ backgroundImage: `url("${service.image || 'https://via.placeholder.com/300'}")` }}></div>
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-gray-900 dark:text-gray-100 text-xl font-bold leading-normal">{service.name}</h3>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-relaxed">{service.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
                <section className="px-6 sm:px-10 lg:px-20 py-20 md:py-32">
                    <div className="mx-auto max-w-7xl">
                        <div className="flex flex-col gap-12">
                            <div className="flex flex-col gap-4 text-center items-center">
                                <h2 className="text-gray-900 dark:text-gray-100 text-4xl font-extrabold leading-tight tracking-tighter max-w-2xl">The Value We Deliver</h2>
                                <p className="text-gray-600 dark:text-gray-400 text-lg font-normal leading-relaxed max-w-3xl">Our services are designed to address your key business challenges and deliver tangible results.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="flex flex-1 gap-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-surface dark:bg-surface-dark p-8 flex-col items-start text-left">
                                    <div className="text-primary bg-primary/10 p-3 rounded-xl">
                                        <span className="material-symbols-outlined text-4xl">trending_up</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-gray-900 dark:text-gray-100 text-xl font-bold leading-tight">Increased Efficiency</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-relaxed">Streamline your operations with automated workflows tailored to your business needs.</p>
                                    </div>
                                </div>
                                <div className="flex flex-1 gap-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-surface dark:bg-surface-dark p-8 flex-col items-start text-left">
                                    <div className="text-primary bg-primary/10 p-3 rounded-xl">
                                        <span className="material-symbols-outlined text-4xl">savings</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-gray-900 dark:text-gray-100 text-xl font-bold leading-tight">Reduced Costs</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-relaxed">Eliminate manual tasks and optimize resource allocation to lower operational expenses.</p>
                                    </div>
                                </div>
                                <div className="flex flex-1 gap-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-surface dark:bg-surface-dark p-8 flex-col items-start text-left">
                                    <div className="text-primary bg-primary/10 p-3 rounded-xl">
                                        <span className="material-symbols-outlined text-4xl">rocket_launch</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-gray-900 dark:text-gray-100 text-xl font-bold leading-tight">Scalable Growth</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-relaxed">Build a flexible Zoho ecosystem that grows with your business and adapts to new challenges.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="px-6 sm:px-10 lg:px-20 py-20 md:py-32">
                    <div className="mx-auto max-w-5xl bg-surface dark:bg-surface-dark rounded-2xl p-10 md:p-20 text-center border border-gray-200 dark:border-gray-800">
                        <div className="flex flex-col gap-6 items-center">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tighter">Ready to Transform Your Operations?</h2>
                            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">Let's discuss your unique challenges. Our experts are ready to build a Zoho solution that works for you.</p>
                            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-8 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/80 transition-colors mt-4 shadow-lg shadow-primary/20">
                                <span className="truncate">Get a Quote</span>
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Services;
