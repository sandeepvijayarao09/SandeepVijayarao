import React from 'react';
import { motion } from 'framer-motion';
import { now } from '../data/portfolioData';

const appleSpring = [0.22, 1, 0.36, 1];
const appleEase = [0.25, 0.1, 0.25, 1.0];

const headingVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: {
        opacity: 1, y: 0, filter: 'blur(0px)',
        transition: { duration: 0.7, ease: appleSpring }
    }
};

const cardReveal = {
    hidden: { opacity: 0, y: 40, scale: 0.92, filter: 'blur(10px)' },
    visible: {
        opacity: 1, y: 0, scale: 1, filter: 'blur(0px)',
        transition: { duration: 0.8, ease: appleSpring }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
};

const gridItem = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.4, ease: appleEase }
    }
};

const Now = () => {
    return (
        <div className="container">
            <motion.h1
                className="typography-section-headline"
                style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}
                initial="hidden"
                animate="visible"
                variants={headingVariants}
            >
                Now
            </motion.h1>

            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <motion.div
                    style={{
                        background: 'var(--bg-card)',
                        padding: '40px',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--divider-color)',
                        textAlign: 'center'
                    }}
                    initial="hidden"
                    animate="visible"
                    variants={cardReveal}
                >
                    <p className="typography-caption" style={{ marginBottom: '16px', color: 'var(--text-secondary)' }}>UPDATED {now.updated}</p>

                    <h2 className="typography-headline" style={{ marginBottom: '24px' }}>What I'm focused on.</h2>

                    <p className="typography-body" style={{ marginBottom: 'var(--spacing-lg)', fontSize: '20px' }}>
                        {now.focus}
                    </p>

                    <hr style={{ border: '0', borderTop: '1px solid var(--divider-color)', margin: '30px 0' }} />

                    <motion.div
                        style={{ display: 'grid', gap: '20px', textAlign: 'left' }}
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={gridItem}>
                            <span className="typography-caption" style={{ display: 'block', marginBottom: '4px' }}>CURRENT PROJECT</span>
                            <span className="typography-body" style={{ fontWeight: '600' }}>{now.currentProject}</span>
                        </motion.div>
                        <motion.div variants={gridItem}>
                            <span className="typography-caption" style={{ display: 'block', marginBottom: '4px' }}>READING</span>
                            <span className="typography-body" style={{ fontWeight: '600' }}>{now.reading}</span>
                        </motion.div>
                        <motion.div variants={gridItem}>
                            <span className="typography-caption" style={{ display: 'block', marginBottom: '4px' }}>LOCATION</span>
                            <span className="typography-body" style={{ fontWeight: '600' }}>{now.location}</span>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.p
                    className="typography-caption"
                    style={{ textAlign: 'center', marginTop: '40px', color: 'var(--text-secondary)' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, ease: appleEase, delay: 0.8 }}
                >
                    Inspired by <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'underline' }}>nownownow.com</a>
                </motion.p>
            </div>
        </div>
    );
};

export default Now;
