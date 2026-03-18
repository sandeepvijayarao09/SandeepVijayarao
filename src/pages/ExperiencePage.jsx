import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/portfolioData';
import Divider from '../components/common/Divider';
import TimelineItem from '../components/common/TimelineItem';
import GitHubActivity from '../components/common/GitHubActivity';
import './ExperiencePage.css';

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
        transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
};

const timelineVariant = {
    hidden: { opacity: 0, x: -40, filter: 'blur(4px)' },
    visible: {
        opacity: 1, x: 0, filter: 'blur(0px)',
        transition: { duration: 0.6, ease: appleSpring }
    }
};

const githubVariant = {
    hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
    visible: {
        opacity: 1, y: 0, filter: 'blur(0px)',
        transition: { duration: 0.7, ease: appleSpring }
    }
};

const Experience = () => {
    return (
        <div className="container">
            <motion.h1
                className="typography-section-headline"
                initial="hidden"
                animate="visible"
                variants={headingVariants}
            >
                Experience
            </motion.h1>

            <motion.div
                className="timeline-container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
            >
                {experience.map((exp) => (
                    <motion.div key={exp.id} variants={timelineVariant}>
                        <TimelineItem exp={exp} />
                    </motion.div>
                ))}
            </motion.div>

            {/* GitHub Activity */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={githubVariant}
            >
                <GitHubActivity username="sandeepvijayarao09" />
            </motion.div>
        </div>
    );
};

export default Experience;
