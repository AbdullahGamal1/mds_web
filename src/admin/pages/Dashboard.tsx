import React, { useEffect, useState } from 'react';
import api from '../../services/api';

interface Stats {
    totalBlogs: number;
    totalTestimonials: number;
    totalContacts: number;
    totalNewsletter: number;
}

const Dashboard: React.FC = () => {
    const [stats, setStats] = useState<Stats>({
        totalBlogs: 0,
        totalTestimonials: 0,
        totalContacts: 0,
        totalNewsletter: 0,
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {
        try {
            // Fetch data from all endpoints
            const [blogs, testimonials, contacts] = await Promise.all([
                api.get('/blog?page=1&limit=1'),
                api.get('/testimonials/admin/all'),
                api.get('/contact?page=1&limit=1'),
            ]);

            setStats({
                totalBlogs: blogs.data.pagination?.total || 0,
                totalTestimonials: testimonials.data.testimonials?.length || 0,
                totalContacts: contacts.data.pagination?.total || 0,
                totalNewsletter: 0, // Will be implemented
            });
        } catch (error) {
            console.error('Error fetching stats:', error);
        } finally {
            setLoading(false);
        }
    };

    const statCards = [
        { title: 'Blog Posts', value: stats.totalBlogs, icon: '📝', color: 'bg-blue-500' },
        { title: 'Testimonials', value: stats.totalTestimonials, icon: '⭐', color: 'bg-yellow-500' },
        { title: 'Contact Messages', value: stats.totalContacts, icon: '📧', color: 'bg-green-500' },
        { title: 'Newsletter Subscribers', value: stats.totalNewsletter, icon: '📰', color: 'bg-purple-500' },
    ];

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="text-xl text-gray-600 dark:text-gray-400">Loading...</div>
            </div>
        );
    }

    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Overview</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {statCards.map((card) => (
                    <div
                        key={card.title}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{card.title}</p>
                                <p className="text-3xl font-bold text-gray-900 dark:text-white">{card.value}</p>
                            </div>
                            <div className={`${card.color} w-12 h-12 rounded-lg flex items-center justify-center text-2xl`}>
                                {card.icon}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Welcome to MDS Admin Dashboard</h3>
                <p className="text-gray-600 dark:text-gray-400">
                    Manage your website content, view contact submissions, and monitor your digital presence all in one place.
                </p>
            </div>
        </div>
    );
};

export default Dashboard;
