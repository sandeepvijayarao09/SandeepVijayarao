import React from 'react';
import { experience } from '../data/portfolioData';
import Divider from '../components/common/Divider';
import TimelineItem from '../components/common/TimelineItem';
import GitHubActivity from '../components/common/GitHubActivity';
import './ExperiencePage.css';

const Experience = () => {
    return (
        <div className="container">
            <h1 className="typography-section-headline">Experience</h1>

            <div className="timeline-container">
                {experience.map((exp) => (
                    <TimelineItem key={exp.id} exp={exp} />
                ))}
            </div>

            {/* GitHub Activity */}
            <GitHubActivity username="sandeepvijayarao" />
        </div>
    );
};

export default Experience;
