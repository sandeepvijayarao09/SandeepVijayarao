import React, { useState } from 'react';
import InfoCard from '../components/sections/InfoCard';
import Divider from '../components/common/Divider';
import { projects } from '../data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectsPage.css';

const appleSpring = [0.22, 1, 0.36, 1];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.05 }
    },
    exit: {
        opacity: 0,
        transition: { staggerChildren: 0.03, staggerDirection: -1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95, filter: 'blur(6px)' },
    visible: {
        opacity: 1, y: 0, scale: 1, filter: 'blur(0px)',
        transition: { duration: 0.5, ease: appleSpring }
    },
    exit: {
        opacity: 0, y: -20, scale: 0.98, filter: 'blur(4px)',
        transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1.0] }
    }
};

const headingVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: {
        opacity: 1, y: 0, filter: 'blur(0px)',
        transition: { duration: 0.7, ease: appleSpring }
    }
};

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div className="container">
            <motion.h1
                className="typography-section-headline"
                style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}
                initial="hidden"
                animate="visible"
                variants={headingVariants}
            >
                Work & Ventures
            </motion.h1>

            {/* Filter Toggle */}
            <motion.div
                className="filter-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: appleSpring, delay: 0.2 }}
            >
                {['all', 'engineering', 'ai'].map((f) => (
                    <button
                        key={f}
                        className={`filter-btn ${filter === f ? 'active' : ''}`}
                        onClick={() => setFilter(f)}
                    >
                        {f === 'all' ? 'All' : f === 'engineering' ? 'Software Engineering' : 'AI Research'}
                    </button>
                ))}
            </motion.div>

            <AnimatePresence mode="wait">
                <motion.div
                    className="projects-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    key={filter}
                >
                    {filteredProjects.map((project) => (
                        <motion.div key={project.id} variants={itemVariants} className="project-card-wrapper">
                            <InfoCard
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                link={project.link}
                                onClick={() => window.open(project.link, '_blank')}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Projects;
