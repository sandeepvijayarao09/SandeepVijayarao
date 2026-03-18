import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ContactPage.css';

const appleSpring = [0.22, 1, 0.36, 1];
const appleEase = [0.25, 0.1, 0.25, 1.0];

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
        transition: { staggerChildren: 0.1, delayChildren: 0.15 }
    }
};

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.5, ease: appleEase }
    }
};

const formFieldVariant = {
    hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
    visible: {
        opacity: 1, y: 0, filter: 'blur(0px)',
        transition: { duration: 0.4, ease: appleSpring }
    }
};

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        const formData = new FormData(e.target);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch("https://formsubmit.co/ajax/sandeepvijayarao07@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: json
            });

            const result = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: 'Message sent! If this is your first time, please check your email to activate the form.' });
                e.target.reset();
            } else {
                setStatus({ type: 'error', message: result.message || 'Something went wrong. Please try again.' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Network error. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container">
            <motion.h1
                className="typography-section-headline"
                style={{ textAlign: 'center' }}
                initial="hidden"
                animate="visible"
                variants={headingVariants}
            >
                Let's Build.
            </motion.h1>

            <motion.p
                className="typography-body"
                style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', marginBottom: 'var(--spacing-xl)', color: 'var(--text-secondary)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: appleEase, delay: 0.2 }}
            >
                Currently building in stealth. Open to co-founder discussions, investment inquiries, and high-impact engineering roles.
            </motion.p>

            <motion.div
                style={{ maxWidth: '600px', margin: '0 auto var(--spacing-xl)', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '12px' }}
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <motion.a variants={fadeInUp} href="mailto:sandeepvijayarao07@gmail.com" className="typography-body" style={{ color: 'var(--accent-blue)' }}>sandeepvijayarao07@gmail.com</motion.a>
                <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '10px' }}>
                    <a href="https://calendar.app.google/AL3bEPnaT7X5bPkP9" target="_blank" rel="noopener noreferrer" className="typography-body" style={{ color: 'var(--text-primary)', borderBottom: '1px solid var(--accent-blue)' }}>Book a Meeting ›</a>
                    <a href="https://github.com/sandeepvijayarao09" target="_blank" rel="noopener noreferrer" className="typography-body" style={{ color: 'var(--text-primary)', borderBottom: '1px solid var(--accent-blue)' }}>GitHub Profile ›</a>
                    <a href="https://www.linkedin.com/in/sandeepvijayarao/" target="_blank" rel="noopener noreferrer" className="typography-body" style={{ color: 'var(--text-primary)', borderBottom: '1px solid var(--accent-blue)' }}>LinkedIn ›</a>
                </motion.div>
            </motion.div>

            <motion.form
                className="contact-form"
                onSubmit={handleSubmit}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
            >
                {status.message && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, ease: appleSpring }}
                        style={{
                            padding: '12px',
                            marginBottom: '20px',
                            borderRadius: 'var(--radius-md)',
                            background: status.type === 'error' ? 'rgba(255, 59, 48, 0.1)' : 'rgba(52, 199, 89, 0.1)',
                            color: status.type === 'error' ? '#ff3b30' : '#34c759',
                            fontSize: '14px',
                            textAlign: 'center'
                        }}
                    >
                        {status.message}
                    </motion.div>
                )}

                {/* Honeypot to prevent spam */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <input type="hidden" name="_captcha" value="false" />

                <motion.div className="form-group" variants={formFieldVariant}>
                    <label className="form-label">Reason for Contact</label>
                    <div className="select-wrapper">
                        <select name="subject" className="form-input" required defaultValue="">
                            <option value="" disabled>Select an option...</option>
                            <option value="Investment">Investment Opportunity</option>
                            <option value="Consulting">Consulting / Fractional CTO</option>
                            <option value="Speaking">Speaking Inquiry</option>
                            <option value="Collaboration">Dev Collaboration</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </motion.div>

                <motion.div className="form-group" variants={formFieldVariant}>
                    <label className="form-label">Name</label>
                    <input type="text" name="name" className="form-input" placeholder="Your Name" required />
                </motion.div>
                <motion.div className="form-group" variants={formFieldVariant}>
                    <label className="form-label">Email</label>
                    <input type="email" name="email" className="form-input" placeholder="name@example.com" required />
                </motion.div>
                <motion.div className="form-group" variants={formFieldVariant}>
                    <label className="form-label">Message</label>
                    <textarea name="message" className="form-textarea" placeholder="Your message..." required></textarea>
                </motion.div>
                <motion.div
                    style={{ textAlign: 'center' }}
                    variants={formFieldVariant}
                >
                    <motion.button
                        type="submit"
                        className="submit-btn"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </motion.button>
                </motion.div>
            </motion.form>
        </div>
    );
};

export default Contact;
