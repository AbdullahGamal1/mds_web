import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/common/SEO';
import FadeIn from '../components/animations/FadeIn';
import api from '../services/api';

interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    category: string;
    tags: string[]; // JSON string or array depending on handling
    createdAt: string;
    image?: string;
    views: number;
}

const Blog: React.FC = () => {
    const { t } = useTranslation();
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState<string>('');

    const categories = ['All', 'CRM', 'Finance', 'Digital Transformation', 'Automation', 'Development'];

    useEffect(() => {
        fetchPosts();
    }, [selectedCategory, searchQuery]);

    const fetchPosts = async () => {
        setLoading(true);
        try {
            const params: any = { published: 'true' };
            if (selectedCategory !== 'All') params.category = selectedCategory;
            if (searchQuery) params.search = searchQuery;

            const response = await api.get('/blog', { params });
            setPosts(response.data.posts);
        } catch (error) {
            console.error('Error fetching blog posts:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    return (
        <>
            <SEO
                title="Blog - Zoho Tips, Digital Transformation & Business Insights | MDS"
                description="Read our latest articles about Zoho CRM, ERP, digital transformation, and business automation. Expert insights from Mashreq Digital Solutions."
                keywords="Zoho Blog, CRM Tips, ERP Guide, Digital Transformation, Business Automation, Zoho Egypt"
                url="https://mds-solutions.com/blog"
            />

            <div className="min-h-screen bg-background-light dark:bg-background-dark">
                {/* Hero Section */}
                <section className="px-6 md:px-10 py-16 md:py-24 bg-gradient-to-br from-primary/10 to-transparent">
                    <div className="max-w-7xl mx-auto">
                        <FadeIn>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
                                Blog & Insights
                            </h1>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                                Expert insights on Zoho, digital transformation, and business automation
                            </p>
                        </FadeIn>
                    </div>
                </section>

                {/* Search & Filter */}
                <section className="px-6 md:px-10 py-8 border-b border-gray-200 dark:border-gray-700">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                            {/* Search */}
                            <div className="relative w-full md:w-96">
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    value={searchQuery}
                                    onChange={handleSearch}
                                    className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                                />
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                    search
                                </span>
                            </div>

                            {/* Categories */}
                            <div className="flex gap-2 flex-wrap">
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
                        </div>
                    </div>
                </section>

                {/* Blog Posts Grid */}
                <section className="px-6 md:px-10 py-12">
                    <div className="max-w-7xl mx-auto">
                        {loading ? (
                            <div className="text-center py-20 text-gray-500">Loading articles...</div>
                        ) : posts.length === 0 ? (
                            <div className="text-center py-20">
                                <p className="text-gray-500 dark:text-gray-400 text-lg">
                                    No articles found. Try adjusting your search or filter.
                                </p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {posts.map((post, index) => (
                                    <FadeIn key={post.id} delay={index * 0.1}>
                                        <article className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
                                            {post.image ? (
                                                <img
                                                    src={post.image}
                                                    alt={post.title}
                                                    className="w-full h-48 object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-4xl text-gray-400">image</span>
                                                </div>
                                            )}
                                            <div className="p-6 flex flex-col flex-grow">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                                                        {post.category}
                                                    </span>
                                                    <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                                                        <span className="material-symbols-outlined text-sm">visibility</span>
                                                        {post.views}
                                                    </span>
                                                </div>
                                                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 hover:text-primary transition-colors line-clamp-2">
                                                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                                                </h2>
                                                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-grow">
                                                    {post.excerpt}
                                                </p>
                                                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700 mt-auto">
                                                    <div className="flex items-center gap-2">
                                                        <div className="text-xs text-gray-500 dark:text-gray-400">
                                                            {new Date(post.createdAt).toLocaleDateString()}
                                                        </div>
                                                    </div>
                                                    <Link
                                                        to={`/blog/${post.slug}`}
                                                        className="text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-1"
                                                    >
                                                        Read More
                                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </article>
                                    </FadeIn>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* Newsletter CTA */}
                <section className="px-6 md:px-10 py-16 bg-primary/5">
                    <div className="max-w-4xl mx-auto text-center">
                        <FadeIn>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                Subscribe to Our Newsletter
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-8">
                                Get the latest Zoho tips, digital transformation insights, and business automation strategies delivered to your inbox.
                            </p>
                            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={async (e) => {
                                e.preventDefault();
                                const form = e.target as HTMLFormElement;
                                const emailInput = form.elements.namedItem('email') as HTMLInputElement;
                                const email = emailInput.value;

                                try {
                                    await api.post('/newsletter/subscribe', { email });
                                    alert('Subscribed successfully!');
                                    form.reset();
                                } catch (error) {
                                    console.error('Subscription error:', error);
                                    alert('Failed to subscribe. Please try again.');
                                }
                            }}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                                    required
                                />
                                <button type="submit" className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:brightness-110 transition-all">
                                    Subscribe
                                </button>
                            </form>
                        </FadeIn>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Blog;
