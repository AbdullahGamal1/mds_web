import React from 'react';
import SEO from '../components/common/SEO';
import { getServiceSchema, getBreadcrumbSchema } from '../utils/schemas';

const Services: React.FC = () => {
    const services = [
        getServiceSchema({
            name: 'Zoho CRM Implementation',
            description: 'Custom Zoho CRM setup and configuration tailored to your sales process',
            url: 'https://mds-solutions.com/solutions#crm'
        }),
        getServiceSchema({
            name: 'Zoho ERP Solutions',
            description: 'Complete ERP implementation with Zoho Books, Inventory, and Finance',
            url: 'https://mds-solutions.com/solutions#erp'
        }),
        getServiceSchema({
            name: 'Business Process Automation',
            description: 'Automated workflows and business process optimization with Zoho',
            url: 'https://mds-solutions.com/solutions#automation'
        })
    ];

    const breadcrumbs = getBreadcrumbSchema([
        { name: 'Home', url: 'https://mds-solutions.com' },
        { name: 'Services', url: 'https://mds-solutions.com/solutions' }
    ]);

    return (
        <>
            <SEO
                title="Zoho Services - Implementation, Customization & Support | MDS"
                description="Expert Zoho services including CRM implementation, ERP solutions, customization, integration, and ongoing support. Certified Zoho Partner in Egypt."
                keywords="Zoho Services, Zoho Implementation, Zoho Customization, Zoho Integration, Zoho Support, CRM Services Egypt"
                url="https://mds-solutions.com/solutions"
                schema={[...services, breadcrumbs]}
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-background-light dark:bg-background-dark">
                                <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl" data-alt="Team collaborating around a whiteboard with charts" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBbWWScVTV49jVt9EwKv1BcTrw_tgEYoLG71ANhrGHj6PnMVngsjUTr0nxmJtORHLuQfOFbEKYXo8KEyzSTSIAJdFcCt1Og7Xk0NEU4KtzSFPVbDUqtiSbiyHMMZe793PDIYlXe8awLCG_TTXsFOpwgxT3wJJBiU6RqiOeEYOSJjl4m_YExXLo_0dxcM0SYGk3x7Qxb01kELTbqREC10CQV0GA2XGK_EUPheFAeZJgl_wjMPd8LdIf6l6Rml21_AFIFL0VXM3LYOoU")' }}></div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-gray-900 dark:text-gray-100 text-xl font-bold leading-normal">Zoho Implementation</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-relaxed">Workflow: Discovery → System Setup → Data Migration → Go-Live</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-background-light dark:bg-background-dark">
                                <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl" data-alt="Close up of code on a computer screen" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC87WOKLwUFL8QxGeMWNVUfDPcjYSPa_6HKZJ6BE1e_ZDImK4bUqpUH8Bi-nHTZ70RaV0HvxtnagKwlkq8L0-JQd57oCkKNXWQJqz7gW-vfNcX6W82A1suFNz-dfBFt9ygJl0aPT9XIDHanyj7ml_u54N6up5lVc8naPCid_1BKeeRyeCtGdwlNB4JfPvcq1DKQWQcneVDZJYZ-8sDUsXuL0X1CPMi9Q8oCwFh5LnH7e65BFtKu1PHY2btaRUBDrUYopu5Z1v3md3s")' }}></div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-gray-900 dark:text-gray-100 text-xl font-bold leading-normal">Zoho Customization</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-relaxed">Workflow: Requirement Analysis → Custom Module Dev → UI/UX Personalization → Deployment</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-background-light dark:bg-background-dark">
                                <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl" data-alt="Abstract network of interconnected digital nodes" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCAo5OwThqUwzZ6H54AH_JgwZY9gpRBnFN2ZglFvAOa6monRY6WVzYRzed-UCxeKWvMaY8sD9_UvWvlqscegA4AHMsF4kkRsk4u7S4yzlsNdS026yMtx3dr3quC0SRs-DPr8XvbQG9upuMf7VuBA6vkHfIMXLMPw8qdYaV1YmwefCPyF2knA4a_3KWsbGLPDvvaU-uRpYo-G3bdEC1EyE7PWoaWcYEh1IoOhsdtglRv21GxRXtp8lp81IlSRPqX9njeBFh7gZfpUhY")' }}></div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-gray-900 dark:text-gray-100 text-xl font-bold leading-normal">Zoho Integration</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-relaxed">Workflow: API Assessment → Connector Setup → Data Sync Mapping → Testing</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-background-light dark:bg-background-dark">
                                <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl" data-alt="Gears and cogs moving in a complex machine" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBwOlJPJCZmAPlZCd4RU0ptzUVG-glTF1ArCic2eBjPj_ASPlh4pO9CMVJZjKVk_87XcVR5EEpQn_e4kVqQeyKEFvdBkm-wc5kxL0eLiPXuHWc66eoM_BGmpJPb0Me3n5BtBEahGrZ1vlOTlUydZ8cqD7KtVDbxxvWpt8QTA5qewZh-T5IitgEUEu-B_FJKohBjBJhwNjHxb6lVsLIkOUbDCMJveLjeGStNrb7W8ObzIjX9MJ5W9L331s8D-u67Db-KveU1LMcxoGY")' }}></div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-gray-900 dark:text-gray-100 text-xl font-bold leading-normal">Process Automation</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-relaxed">Workflow: Process Mapping → Blueprint/Workflow Rule Creation → Automated Triggers → Monitoring</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-background-light dark:bg-background-dark">
                                <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl" data-alt="Instructor presenting to a group in a classroom" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC5g3sAfI8MsUXnWyUU65b74A0po8D0__SoJGxw08D3zHjoP5-tJ3dXVaijM7OLAe9ooJ4L3I7nCtMN7yjcagJjPOoM8d4nQHa63gCFOLi5rJBmva5ex7Fsjw4OK-GxuIxCKA3PVyhN2R9yFKKQlOSp9OMh6dgkWQxMpfAyPKddJ_a9QL2h9bYypJZ8uyvCkEk_Fa1w32h7MhlLN9yN6Fb4uGj5kWOvctt-_mizaQtiu6_SoWg29Ivj4F60Sb7eAO71kbhAGzNCGO0")' }}></div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-gray-900 dark:text-gray-100 text-xl font-bold leading-normal">User Training</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-relaxed">Workflow: Needs Analysis → Custom Curriculum → On-site/Remote Sessions → Resource Library</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-background-light dark:bg-background-dark">
                                <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl" data-alt="Support agent with a headset working on a laptop" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDIBvVS9595obgXHp1obd207rj-_bTeHbzMUOj_rQsNK5M_wMxcojRbdmixVCYp1dmuxnvC0PzMp8nfQpJ-CyT1x8AVhwEncgvT32evKtxkdQDqSRA-i8p5lvqndV2jZhakIizq2lK4Kg1luX6g3uesi8CXPspr6EqzY5YBprZ2vzqqM4hbE4g0614ySAMwpx9a9s_9PEfzars4P3unsP_h_nSJIYSg0IPp7Cpq01v7hJ_QXfo8i1-1Lpvqs0Hb3nS6iUddxkEOL7I")' }}></div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-gray-900 dark:text-gray-100 text-xl font-bold leading-normal">Ongoing Support</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-relaxed">Workflow: Ticket Submission → Triage &amp; Diagnosis → Resolution → Follow-up</p>
                                </div>
                            </div>
                        </div>
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
