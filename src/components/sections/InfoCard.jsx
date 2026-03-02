import React from 'react';
import './InfoCard.css';

const Card = ({ title, description, image, link, onClick }) => {
    return (
        <div className="card" onClick={onClick}>
            {image && (
                <div className="card-image-container">
                    <img src={image} alt={title} className="card-image" />
                </div>
            )}
            <div className="card-content">
                <h3 className="typography-title card-title">{title}</h3>
                <p className="typography-body card-desc">{description}</p>
                {link && <div className="card-link">Learn more ›</div>}
            </div>
        </div>
    );
};

export default Card;
