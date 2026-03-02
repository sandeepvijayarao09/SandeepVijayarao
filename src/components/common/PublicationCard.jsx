import React from 'react';

const PublicationCard = ({ pub }) => {
    return (
        <div className="pub-item">
            <span className="typography-caption" style={{
                textTransform: 'uppercase',
                color: 'var(--accent-blue)',
                fontWeight: '600',
                fontSize: '11px',
                marginBottom: '4px',
                display: 'block'
            }}>
                {pub.type || 'paper'}
            </span>
            <h3 className="typography-title">{pub.title}</h3>
            <p className="typography-body" style={{ color: 'var(--text-secondary)', marginTop: '4px' }}>
                {pub.venue}, {pub.date}
            </p>
            <a href={pub.link} className="typography-caption" style={{ color: 'var(--accent-blue)', marginTop: '8px', display: 'inline-block' }}>
                {pub.type === 'dataset' ? 'View Dataset ›' : 'Read Paper ›'}
            </a>
        </div>
    );
};

export default PublicationCard;
