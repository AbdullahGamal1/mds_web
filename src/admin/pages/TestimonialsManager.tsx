import React, { useEffect, useState } from 'react';
import api from '../../services/api';

interface Testimonial {
    id: string;
    name: string;
    position: string;
    company: string;
    content: string;
    featured: boolean;
    published: boolean;
    image?: string;
    createdAt: string;
}

const TestimonialsManager: React.FC = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        position: '',
        company: '',
        content: '',
        featured: false,
        published: true,
    });

    useEffect(() => {
        fetchTestimonials();
    }, []);

    const fetchTestimonials = async () => {
        try {
            const response = await api.get('/testimonials/admin/all');
            setTestimonials(response.data.testimonials);
        } catch (error) {
            console.error('Error fetching testimonials:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (isEditing && editingId) {
                await api.put(`/testimonials/${editingId}`, formData);
            } else {
                await api.post('/testimonials', formData);
            }
            fetchTestimonials();
            resetForm();
        } catch (error) {
            console.error('Error saving testimonial:', error);
            alert('Failed to save testimonial');
        }
    };

    const handleEdit = (testimonial: Testimonial) => {
        setFormData({
            name: testimonial.name,
            position: testimonial.position,
            company: testimonial.company,
            content: testimonial.content,
            featured: testimonial.featured,
            published: testimonial.published,
        });
        setEditingId(testimonial.id);
        setIsEditing(true);
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this testimonial?')) return;
        try {
            await api.delete(`/testimonials/${id}`);
            fetchTestimonials();
        } catch (error) {
            console.error('Error deleting testimonial:', error);
        }
    };

    const resetForm = () => {
        setFormData({
            name: '',
            position: '',
            company: '',
            content: '',
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
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Testimonials</h2>
                <button
                    onClick={() => { resetForm(); setIsEditing(true); }}
                    className="bg-primary hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
                >
                    + Add Testimonial
                </button>
            </div>

            {isEditing && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-2xl">
                        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                            {editingId ? 'Edit Testimonial' : 'New Testimonial'}
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Name</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Position</label>
                                    <input
                                        type="text"
                                        value={formData.position}
                                        onChange={e => setFormData({ ...formData, position: e.target.value })}
                                        className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Company</label>
                                <input
                                    type="text"
                                    value={formData.company}
                                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                                    required
                                    placeholder="e.g. Acme Corp"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Content</label>
                                <textarea
                                    value={formData.content}
                                    onChange={e => setFormData({ ...formData, content: e.target.value })}
                                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:text-white h-32"
                                    required
                                />
                            </div>
                            <div className="flex gap-4">
                                <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                                    <input
                                        type="checkbox"
                                        checked={formData.featured}
                                        onChange={e => setFormData({ ...formData, featured: e.target.checked })}
                                    />
                                    Featured
                                </label>
                                <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                                    <input
                                        type="checkbox"
                                        checked={formData.published}
                                        onChange={e => setFormData({ ...formData, published: e.target.checked })}
                                    />
                                    Published
                                </label>
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((t) => (
                    <div key={t.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="font-bold text-gray-900 dark:text-white text-lg">{t.name}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{t.position} at {t.company}</p>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={() => handleEdit(t)} className="text-blue-600 hover:text-blue-800">
                                    <span className="material-symbols-outlined">edit</span>
                                </button>
                                <button onClick={() => handleDelete(t.id)} className="text-red-600 hover:text-red-800">
                                    <span className="material-symbols-outlined">delete</span>
                                </button>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-4 italic">"{t.content}"</p>
                        <div className="flex gap-2 text-xs">
                            {t.featured && <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Featured</span>}
                            {t.published ? (
                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">Published</span>
                            ) : (
                                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full">Draft</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            {testimonials.length === 0 && (
                <div className="text-center text-gray-500 py-12">No testimonials found. Add one to get started!</div>
            )}
        </div>
    );
};

export default TestimonialsManager;
