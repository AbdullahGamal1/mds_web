import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    image?: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Ahmed Hassan',
        role: 'CEO',
        company: 'TechCorp Egypt',
        content: 'MDS transformed our business operations with their Zoho CRM implementation. Our sales team productivity increased by 40% in just 3 months!',
        rating: 5
    },
    {
        id: 2,
        name: 'Sara Mohamed',
        role: 'Operations Manager',
        company: 'Smart Solutions',
        content: 'The team at MDS is incredibly professional. They understood our needs and delivered a customized Zoho solution that exceeded our expectations.',
        rating: 5
    },
    {
        id: 3,
        name: 'Khaled Ibrahim',
        role: 'Finance Director',
        company: 'Global Trade Co.',
        content: 'Zoho Books implementation by MDS has streamlined our accounting processes. We now have real-time financial insights that help us make better decisions.',
        rating: 5
    },
    {
        id: 4,
        name: 'Mona Ali',
        role: 'Marketing Head',
        company: 'Creative Agency',
        content: 'Outstanding service! The training and support provided by MDS ensured our entire team was comfortable using the new system from day one.',
        rating: 5
    }
];

const TestimonialCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) nextIndex = testimonials.length - 1;
            if (nextIndex >= testimonials.length) nextIndex = 0;
            return nextIndex;
        });
    };

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }).map((_, index) => (
            <span
                key={index}
                className={`material-symbols-outlined text-xl ${index < rating ? 'text-primary' : 'text-gray-300 dark:text-gray-600'
                    }`}
            >
                star
            </span>
        ));
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto px-4">
            <div className="relative h-[400px] md:h-[300px] flex items-center justify-center">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: 'spring', stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                        className="absolute w-full"
                    >
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700">
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {renderStars(testimonials[currentIndex].rating)}
                            </div>

                            {/* Content */}
                            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 italic">
                                "{testimonials[currentIndex].content}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                                    <span className="text-primary font-bold text-xl">
                                        {testimonials[currentIndex].name.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white">
                                        {testimonials[currentIndex].name}
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
                <button
                    onClick={() => paginate(-1)}
                    className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                    aria-label="Previous testimonial"
                >
                    <span className="material-symbols-outlined">chevron_left</span>
                </button>

                {/* Dots */}
                <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                    ? 'bg-primary w-8'
                                    : 'bg-gray-300 dark:bg-gray-600'
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={() => paginate(1)}
                    className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                    aria-label="Next testimonial"
                >
                    <span className="material-symbols-outlined">chevron_right</span>
                </button>
            </div>
        </div>
    );
};

export default TestimonialCarousel;
