import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';

interface CaseStudy {
    id: string;
    title: string;
    client: string;
    industry: string;
    challenge: string;
    solution: string;
    results: string;
    image?: string;
}

const CaseStudyDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCaseStudy();
    }, [slug]);

    const fetchCaseStudy = async () => {
        try {
            const response = await api.get(`/casestudy/${slug}`);
            setCaseStudy(response.data.caseStudy);
        } catch (error) {
            console.error('Error fetching case study:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div className="text-center py-20">Loading...</div>;
    if (!caseStudy) return <div className="text-center py-20">Case study not found.</div>;

    return (
        <div className="px-4 sm:px-8 lg:px-20 xl:px-40 flex flex-1 justify-center py-16 sm:py-24 animate-fade-in">
            <div className="flex w-full max-w-4xl flex-col gap-12 sm:gap-20">
                <div className="flex flex-col items-center text-center gap-6">
                    <div className="w-16 h-16 rounded-xl bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center">
                        <span className="material-symbols-outlined text-3xl text-gray-400">business</span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Link to="/case-studies" className="text-primary hover:underline text-sm font-medium mb-2">← Back to Case Studies</Link>
                        <h1 className="font-display text-neutral-900 dark:text-neutral-50 text-4xl sm:text-5xl font-extrabold leading-tight tracking-[-0.03em]">{caseStudy.title}</h1>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto"> {caseStudy.client} | {caseStudy.industry} </p>
                    </div>
                </div>
                <div className="p-6 bg-white dark:bg-neutral-900/50 rounded-xl border border-neutral-200 dark:border-neutral-800/60 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                        <div className="flex flex-col items-start gap-1 md:pr-6">
                            <p className="text-sm text-neutral-500 dark:text-neutral-400">Industry</p>
                            <p className="text-base font-semibold text-neutral-800 dark:text-neutral-100">{caseStudy.industry}</p>
                        </div>
                        <div className="flex flex-col items-start gap-1 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-neutral-200 dark:border-neutral-800/60 md:px-6">
                            <p className="text-sm text-neutral-500 dark:text-neutral-400">Client</p>
                            <p className="text-base font-semibold text-neutral-800 dark:text-neutral-100">{caseStudy.client}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-4">
                        <h2 className="font-display text-2xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight relative pl-5">
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-1.5 bg-primary rounded-full"></span> The Challenge </h2>
                        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 whitespace-pre-wrap">{caseStudy.challenge}</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="font-display text-2xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight relative pl-5">
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-1.5 bg-primary rounded-full"></span> Our Solution </h2>
                        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 whitespace-pre-wrap">{caseStudy.solution}</p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h2 className="font-display text-2xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight relative pl-5">
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-1.5 bg-primary rounded-full"></span> The Results </h2>
                        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 whitespace-pre-wrap">{caseStudy.results}</p>
                    </div>
                </div>
                <div className="text-center py-10 border-t border-neutral-200 dark:border-neutral-800/60">
                    <h2 className="font-display text-neutral-900 dark:text-neutral-100 text-3xl font-bold leading-tight tracking-tight mb-4">Ready to Optimize Your Business?</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto mb-8 text-lg"> See how our tailored Zoho solutions can drive measurable results for your company. Let's build your success story together. </p>
                    <Link to="/contact" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-lg shadow-primary-500/20 hover:bg-primary-700 transition-all hover:scale-105 active:scale-100 mx-auto w-fit">
                        <span className="truncate">Get a Free Consultation</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CaseStudyDetail;
