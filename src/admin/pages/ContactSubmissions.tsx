import React, { useEffect, useState } from 'react';
import api from '../../services/api';

interface ContactSubmission {
    id: string;
    name: string;
    email: string;
    phone?: string;
    company?: string;
    message: string;
    status: 'NEW' | 'IN_PROGRESS' | 'RESOLVED' | 'ARCHIVED';
    createdAt: string;
}

const ContactSubmissions: React.FC = () => {
    const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState<string>('all');

    useEffect(() => {
        fetchSubmissions();
    }, [filter]);

    const fetchSubmissions = async () => {
        try {
            const url = filter === 'all' ? '/contact' : `/contact?status=${filter}`;
            const response = await api.get(url);
            setSubmissions(response.data.submissions);
        } catch (error) {
            console.error('Error fetching submissions:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleStatusChange = async (id: string, status: string) => {
        try {
            await api.patch(`/contact/${id}`, { status });
            fetchSubmissions();
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this submission?')) return;

        try {
            await api.delete(`/contact/${id}`);
            fetchSubmissions();
        } catch (error) {
            console.error('Error deleting submission:', error);
        }
    };

    const getStatusColor = (status: string) => {
        const colors = {
            NEW: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
            IN_PROGRESS: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
            RESOLVED: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
            ARCHIVED: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
        };
        return colors[status as keyof typeof colors] || colors.NEW;
    };

    if (loading) {
        return <div className="text-center py-8">Loading...</div>;
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Contact Submissions</h2>
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                >
                    <option value="all">All Status</option>
                    <option value="NEW">New</option>
                    <option value="IN_PROGRESS">In Progress</option>
                    <option value="RESOLVED">Resolved</option>
                    <option value="ARCHIVED">Archived</option>
                </select>
            </div>

            <div className="space-y-4">
                {submissions.map((submission) => (
                    <div
                        key={submission.id}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{submission.name}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{submission.email}</p>
                                {submission.phone && (
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{submission.phone}</p>
                                )}
                                {submission.company && (
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{submission.company}</p>
                                )}
                            </div>
                            <div className="flex items-center gap-2">
                                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(submission.status)}`}>
                                    {submission.status}
                                </span>
                                <select
                                    value={submission.status}
                                    onChange={(e) => handleStatusChange(submission.id, e.target.value)}
                                    className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                                >
                                    <option value="NEW">New</option>
                                    <option value="IN_PROGRESS">In Progress</option>
                                    <option value="RESOLVED">Resolved</option>
                                    <option value="ARCHIVED">Archived</option>
                                </select>
                            </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
                            <p className="text-gray-700 dark:text-gray-300">{submission.message}</p>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500 dark:text-gray-400">
                                {new Date(submission.createdAt).toLocaleString()}
                            </span>
                            <button
                                onClick={() => handleDelete(submission.id)}
                                className="text-red-600 hover:text-red-800 dark:text-red-400 font-medium"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}

                {submissions.length === 0 && (
                    <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                        No contact submissions found.
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContactSubmissions;
