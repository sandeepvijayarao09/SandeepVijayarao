import React from 'react';
import { motion } from 'framer-motion';
import { publications } from '../data/portfolioData';
import PublicationCard from '../components/common/PublicationCard';
import './PublicationsPage.css';

const appleSpring = [0.22, 1, 0.36, 1];

const headingVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: {
        opacity: 1, y: 0, filter: 'blur(0px)',
        transition: { duration: 0.7, ease: appleSpring }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.15 }
    }
};

const cardVariant = {
    hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
    visible: {
        opacity: 1, y: 0, filter: 'blur(0px)',
        transition: { duration: 0.6, ease: appleSpring }
    }
};

const Publications = () => {
    return (
        <div className="container">
            <motion.h1
                className="typography-section-headline"
                initial="hidden"
                animate="visible"
                variants={headingVariants}
            >
                Publications & Patents
            </motion.h1>

            <motion.div
                style={{ marginBottom: 'var(--spacing-xxl)' }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
            >
                <motion.h2
                    className="typography-headline"
                    style={{ marginBottom: 'var(--spacing-lg)' }}
                    variants={headingVariants}
                >
                    Selected Publications
                </motion.h2>
                {publications.map((pub) => (
                    <motion.div key={pub.id} variants={cardVariant}>
                        <PublicationCard pub={pub} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Publications;
