import React from 'react';
import './InfoCard.css';
import { motion } from 'framer-motion';

const Card = ({ title, description, image, link, onClick }) => {
    return (
        <motion.div
            className="card"
            onClick={onClick}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
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
        </motion.div>
    );
};

export default Card;
