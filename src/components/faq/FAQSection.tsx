import React, { useState, useEffect } from 'react';
import FadeIn from '../animations/FadeIn';
import { getFAQSchema } from '../../utils/schemas';
import SEO from '../common/SEO';
import api from '../../services/api';

interface FAQItem {
    id: string;
    question: string;
    answer: string;
    category: string;
}

const FAQSection: React.FC = () => {
    const [faqs, setFaqs] = useState<FAQItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [openItems, setOpenItems] = useState<Set<string>>(new Set());
    const [feedback, setFeedback] = useState<Record<string, boolean | null>>({});

    const categories = ['All', 'Implementation', 'Training', 'Services', 'Integration', 'Support', 'Pricing', 'About'];

    useEffect(() => {
        fetchFaqs();
    }, [selectedCategory]);

    const fetchFaqs = async () => {
        setLoading(true);
        try {
            const params: any = {};
            if (selectedCategory !== 'All') params.category = selectedCategory;
            // Search is handled client side heavily for now, or could pass to API

            const response = await api.get('/faq', { params });
            setFaqs(response.data.faqs);
        } catch (error) {
            console.error('Error fetching FAQs:', error);
        } finally {
            setLoading(false);
        }
    };

    const toggleItem = (id: string) => {
        const newOpenItems = new Set(openItems);
        if (newOpenItems.has(id)) {
            newOpenItems.delete(id);
        } else {
            newOpenItems.add(id);
        }
        setOpenItems(newOpenItems);
    };

    const handleFeedback = (id: string, helpful: boolean) => {
        setFeedback({ ...feedback, [id]: helpful });
    };

    // Client-side filtering for search query as backend search might not be overkill for small FAQ sets,
    // but if we want backend search we can add it. For now, filter the fetched FAQs.
    const filteredFAQs = faqs.filter(faq => {
        const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSearch;
    });

    const faqSchema = getFAQSchema(faqs.map(faq => ({
        question: faq.question,
        answer: faq.answer
    })));

    return (
        <>
            <SEO
                title="FAQ - Frequently Asked Questions | MDS Zoho Partner"
                description="Find answers to common questions about Zoho implementation, training, support, and our services. Get help from Mashreq Digital Solutions."
                keywords="Zoho FAQ, CRM Questions, Implementation Help, Zoho Support, Egypt"
                url="https://mds-solutions.com/faq"
                schema={[faqSchema]}
            />

            <div className="min-h-screen bg-background-light dark:bg-background-dark py-16 px-6 md:px-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <FadeIn>
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
                                Frequently Asked Questions
                            </h1>
                            <p className="text-lg text-gray-600 dark:text-gray-400">
                                Find answers to common questions about our Zoho services
                            </p>
                        </div>
                    </FadeIn>

                    {/* Search */}
                    <FadeIn delay={0.1}>
                        <div className="relative mb-8">
                            <input
                                type="text"
                                placeholder="Search questions..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                search
                            </span>
                        </div>
                    </FadeIn>

                    {/* Categories */}
                    <FadeIn delay={0.2}>
                        <div className="flex gap-2 flex-wrap mb-8">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${selectedCategory === category
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </FadeIn>

                    {/* FAQ Accordion */}
                    <div className="space-y-4">
                        {loading ? (
                            <div className="text-center py-12 text-gray-500">Loading FAQs...</div>
                        ) : filteredFAQs.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-gray-500 dark:text-gray-400">
                                    No questions found. Try adjusting your search or filter.
                                </p>
                            </div>
                        ) : (
                            filteredFAQs.map((faq, index) => (
                                <FadeIn key={faq.id} delay={0.3 + index * 0.05}>
                                    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                                        <button
                                            onClick={() => toggleItem(faq.id)}
                                            className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                                        >
                                            <div className="flex items-start gap-3 text-left flex-1">
                                                <span className="material-symbols-outlined text-primary mt-1">
                                                    help
                                                </span>
                                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                                    {faq.question}
                                                </h3>
                                            </div>
                                            <span className={`material-symbols-outlined text-gray-400 transition-transform ${openItems.has(faq.id) ? 'rotate-180' : ''
                                                }`}>
                                                expand_more
                                            </span>
                                        </button>

                                        {openItems.has(faq.id) && (
                                            <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
                                                <p className="text-gray-600 dark:text-gray-400 mb-4 pl-9">
                                                    {faq.answer}
                                                </p>

                                                {/* Feedback */}
                                                <div className="flex items-center gap-4 pl-9">
                                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                                        Was this helpful?
                                                    </span>
                                                    <div className="flex gap-2">
                                                        <button
                                                            onClick={() => handleFeedback(faq.id, true)}
                                                            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${feedback[faq.id] === true
                                                                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                                                : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                                                                }`}
                                                        >
                                                            👍 Yes
                                                        </button>
                                                        <button
                                                            onClick={() => handleFeedback(faq.id, false)}
                                                            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${feedback[faq.id] === false
                                                                ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                                                : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                                                                }`}
                                                        >
                                                            👎 No
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </FadeIn>
                            ))
                        )}
                    </div>

                    {/* Contact CTA */}
                    <FadeIn delay={0.5}>
                        <div className="mt-12 text-center bg-primary/5 rounded-xl p-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                Still have questions?
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Our team is here to help. Get in touch with us for personalized assistance.
                            </p>
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-lg hover:brightness-110 transition-all"
                            >
                                Contact Us
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </>
    );
};

export default FAQSection;
