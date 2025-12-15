import React, { useState } from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { authService } from '../../services/auth.service';

const AdminLayout: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        authService.logout();
        navigate('/admin/login');
    };

    const menuItems = [
        { path: '/admin/dashboard', icon: '📊', label: 'Dashboard', labelAr: 'لوحة التحكم' },
        { path: '/admin/blog', icon: '📝', label: 'Blog Posts', labelAr: 'المقالات' },
        { path: '/admin/testimonials', icon: '⭐', label: 'Testimonials', labelAr: 'الشهادات' },
        { path: '/admin/contact', icon: '📧', label: 'Contact Messages', labelAr: 'الرسائل' },
        { path: '/admin/faq', icon: '❓', label: 'FAQ', labelAr: 'الأسئلة الشائعة' },
        { path: '/admin/case-studies', icon: '💼', label: 'Case Studies', labelAr: 'دراسات الحالة' },
        { path: '/admin/newsletter', icon: '📰', label: 'Newsletter', labelAr: 'النشرة البريدية' },
        { path: '/admin/services', icon: '🛠️', label: 'Services', labelAr: 'الخدمات' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 z-40 ${isSidebarOpen ? 'w-64' : 'w-20'
                    }`}
            >
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                        {isSidebarOpen && (
                            <img src="/logo.png" alt="MDS" className="h-10" />
                        )}
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            {isSidebarOpen ? '◀' : '▶'}
                        </button>
                    </div>
                </div>

                <nav className="p-4 space-y-2">
                    {menuItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${location.pathname === item.path
                                ? 'bg-primary text-white'
                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                }`}
                        >
                            <span className="text-xl">{item.icon}</span>
                            {isSidebarOpen && <span className="font-medium">{item.label}</span>}
                        </Link>
                    ))}
                </nav>

                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all"
                    >
                        <span className="text-xl">🚪</span>
                        {isSidebarOpen && <span className="font-medium">Logout</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div
                className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'
                    }`}
            >
                {/* Header */}
                <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 px-6 py-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Admin Dashboard
                        </h1>
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                {JSON.parse(localStorage.getItem('user') || '{}').name}
                            </span>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
