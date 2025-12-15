import React, { useEffect, useState } from 'react';
import api from '../../services/api';

interface FAQ {
    id: string;
    question: string;
    questionAr: string;
    answer: string;
    answerAr: string;
    category: string;
    order: number;
    published: boolean;
}

const FAQManager: React.FC = () => {
    const [faqs, setFaqs] = useState<FAQ[]>([]);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        question: '',
        questionAr: '',
        answer: '',
        answerAr: '',
        category: 'General',
        order: 0,
        published: true,
    });

    const categories = ['General', 'Implementation', 'Training', 'Services', 'Integration', 'Support', 'Pricing', 'About'];

    useEffect(() => {
        fetchFaqs();
    }, []);

    const fetchFaqs = async () => {
        try {
            const response = await api.get('/faq/admin/all');
            setFaqs(response.data.faqs);
        } catch (error) {
            console.error('Error fetching FAQs:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (isEditing && editingId) {
                await api.put(`/faq/${editingId}`, formData);
            } else {
                await api.post('/faq', formData);
            }
            fetchFaqs();
            resetForm();
        } catch (error) {
            console.error('Error saving FAQ:', error);
            alert('Failed to save FAQ');
        }
    };

    const handleEdit = (faq: FAQ) => {
        setFormData({
            question: faq.question,
            questionAr: faq.questionAr || '',
            answer: faq.answer,
            answerAr: faq.answerAr || '',
            category: faq.category,
            order: faq.order,
            published: faq.published,
        });
        setEditingId(faq.id);
        setIsEditing(true);
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this FAQ?')) return;
        try {
            await api.delete(`/faq/${id}`);
            fetchFaqs();
        } catch (error) {
            console.error('Error deleting FAQ:', error);
        }
    };

    const resetForm = () => {
        setFormData({
            question: '',
            questionAr: '',
            answer: '',
            answerAr: '',
            category: 'General',
            order: 0,
            published: true,
        });
        setIsEditing(false);
        setEditingId(null);
    };

    if (loading) return <div className="text-center py-8">Loading...</div>;

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">FAQ Management</h2>
                <button
                    onClick={() => { resetForm(); setIsEditing(true); }}
                    className="bg-primary hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
                >
                    + Add FAQ
                </button>
            </div>

            {isEditing && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-3xl my-8">
                        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                            {editingId ? 'Edit FAQ' : 'New FAQ'}
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* English */}
                                <div className="space-y-4">
                                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 border-b pb-1">English</h4>
                                    <div>
                                        <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Question</label>
                                        <input
                                            type="text"
                                            value={formData.question}
                                            onChange={e => setFormData({ ...formData, question: e.target.value })}
                                            className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Answer</label>
                                        <textarea
                                            value={formData.answer}
                                            onChange={e => setFormData({ ...formData, answer: e.target.value })}
                                            className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:text-white h-32"
                                            required
                                        />
                                    </div>
                                </div>
                                {/* Arabic */}
                                <div className="space-y-4">
                                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 border-b pb-1">Arabic (Optional)</h4>
                                    <div dir="rtl">
                                        <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">السؤال (Question)</label>
                                        <input
                                            type="text"
                                            value={formData.questionAr}
                                            onChange={e => setFormData({ ...formData, questionAr: e.target.value })}
                                            className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                                        />
                                    </div>
                                    <div dir="rtl">
                                        <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">الإجابة (Answer)</label>
                                        <textarea
                                            value={formData.answerAr}
                                            onChange={e => setFormData({ ...formData, answerAr: e.target.value })}
                                            className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:text-white h-32"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 border-t pt-4 mt-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Category</label>
                                    <select
                                        value={formData.category}
                                        onChange={e => setFormData({ ...formData, category: e.target.value })}
                                        className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                                    >
                                        {categories.map(c => <option key={c} value={c}>{c}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Order</label>
                                    <input
                                        type="number"
                                        value={formData.order}
                                        onChange={e => setFormData({ ...formData, order: parseInt(e.target.value) })}
                                        className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                                    />
                                </div>
                                <div className="flex items-end pb-2">
                                    <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={formData.published}
                                            onChange={e => setFormData({ ...formData, published: e.target.checked })}
                                            className="w-5 h-5 rounded"
                                        />
                                        Published
                                    </label>
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setIsEditing(false)}
                                    className="px-4 py-2 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-orange-600"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className="space-y-4">
                {faqs.map((faq) => (
                    <div key={faq.id} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                                        {faq.category}
                                    </span>
                                    <span className="text-xs text-gray-500">Order: {faq.order}</span>
                                    {faq.published ? (
                                        <span className="text-xs text-green-600 font-medium">Published</span>
                                    ) : (
                                        <span className="text-xs text-gray-500 font-medium">Draft</span>
                                    )}
                                </div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">{faq.question}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 line-clamp-2">{faq.answer}</p>
                            </div>
                            <div className="flex gap-2 ml-4">
                                <button onClick={() => handleEdit(faq)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg dark:hover:bg-gray-700">
                                    <span className="material-symbols-outlined">edit</span>
                                </button>
                                <button onClick={() => handleDelete(faq.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg dark:hover:bg-gray-700">
                                    <span className="material-symbols-outlined">delete</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {faqs.length === 0 && (
                <div className="text-center text-gray-500 py-12">No FAQs found. Add one to get started!</div>
            )}
        </div>
    );
};

export default FAQManager;
