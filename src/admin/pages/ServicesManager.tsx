import React, { useState, useEffect } from 'react';
import api from '../../services/api';

interface Service {
    id: string;
    name: string;
    slug: string;
    description: string;
    image?: string;
    order: number;
    published: boolean;
}

const ServicesManager: React.FC = () => {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState<string | null>(null);
    const [formData, setFormData] = useState<Partial<Service>>({
        name: '',
        slug: '',
        description: '',
        image: '',
        order: 0,
        published: true
    });

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const response = await api.get('/services/admin/all');
            setServices(response.data.services);
        } catch (error) {
            console.error('Error fetching services:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked :
                type === 'number' ? parseInt(value) : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (isEditing && editId) {
                await api.put(`/services/${editId}`, formData);
            } else {
                await api.post('/services', formData);
            }
            fetchServices();
            resetForm();
        } catch (error) {
            console.error('Error saving service:', error);
            alert('Failed to save service');
        }
    };

    const handleEdit = (service: Service) => {
        setIsEditing(true);
        setEditId(service.id);
        setFormData({
            name: service.name,
            slug: service.slug,
            description: service.description,
            image: service.image || '',
            order: service.order,
            published: service.published
        });
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm('Are you sure you want to delete this service?')) return;
        try {
            await api.delete(`/services/${id}`);
            fetchServices();
        } catch (error) {
            console.error('Error deleting service:', error);
        }
    };

    const resetForm = () => {
        setIsEditing(false);
        setEditId(null);
        setFormData({
            name: '',
            slug: '',
            description: '',
            image: '',
            order: 0,
            published: true
        });
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Services Manager</h1>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">{isEditing ? 'Edit Service' : 'Add New Service'}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Slug</label>
                            <input
                                type="text"
                                name="slug"
                                value={formData.slug}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                                required
                            />
                        </div>
                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                rows={3}
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Image URL</label>
                            <input
                                type="text"
                                name="image"
                                value={formData.image}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Order</label>
                            <input
                                type="number"
                                name="order"
                                value={formData.order}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                            />
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="published"
                                checked={formData.published}
                                onChange={handleInputChange}
                                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                            />
                            <label className="ml-2 block text-sm text-gray-900 dark:text-gray-300">Published</label>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        >
                            {isEditing ? 'Update Service' : 'Add Service'}
                        </button>
                        {isEditing && (
                            <button
                                type="button"
                                onClick={resetForm}
                                className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                            >
                                Cancel
                            </button>
                        )}
                    </div>
                </form>
            </div>

            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {services.map((service) => (
                        <li key={service.id}>
                            <div className="px-4 py-4 flex items-center sm:px-6">
                                <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                                    <div className="truncate">
                                        <div className="flex text-sm">
                                            <p className="font-medium text-primary truncate">{service.name}</p>
                                            <p className="ml-1 flex-shrink-0 font-normal text-gray-500">
                                                Order: {service.order}
                                            </p>
                                        </div>
                                        <div className="mt-2 flex">
                                            <div className="flex items-center text-sm text-gray-500">
                                                <p className="truncate">{service.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5 flex gap-2">
                                        <button
                                            onClick={() => handleEdit(service)}
                                            className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(service.id)}
                                            className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ServicesManager;
