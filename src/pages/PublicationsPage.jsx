import React from 'react';
import { publications } from '../data/portfolioData';
import PublicationCard from '../components/common/PublicationCard';
import './PublicationsPage.css';

const Publications = () => {
    return (
        <div className="container">
            <h1 className="typography-section-headline">Publications & Patents</h1>

            <div style={{ marginBottom: 'var(--spacing-xxl)' }}>
                <h2 className="typography-headline" style={{ marginBottom: 'var(--spacing-lg)' }}>Selected Publications</h2>
                {publications.map((pub) => (
                    <PublicationCard key={pub.id} pub={pub} />
                ))}
            </div>


        </div>
    );
};

export default Publications;
