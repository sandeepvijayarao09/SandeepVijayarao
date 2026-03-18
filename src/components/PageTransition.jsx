import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 30,
                scale: 0.96,
                filter: 'blur(10px)',
            }}
            animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: 'blur(0px)',
            }}
            exit={{
                opacity: 0,
                y: -20,
                scale: 1.04,
                filter: 'blur(6px)',
            }}
            transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1.0],
                exit: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1.0] },
            }}
            style={{ willChange: 'opacity, transform, filter', display: 'flex', flexDirection: 'column', flex: 1 }}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
