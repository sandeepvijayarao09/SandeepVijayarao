import React from 'react';
import { motion } from 'framer-motion';

const ValueCard = ({ title, description }) => {
    return (
        <motion.div
            className="value-card"
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>{title}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{description}</p>
        </motion.div>
    );
};

export default ValueCard;
