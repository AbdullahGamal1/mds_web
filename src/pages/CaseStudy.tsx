import React from 'react';

const CaseStudy: React.FC = () => {
    return (
        <div className="px-4 sm:px-8 lg:px-20 xl:px-40 flex flex-1 justify-center py-16 sm:py-24">
            <div className="flex w-full max-w-4xl flex-col gap-12 sm:gap-20">
                <div className="flex flex-col items-center text-center gap-6">
                    <div className="w-16 h-16 rounded-xl bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center">
                        <img alt="Acme Corp company logo" className="h-10 w-10 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1fkiSZROvyVu3cx0tqL-gemvA_mIdP9mxucOlqxGLHLdCZK609HoiaJkN_e3gp2FJNbBBNqH9KSAYz0i1QFNdTvAn3p0Ahn46wAuYdF1j3iWDz64emDe8dtVtuw9FeDr6SuhMAsc6e0q2F6r-CvCThAILTp145qXYl5ulpgK7MI6twQKnJ7SBllGw2PIgn6T9mxdr7CwkEZWNNjDORhTTIx97Z-Xr2-Ntp8FxwyJPzuR6aZ1EjkFUqTjH-uVHJIAb7XLCYRpTOe0" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="font-display text-neutral-900 dark:text-neutral-50 text-4xl sm:text-5xl font-extrabold leading-tight tracking-[-0.03em]">How Acme Corp Transformed Their Sales Pipeline with Our Zoho Expertise</h1>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto"> A detailed look into the challenges, our bespoke solutions, and the incredible results we achieved together, boosting their sales efficiency by over 40%. </p>
                    </div>
                </div>
                <div className="p-6 bg-white dark:bg-neutral-900/50 rounded-xl border border-neutral-200 dark:border-neutral-800/60 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4">
                        <div className="flex flex-col items-start gap-1 md:pr-6">
                            <p className="text-sm text-neutral-500 dark:text-neutral-400">Industry</p>
                            <p className="text-base font-semibold text-neutral-800 dark:text-neutral-100">SaaS</p>
                        </div>
                        <div className="flex flex-col items-start gap-1 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-neutral-200 dark:border-neutral-800/60 md:px-6">
                            <p className="text-sm text-neutral-500 dark:text-neutral-400">Company Size</p>
                            <p className="text-base font-semibold text-neutral-800 dark:text-neutral-100">150 Employees</p>
                        </div>
                        <div className="flex flex-col items-start gap-1 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-neutral-200 dark:border-neutral-800/60 md:pl-6">
                            <p className="text-sm text-neutral-500 dark:text-neutral-400">Project Duration</p>
                            <p className="text-base font-semibold text-neutral-800 dark:text-neutral-100">3 Months</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-4">
                        <h2 className="font-display text-2xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight relative pl-5">
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-1.5 bg-primary rounded-full"></span> The Challenge </h2>
                        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300"> Acme Corp was struggling with a disjointed sales process, relying on spreadsheets and manual data entry. This led to inaccurate forecasting, missed follow-ups, and a significant amount of time wasted on administrative tasks, hindering their growth potential. They needed a unified system to streamline operations, improve data visibility, and empower their sales team. </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="font-display text-2xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight relative pl-5">
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-1.5 bg-primary rounded-full"></span> Our Zoho Solution </h2>
                        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300"> We implemented a comprehensive suite of Zoho applications, tailored to Acme Corp's specific needs. This created a single source of truth for their customer data and automated key stages of their sales cycle. </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
                            <div className="flex items-center gap-4 p-4 bg-white dark:bg-neutral-900/50 rounded-lg border border-neutral-200 dark:border-neutral-800/60">
                                <img alt="Zoho CRM Logo" className="w-8 h-8 rounded" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMvG2b4tqNsFeL6apag6EtApiO0smM_0r7NoUG7w8nZLxh8p-8fOaJwmBb5jNI-SPEGBCnPL6fHR8dqB-CGsWgqwn7-O_TQN6Y5LpVBapwiMn_B8Qr1uCBVMJHFAxIkSAq96LpS3hljI3RXouNkQG5vm0Anc17rsreOmSycDxUfd-LJLSR12yIi7FKNFnA_OcC72g9fiHi5R5rjDcBHLpSMJJT9Zi4GI5yeSa9sql8E7pXWGqlvlr2ZEeZgr_ZRARvx_h1FfDga-8" />
                                <p className="font-semibold text-neutral-800 dark:text-neutral-200">Zoho CRM</p>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-white dark:bg-neutral-900/50 rounded-lg border border-neutral-200 dark:border-neutral-800/60">
                                <img alt="Zoho Analytics Logo" className="w-8 h-8 rounded" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUsQRnKPfAlPCTMMiGeSexmfHniDPwHF1OR-hOym9SwJJuX9hwa4q6rOHXX02f9H68QHSxYcEvPEyJl33TxicPwpVPc62pByJxuM2k6vr85BGGklMNXCjRGx4eE6-xzQan0qE1c188PgKn4hRmtFNtNRQeQdDDq-gZGxSBH3cx3RmTpoZjgwGZrDmJbobXklwEe7wwUL203tIWYYzpXOapaz1Yf-1-EW6PBnzaFHTfUoSSoduCSdJfg3i6aQPT8OOHR5C05KgQ5Ts" />
                                <p className="font-semibold text-neutral-800 dark:text-neutral-200">Zoho Analytics</p>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-white dark:bg-neutral-900/50 rounded-lg border border-neutral-200 dark:border-neutral-800/60">
                                <img alt="Zoho Books Logo" className="w-8 h-8 rounded" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc5Ke0O5dLWCTKBo9bM1X6xfv14JhkFunrGExm4kgxPTk2WgnKhZFEXobTf55ta7UG66ZkYdpK6GXqVJ-Lv4x5Lrny0uu3gSwLHZaeh3h_e_aJF2DSpveH2Sgw7JHsaqw-ks4GH3rLzK7CyyKQ8VpV7QP9eB41kzLXRtey-aR9JyuEaVIdQgRK2emFIYoDqQNZ-OZ2AFrsIGwRjWFs0L0uGdfC9pTL0SpYOLbaPdF6siECZ7yIZFoPTI_TQ5dSEtEpM95-S6y0O_0" />
                                <p className="font-semibold text-neutral-800 dark:text-neutral-200">Zoho Books</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="font-display text-2xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight relative pl-5">
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-1.5 bg-primary rounded-full"></span> Custom Development </h2>
                        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300"> To address a unique workflow challenge, we developed a custom Deluge script that automatically assigns leads based on territory and sales rep workload, ensuring balanced distribution and faster response times. </p>
                        <div className="bg-[#161b22] dark:bg-[#161b22] rounded-lg border border-neutral-200 dark:border-neutral-800/60 p-4 font-mono text-sm text-gray-300 overflow-x-auto">
                            <pre><code>{`// Auto-assign lead based on territory and workload
leadDetails = zoho.crm.getRecordById("Leads", leadId);
repList = zoho.crm.getRecords("CustomModule3");
assigned = false;
for each rep in repList {
    if(leadDetails.get("State") == rep.get("Territory")) {
        // Logic to check workload and assign...
        info "Lead assigned to " + rep.get("Name");
        assigned = true;
        break;
    }
}`}</code></pre>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h2 className="font-display text-2xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight relative pl-5">
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-1.5 bg-primary rounded-full"></span> The Results </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                            <div className="bg-primary-50 dark:bg-primary-950/40 p-6 rounded-lg text-center flex flex-col items-center gap-2 border border-primary-200 dark:border-primary-900/50">
                                <span className="material-symbols-outlined text-4xl text-primary">trending_up</span>
                                <p className="font-display text-5xl font-extrabold text-neutral-900 dark:text-white">40%</p>
                                <p className="text-primary-900 dark:text-primary-200 font-medium">Increase in Lead Conversion</p>
                            </div>
                            <div className="bg-primary-50 dark:bg-primary-950/40 p-6 rounded-lg text-center flex flex-col items-center gap-2 border border-primary-200 dark:border-primary-900/50">
                                <span className="material-symbols-outlined text-4xl text-primary">schedule</span>
                                <p className="font-display text-5xl font-extrabold text-neutral-900 dark:text-white">-20hrs</p>
                                <p className="text-primary-900 dark:text-primary-200 font-medium">Saved Weekly on Manual Work</p>
                            </div>
                            <div className="bg-primary-50 dark:bg-primary-950/40 p-6 rounded-lg text-center flex flex-col items-center gap-2 border border-primary-200 dark:border-primary-900/50">
                                <span className="material-symbols-outlined text-4xl text-primary">groups</span>
                                <p className="font-display text-5xl font-extrabold text-neutral-900 dark:text-white">+75%</p>
                                <p className="text-primary-900 dark:text-primary-200 font-medium">User Adoption Rate</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center py-10 border-t border-neutral-200 dark:border-neutral-800/60">
                    <h2 className="font-display text-neutral-900 dark:text-neutral-100 text-3xl font-bold leading-tight tracking-tight mb-4">Ready to Optimize Your Business?</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto mb-8 text-lg"> See how our tailored Zoho solutions can drive measurable results for your company. Let's build your success story together. </p>
                    <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-lg shadow-primary-500/20 hover:bg-primary-700 transition-all hover:scale-105 active:scale-100 mx-auto">
                        <span className="truncate">Get a Free Consultation</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CaseStudy;
