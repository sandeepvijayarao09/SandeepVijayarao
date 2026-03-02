import React from 'react';

const InspirationCard = ({ name, description }) => {
    return (
        <div className="inspiration-card">
            <h3 style={{ fontWeight: '600' }}>{name}</h3>
            <p className="small-text" style={{ color: 'var(--text-secondary)' }}>{description}</p>
        </div>
    );
};

export default InspirationCard;
