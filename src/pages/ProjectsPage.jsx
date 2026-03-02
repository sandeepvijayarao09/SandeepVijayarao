import React, { useState } from 'react';
import InfoCard from '../components/sections/InfoCard';
import Divider from '../components/common/Divider';
import { projects } from '../data/portfolioData';
import './ProjectsPage.css';

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

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

            <div className="projects-grid">
                {filteredProjects.map((project) => (
                    <InfoCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        link={project.link}
                        onClick={() => window.location.href = project.link}
                    />
                ))}
            </div>

            {/* AI Model Zoo (Only shows when AI is selected or All) */}
            {(filter === 'ai' || filter === 'all') && (
                <div style={{ marginTop: '80px' }}>
                    <Divider style={{ marginBottom: '60px' }} />
                    <h2 className="typography-headline" style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>AI Model Playground</h2>
                    <div className="model-zoo-container">
                        <iframe
                            src="https://hf.co/chat/r/aaaaaa" /* Placeholder HF Space */
                            title="Hugging Face Space"
                            style={{ width: '100%', height: '500px', border: 'none', background: 'var(--bg-card)' }}
                        ></iframe>
                        <p className="typography-caption" style={{ textAlign: 'center', marginTop: '10px', color: 'var(--text-secondary)' }}>
                            Interactive demo hosted on Hugging Face Spaces.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
