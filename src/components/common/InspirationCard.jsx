import React from 'react';
import { motion } from 'framer-motion';

const InspirationCard = ({ name, description }) => {
    return (
        <motion.div
            className="inspiration-card"
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            <h3 style={{ fontWeight: '600' }}>{name}</h3>
            <p className="small-text" style={{ color: 'var(--text-secondary)' }}>{description}</p>
        </motion.div>
    );
};

export default InspirationCard;
