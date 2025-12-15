import React, { useEffect, useState } from 'react';
import api from '../../services/api';

interface Subscriber {
    id: string;
    email: string;
    name?: string;
    active: boolean;
    subscribedAt: string;
}

const NewsletterManager: React.FC = () => {
    const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchSubscribers();
    }, []);

    const fetchSubscribers = async () => {
        try {
            const response = await api.get('/newsletter');
            setSubscribers(response.data.subscribers);
        } catch (error) {
            console.error('Error fetching subscribers:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to remove this subscriber?')) return;
        try {
            await api.delete(`/newsletter/${id}`);
            fetchSubscribers();
        } catch (error) {
            console.error('Error deleting subscriber:', error);
        }
    };

    const handleExport = () => {
        const csvContent = "data:text/csv;charset=utf-8,"
            + "Email,Name,Joined Date,Status\n"
            + subscribers.map(s => `${s.email},${s.name || ''},${new Date(s.subscribedAt).toLocaleDateString()},${s.active ? 'Active' : 'Unsubscribed'}`).join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "newsletter_subscribers.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (loading) return <div className="text-center py-8">Loading...</div>;

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Newsletter Subscribers</h2>
                <div className="flex gap-4">
                    <button
                        onClick={handleExport}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                        disabled={subscribers.length === 0}
                    >
                        <span className="material-symbols-outlined">download</span>
                        Export CSV
                    </button>
                    <button
                        className="bg-primary hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 opacity-50 cursor-not-allowed"
                        title="Coming Soon"
                    >
                        <span className="material-symbols-outlined">send</span>
                        Send Campaign
                    </button>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date Joined</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {subscribers.map((sub) => (
                            <tr key={sub.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{sub.email}</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{sub.name || '-'}</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                    {new Date(sub.subscribedAt).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 text-xs rounded-full ${sub.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                        {sub.active ? 'Active' : 'Unsubscribed'}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button
                                        onClick={() => handleDelete(sub.id)}
                                        className="text-red-600 hover:text-red-800"
                                    >
                                        <span className="material-symbols-outlined">delete</span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {subscribers.length === 0 && (
                    <div className="text-center text-gray-500 py-12">No subscribers yet.</div>
                )}
            </div>
        </div>
    );
};

export default NewsletterManager;
