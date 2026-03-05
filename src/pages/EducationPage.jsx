import React from 'react';
import { education } from '../data/portfolioData';
import './EducationPage.css';

const Education = () => {
    return (
        <div className="container">
            <h1 className="typography-section-headline">Education</h1>
            <div className="education-list">
                {education.map((edu) => (
                    <div key={edu.id} className="edu-card">
                        <div className="edu-header">
                            <h3 className="edu-school">{edu.school}</h3>
                            <p className="edu-degree">{edu.degree}</p>
                            {edu.specialization && <span className="edu-specialization">{edu.specialization}</span>}

                            {edu.courses && (
                                <div className="edu-courses">
                                    {edu.courses.slice(0, 6).map((course, index) => (
                                        <span key={index} className="course-pill">{course}</span>
                                    ))}
                                    {edu.courses.length > 6 && <span className="course-pill">+{edu.courses.length - 6} more</span>}
                                </div>
                            )}

                            {edu.achievements && (
                                <div className="edu-courses" style={{ marginTop: edu.courses ? '0' : '0' }}>
                                    {edu.achievements.map((achievement, index) => (
                                        <span key={index} className="course-pill" style={{ background: 'rgba(0, 122, 255, 0.1)', color: 'var(--accent-blue)' }}>🏆 {achievement}</span>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="edu-meta">
                            <span className="edu-year">{edu.year}</span>
                            {/* Assuming location might be added to data later, or just keep year for now */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
