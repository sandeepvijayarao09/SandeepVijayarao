import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ exp }) => {
    return (
        <motion.div
            className="timeline-item"
            whileHover={{ x: 4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            <div className="timeline-marker"></div>
            <div className="timeline-content">
                <span className="timeline-date">{exp.dates}</span>
                <h2 className="typography-title">{exp.role}</h2>
                <h3 className="typography-body" style={{ color: 'var(--text-secondary)', marginBottom: '12px' }}>{exp.company}</h3>
                <p className="typography-body" style={{ marginBottom: '16px' }}>{exp.description}</p>

                {/* Interactive Tech Stack */}
                <div className="tech-stack-container">
                    {exp.techStack && exp.techStack.map((tech, index) => (
                        <motion.span
                            key={index}
                            className="tech-pill"
                            whileHover={{ scale: 1.08, y: -2 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default TimelineItem;
