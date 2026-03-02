import React from 'react';

const TimelineItem = ({ exp }) => {
    return (
        <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
                <span className="timeline-date">{exp.dates}</span>
                <h2 className="typography-title">{exp.role}</h2>
                <h3 className="typography-body" style={{ color: 'var(--text-secondary)', marginBottom: '12px' }}>{exp.company}</h3>
                <p className="typography-body" style={{ marginBottom: '16px' }}>{exp.description}</p>

                {/* Interactive Tech Stack */}
                <div className="tech-stack-container">
                    {exp.techStack && exp.techStack.map((tech, index) => (
                        <span key={index} className="tech-pill">{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TimelineItem;
