import React from 'react';
import SEO from '../components/common/SEO';

const NotFound: React.FC = () => {
    return (
        <>
            <SEO
                title="404 - Page Not Found | MDS"
                description="The page you're looking for doesn't exist. Return to MDS homepage or contact us for assistance."
                noindex={true}
            />
            <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 py-20 text-center">
                <div className="max-w-2xl">
                    <div className="text-primary text-8xl font-bold mb-6">404</div>
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Page Not Found
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                        Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/"
                            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors"
                        >
                            <span className="material-symbols-outlined mr-2">home</span>
                            Go to Homepage
                        </a>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition-colors"
                        >
                            <span className="material-symbols-outlined mr-2">contact_support</span>
                            Contact Support
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFound;
