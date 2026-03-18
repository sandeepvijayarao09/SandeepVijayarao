import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/portfolioData';
import './EducationPage.css';

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
        transition: { staggerChildren: 0.15, delayChildren: 0.15 }
    }
};

const cardVariant = {
    hidden: { opacity: 0, y: 40, scale: 0.97, filter: 'blur(4px)' },
    visible: {
        opacity: 1, y: 0, scale: 1, filter: 'blur(0px)',
        transition: { duration: 0.6, ease: appleSpring }
    }
};

const pillStagger = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.04, delayChildren: 0.2 }
    }
};

const pillVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1, scale: 1,
        transition: { duration: 0.3, ease: appleSpring }
    }
};

const Education = () => {
    return (
        <div className="container">
            <motion.h1
                className="typography-section-headline"
                initial="hidden"
                animate="visible"
                variants={headingVariants}
            >
                Education
            </motion.h1>

            <motion.div
                className="education-list"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
            >
                {education.map((edu) => (
                    <motion.div key={edu.id} className="edu-card" variants={cardVariant}>
                        <div className="edu-header">
                            <h3 className="edu-school">{edu.school}</h3>
                            <p className="edu-degree">{edu.degree}</p>
                            {edu.specialization && <span className="edu-specialization">{edu.specialization}</span>}

                            {edu.courses && (
                                <motion.div
                                    className="edu-courses"
                                    variants={pillStagger}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    {edu.courses.slice(0, 6).map((course, index) => (
                                        <motion.span key={index} className="course-pill" variants={pillVariant}>{course}</motion.span>
                                    ))}
                                    {edu.courses.length > 6 && <motion.span className="course-pill" variants={pillVariant}>+{edu.courses.length - 6} more</motion.span>}
                                </motion.div>
                            )}
                        </div>
                        <div className="edu-meta">
                            <span className="edu-year">{edu.year}</span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Education;
