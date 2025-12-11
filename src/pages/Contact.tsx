import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 mx-auto">
            {/* Heading Section */}
            <div className="flex flex-col gap-6 p-4 text-center md:text-left">
                <div className="flex flex-col gap-3">
                    <p className="text-[#181611] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                        Let's Optimize Your Business
                    </p>
                    <p className="text-[#8a7c60] dark:text-[#bfb5a3] text-lg font-normal leading-normal max-w-2xl">
                        Ready to transform your workflow? As a certified Zoho Partner, we are here to help you implement and customize the perfect solution for your unique needs.
                    </p>
                </div>
            </div>

            {/* Main Grid: Form & Info */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-4 mt-6">

                {/* Left: Contact Form */}
                <div className="lg:col-span-7 flex flex-col gap-6 bg-white dark:bg-[#1a150d] p-6 md:p-8 rounded-xl border border-[#e6e2db] dark:border-[#3d3322] shadow-sm">
                    <h3 className="text-2xl font-bold mb-2 text-[#181611] dark:text-white">Send us a message</h3>

                    <div className="flex flex-wrap gap-4">
                        <label className="flex flex-col min-w-40 flex-1">
                            <p className="text-[#181611] dark:text-gray-200 text-sm font-semibold leading-normal pb-2">First Name</p>
                            <input
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181611] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#e6e2db] dark:border-[#4a4235] bg-white dark:bg-[#2a241a] focus:border-primary h-12 placeholder:text-[#8a7c60] dark:placeholder:text-[#6b6250] p-[15px] text-base font-normal leading-normal transition-all"
                                placeholder="Jane"
                            />
                        </label>
                        <label className="flex flex-col min-w-40 flex-1">
                            <p className="text-[#181611] dark:text-gray-200 text-sm font-semibold leading-normal pb-2">Last Name</p>
                            <input
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181611] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#e6e2db] dark:border-[#4a4235] bg-white dark:bg-[#2a241a] focus:border-primary h-12 placeholder:text-[#8a7c60] dark:placeholder:text-[#6b6250] p-[15px] text-base font-normal leading-normal transition-all"
                                placeholder="Doe"
                            />
                        </label>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <label className="flex flex-col min-w-40 flex-1">
                            <p className="text-[#181611] dark:text-gray-200 text-sm font-semibold leading-normal pb-2">Work Email</p>
                            <input
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181611] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#e6e2db] dark:border-[#4a4235] bg-white dark:bg-[#2a241a] focus:border-primary h-12 placeholder:text-[#8a7c60] dark:placeholder:text-[#6b6250] p-[15px] text-base font-normal leading-normal transition-all"
                                placeholder="jane@company.com"
                            />
                        </label>
                        <label className="flex flex-col min-w-40 flex-1">
                            <p className="text-[#181611] dark:text-gray-200 text-sm font-semibold leading-normal pb-2">Phone Number</p>
                            <input
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181611] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#e6e2db] dark:border-[#4a4235] bg-white dark:bg-[#2a241a] focus:border-primary h-12 placeholder:text-[#8a7c60] dark:placeholder:text-[#6b6250] p-[15px] text-base font-normal leading-normal transition-all"
                                placeholder="+1 (555) 000-0000"
                            />
                        </label>
                    </div>

                    <label className="flex flex-col min-w-40 flex-1">
                        <p className="text-[#181611] dark:text-gray-200 text-sm font-semibold leading-normal pb-2">Which Zoho App do you need help with?</p>
                        <div className="relative">
                            <select className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181611] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#e6e2db] dark:border-[#4a4235] bg-white dark:bg-[#2a241a] focus:border-primary h-12 p-[15px] text-base font-normal leading-normal appearance-none transition-all cursor-pointer">
                                <option>Zoho CRM</option>
                                <option>Zoho Books</option>
                                <option>Zoho Desk</option>
                                <option>Zoho One Implementation</option>
                                <option>Other / Not Sure</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#8a7c60]">
                                <span className="material-symbols-outlined">expand_more</span>
                            </div>
                        </div>
                    </label>

                    <label className="flex flex-col min-w-40 flex-1">
                        <p className="text-[#181611] dark:text-gray-200 text-sm font-semibold leading-normal pb-2">How can we help you?</p>
                        <textarea
                            className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-[#181611] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#e6e2db] dark:border-[#4a4235] bg-white dark:bg-[#2a241a] focus:border-primary h-32 placeholder:text-[#8a7c60] dark:placeholder:text-[#6b6250] p-[15px] text-base font-normal leading-normal transition-all"
                            placeholder="Tell us about your project or requirements..."
                        ></textarea>
                    </label>

                    <button className="mt-2 w-full md:w-auto cursor-pointer flex items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-8 bg-primary text-[#181611] text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-all shadow-md">
                        <span className="truncate">Send Message</span>
                        <span className="material-symbols-outlined text-lg">send</span>
                    </button>
                </div>

                {/* Right: Contact Info & Map */}
                <div className="lg:col-span-5 flex flex-col gap-6">

                    {/* Info Cards */}
                    <div className="bg-primary/10 dark:bg-primary/5 rounded-xl p-6 md:p-8 flex flex-col gap-6 border border-primary/20">
                        <div className="flex items-start gap-4">
                            <div className="size-10 rounded-full bg-primary flex items-center justify-center text-[#181611] shrink-0">
                                <span className="material-symbols-outlined">location_on</span>
                            </div>
                            <div>
                                <p className="text-[#181611] dark:text-white font-bold text-lg">Visit Our Office</p>
                                <p className="text-[#8a7c60] dark:text-gray-400 mt-1">123 Business Park, Suite 400<br />Tech City, CA 94000</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="size-10 rounded-full bg-primary flex items-center justify-center text-[#181611] shrink-0">
                                <span className="material-symbols-outlined">call</span>
                            </div>
                            <div>
                                <p className="text-[#181611] dark:text-white font-bold text-lg">Call Us</p>
                                <p className="text-[#8a7c60] dark:text-gray-400 mt-1">Mon-Fri from 8am to 6pm</p>
                                <a className="text-[#181611] dark:text-white font-semibold hover:text-primary transition-colors" href="tel:+15550000000">+1 (555) 000-0000</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="size-10 rounded-full bg-primary flex items-center justify-center text-[#181611] shrink-0">
                                <span className="material-symbols-outlined">mail</span>
                            </div>
                            <div>
                                <p className="text-[#181611] dark:text-white font-bold text-lg">Email Us</p>
                                <p className="text-[#8a7c60] dark:text-gray-400 mt-1">For general inquiries</p>
                                <a className="text-[#181611] dark:text-white font-semibold hover:text-primary transition-colors" href="mailto:hello@zohopartner.com">hello@zohopartner.com</a>
                            </div>
                        </div>
                    </div>

                    {/* Trust Badge Area */}
                    <div className="flex items-center gap-3 p-4 bg-white dark:bg-[#1a150d] rounded-xl border border-[#e6e2db] dark:border-[#3d3322]">
                        <div className="size-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-3xl">verified</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-[#181611] dark:text-white">Certified Partner</span>
                            <span className="text-sm text-[#8a7c60] dark:text-gray-400">Authorized Zoho Consultant</span>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="rounded-xl overflow-hidden h-64 w-full relative border border-[#e6e2db] dark:border-[#3d3322]">
                        <img
                            alt="Map showing office location in a grayscale style with an orange pin"
                            className="w-full h-full object-cover"
                            data-location="San Francisco, CA"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoEezsF2LbWPCLo2mWnXgl4oYgBtxf4mxSxImGKJfL8VkfhQPNs2MpIvyKuBIoE09-NdG3Bob8ypi58FYqA4K_0WkhZ86_lrvkNNtFE8G9dsxWm1IQhBcfhN9CaXjhrBJbrrUfVB5_0D0QNJB4xI2gB3moUAFHEKqt0nunBTrXdWQ2wR9WON1_YYCFQbfK-Xbicl_pqj0IoLll3jTfiau1bE0KjAMylscGnBmRGB0LUFTQUnz-dczFf23FoQ1Q1ynuORb8p5_0w-4"
                        />
                        <div className="absolute inset-0 pointer-events-none border border-[#e6e2db]/10 rounded-xl"></div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-12 p-4">
                <h3 className="text-2xl font-bold mb-6 text-[#181611] dark:text-white">Frequently Asked Questions</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2 p-4 rounded-lg bg-white dark:bg-[#1a150d] border border-[#e6e2db] dark:border-[#3d3322]">
                        <div className="flex items-center gap-2 text-[#181611] dark:text-white font-bold">
                            <span className="material-symbols-outlined text-primary">help</span>
                            <h4>What is the typical implementation timeline?</h4>
                        </div>
                        <p className="text-[#8a7c60] dark:text-gray-400 pl-8">Timelines vary by project complexity, but most standard CRM implementations take 2-4 weeks.</p>
                    </div>
                    <div className="flex flex-col gap-2 p-4 rounded-lg bg-white dark:bg-[#1a150d] border border-[#e6e2db] dark:border-[#3d3322]">
                        <div className="flex items-center gap-2 text-[#181611] dark:text-white font-bold">
                            <span className="material-symbols-outlined text-primary">help</span>
                            <h4>Do you offer ongoing support?</h4>
                        </div>
                        <p className="text-[#8a7c60] dark:text-gray-400 pl-8">Yes, we offer several support packages to ensure your team continues to succeed with Zoho.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
