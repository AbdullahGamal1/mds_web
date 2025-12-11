import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
    children,
    delay = 0,
    className = ''
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay }}
            whileHover={{
                y: -5,
                transition: { duration: 0.2 }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedCard;
