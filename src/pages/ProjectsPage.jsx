import React, { useState } from 'react';
import InfoCard from '../components/sections/InfoCard';
import Divider from '../components/common/Divider';
import { projects } from '../data/portfolioData';
import { motion } from 'framer-motion';
import './ProjectsPage.css';

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <div className="container">
            <h1 className="typography-section-headline" style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>Work & Ventures</h1>

            {/* Filter Toggle */}
            <div className="filter-container">
                <button
                    className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                    onClick={() => setFilter('all')}
                >
                    All
                </button>
                <button
                    className={`filter-btn ${filter === 'engineering' ? 'active' : ''}`}
                    onClick={() => setFilter('engineering')}
                >
                    Software Engineering
                </button>
                <button
                    className={`filter-btn ${filter === 'ai' ? 'active' : ''}`}
                    onClick={() => setFilter('ai')}
                >
                    AI Research
                </button>
            </div>

            <motion.div 
                className="projects-grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                key={filter} // Re-animate when filter changes
            >
                {filteredProjects.map((project) => (
                    <motion.div key={project.id} variants={itemVariants} className="project-card-wrapper">
                        <InfoCard
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            link={project.link}
                            onClick={() => window.open(project.link, '_blank')} // Changed to open in new tab
                        />
                    </motion.div>
                ))}
            </motion.div>


        </div>
    );
};

export default Projects;
