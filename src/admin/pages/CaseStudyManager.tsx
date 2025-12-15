import React, { useEffect, useState } from 'react';
import api from '../../services/api';

interface CaseStudy {
    id: string;
    title: string;
    slug: string;
    client: string;
    industry: string;
    challenge: string;
    solution: string;
    results: string;
    featured: boolean;
    published: boolean;
    createdAt: string;
}

const CaseStudyManager: React.FC = () => {
    const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        title: '',
        titleAr: '',
        slug: '',
        client: '',
        clientAr: '',
        industry: '',
        industryAr: '',
        challenge: '',
        challengeAr: '',
        solution: '',
        solutionAr: '',
        results: '',
        resultsAr: '',
        featured: false,
        published: true,
    });

    useEffect(() => {
        fetchCaseStudies();
    }, []);

    const fetchCaseStudies = async () => {
        try {
            const response = await api.get('/casestudy/admin/all');
            setCaseStudies(response.data.caseStudies);
        } catch (error) {
            console.error('Error fetching case studies:', error);
        } finally {
            setLoading(false);
        }
    };

    const generateSlug = (text: string) => {
        return text
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (isEditing && editingId) {
                await api.put(`/casestudy/${editingId}`, formData);
            } else {
                await api.post('/casestudy', formData);
            }
            fetchCaseStudies();
            resetForm();
        } catch (error) {
            console.error('Error saving case study:', error);
            alert('Failed to save case study. Please check all fields.');
        }
    };

    const handleEdit = (cs: any) => {
        setFormData({
            title: cs.title,
            titleAr: cs.titleAr || '',
            slug: cs.slug,
            client: cs.client,
            clientAr: cs.clientAr || '',
            industry: cs.industry,
            industryAr: cs.industryAr || '',
            challenge: cs.challenge,
            challengeAr: cs.challengeAr || '',
            solution: cs.solution,
            solutionAr: cs.solutionAr || '',
            results: cs.results,
            resultsAr: cs.resultsAr || '',
            featured: cs.featured,
            published: cs.published,
        });
        setEditingId(cs.id);
        setIsEditing(true);
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this case study?')) return;
        try {
            await api.delete(`/casestudy/${id}`);
            fetchCaseStudies();
        } catch (error) {
            console.error('Error deleting case study:', error);
        }
    };

    const resetForm = () => {
        setFormData({
            title: '',
            titleAr: '',
            slug: '',
            client: '',
            clientAr: '',
            industry: '',
            industryAr: '',
            challenge: '',
            challengeAr: '',
            solution: '',
            solutionAr: '',
            results: '',
            resultsAr: '',
            featured: false,
            published: true,
        });
        setIsEditing(false);
        setEditingId(null);
    };

    if (loading) return <div className="text-center py-8">Loading...</div>;

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Case Studies</h2>
                <button
                    onClick={() => { resetForm(); setIsEditing(true); }}
                    className="bg-primary hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
                >
                    + New Case Study
                </button>
            </div>

            {isEditing && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                            {editingId ? 'Edit Case Study' : 'New Case Study'}
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Basic Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1 dark:text-gray-300">Title</label>
                                    <input
                                        type="text"
                                        value={formData.title}
                                        onChange={e => setFormData({ ...formData, title: e.target.value, slug: generateSlug(e.target.value) })}
                                        className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 dark:text-gray-300">Slug</label>
                                    <input
                                        type="text"
                                        value={formData.slug}
                                        onChange={e => setFormData({ ...formData, slug: e.target.value })}
                                        className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 dark:text-gray-300">Client</label>
                                    <input
                                        type="text"
                                        value={formData.client}
                                        onChange={e => setFormData({ ...formData, client: e.target.value })}
                                        className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 dark:text-gray-300">Industry</label>
                                    <input
                                        type="text"
                                        value={formData.industry}
                                        onChange={e => setFormData({ ...formData, industry: e.target.value })}
                                        className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Content Sections */}
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1 dark:text-gray-300">Challenge</label>
                                    <textarea
                                        value={formData.challenge}
                                        onChange={e => setFormData({ ...formData, challenge: e.target.value })}
                                        className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:text-white h-24"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 dark:text-gray-300">Solution</label>
                                    <textarea
                                        value={formData.solution}
                                        onChange={e => setFormData({ ...formData, solution: e.target.value })}
                                        className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:text-white h-24"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 dark:text-gray-300">Results</label>
                                    <textarea
                                        value={formData.results}
                                        onChange={e => setFormData({ ...formData, results: e.target.value })}
                                        className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:text-white h-24"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Options */}
                            <div className="flex gap-4 border-t pt-4">
                                <label className="flex items-center gap-2 cursor-pointer dark:text-white">
                                    <input
                                        type="checkbox"
                                        checked={formData.featured}
                                        onChange={e => setFormData({ ...formData, featured: e.target.checked })}
                                    />
                                    Featured
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer dark:text-white">
                                    <input
                                        type="checkbox"
                                        checked={formData.published}
                                        onChange={e => setFormData({ ...formData, published: e.target.checked })}
                                    />
                                    Published
                                </label>
                            </div>

                            <div className="flex justify-end gap-3 pt-4">
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
                                    Save Case Study
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {caseStudies.map((cs) => (
                    <div key={cs.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="font-bold text-gray-900 dark:text-white text-lg">{cs.title}</h3>
                                <p className="text-sm text-gray-500">{cs.client} | {cs.industry}</p>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={() => handleEdit(cs)} className="text-blue-600 dark:text-blue-400">
                                    <span className="material-symbols-outlined">edit</span>
                                </button>
                                <button onClick={() => handleDelete(cs.id)} className="text-red-600 dark:text-red-400">
                                    <span className="material-symbols-outlined">delete</span>
                                </button>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 text-sm">{cs.challenge}</p>
                        <div className="flex gap-2 text-xs">
                            {cs.featured && <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Featured</span>}
                            {cs.published ? (
                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">Published</span>
                            ) : (
                                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full">Draft</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            {caseStudies.length === 0 && (
                <div className="text-center text-gray-500 py-12">No case studies found. Create your first success story!</div>
            )}
        </div>
    );
};

export default CaseStudyManager;
