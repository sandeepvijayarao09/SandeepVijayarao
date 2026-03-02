import React from 'react';

const ValueCard = ({ title, description }) => {
    return (
        <div className="value-card">
            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>{title}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{description}</p>
        </div>
    );
};

export default ValueCard;
