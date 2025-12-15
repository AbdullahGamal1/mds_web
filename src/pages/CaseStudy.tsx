import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import FadeIn from '../components/animations/FadeIn';

interface CaseStudy {
    id: string;
    title: string;
    slug: string;
    client: string;
    industry: string;
    challenge: string;
    featured: boolean;
}

const CaseStudy: React.FC = () => {
    const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCaseStudies();
    }, []);

    const fetchCaseStudies = async () => {
        try {
            const response = await api.get('/casestudy');
            setCaseStudies(response.data.caseStudies);
        } catch (error) {
            console.error('Error fetching case studies:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark py-16 px-6 md:px-10">
            <div className="max-w-7xl mx-auto">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
                            Case Studies
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Explore how we've helped businesses across various industries transform their operations with Zoho.
                        </p>
                    </div>
                </FadeIn>

                {loading ? (
                    <div className="text-center py-20 text-gray-500">Loading case studies...</div>
                ) : caseStudies.length === 0 ? (
                    <div className="text-center py-20 text-gray-500">No case studies found. Check back soon!</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {caseStudies.map((cs, index) => (
                            <FadeIn key={cs.id} delay={index * 0.1}>
                                <Link to={`/case-studies/${cs.slug}`} className="group block h-full">
                                    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 h-full flex flex-col border border-gray-100 dark:border-gray-700">
                                        <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-4xl text-gray-400 group-hover:text-primary transition-colors">business</span>
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 text-xs font-semibold rounded-full">
                                                    {cs.industry}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                                                {cs.title}
                                            </h3>
                                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">{cs.client}</p>
                                            <p className="text-gray-600 dark:text-gray-400 line-clamp-3 mb-4 flex-grow text-sm">
                                                {cs.challenge}
                                            </p>
                                            <div className="flex items-center text-primary font-bold text-sm mt-auto">
                                                Read Case Study
                                                <span className="material-symbols-outlined text-sm ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </FadeIn>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CaseStudy;
