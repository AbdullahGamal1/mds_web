import React from 'react';

interface SkeletonLoaderProps {
    type?: 'text' | 'card' | 'avatar' | 'image';
    count?: number;
    className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
    type = 'text',
    count = 1,
    className = ''
}) => {
    const baseClass = 'animate-pulse bg-gray-200 dark:bg-gray-700 rounded';

    const skeletonTypes = {
        text: 'h-4 w-full',
        card: 'h-64 w-full',
        avatar: 'h-12 w-12 rounded-full',
        image: 'h-48 w-full'
    };

    return (
        <>
            {Array.from({ length: count }).map((_, index) => (
                <div
                    key={index}
                    className={`${baseClass} ${skeletonTypes[type]} ${className}`}
                />
            ))}
        </>
    );
};

export default SkeletonLoader;
