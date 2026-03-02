import React, { useState } from 'react';
import './ContactPage.css';

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
            // Using FormSubmit.co with your email directly.
            // On the FIRST submission, you will receive an activation email at sandeepvijayarao09@gmail.com.
            // You MUST click "Activate" in that email for this to work permanently.
            const response = await fetch("https://formsubmit.co/ajax/sandeepvijayarao09@gmail.com", {
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
            <h1 className="typography-section-headline" style={{ textAlign: 'center' }}>Let's Build.</h1>
            <p className="typography-body" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', marginBottom: 'var(--spacing-xl)', color: 'var(--text-secondary)' }}>
                Currently building in stealth. Open to co-founder discussions, investment inquiries, and high-impact engineering roles.
            </p>

            <div style={{ maxWidth: '600px', margin: '0 auto var(--spacing-xl)', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a href="mailto:sandeepvijayarao09@gmail.com" className="typography-body" style={{ color: 'var(--accent-blue)' }}>sandeepvijayarao09@gmail.com</a>
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '10px' }}>
                    <a href="https://calendar.app.google/AL3bEPnaT7X5bPkP9" target="_blank" rel="noopener noreferrer" className="typography-body" style={{ color: 'var(--text-primary)', borderBottom: '1px solid var(--accent-blue)' }}>Book a Meeting ›</a>
                    <a href="https://github.com/sandeepvijayarao" target="_blank" rel="noopener noreferrer" className="typography-body" style={{ color: 'var(--text-primary)', borderBottom: '1px solid var(--accent-blue)' }}>GitHub Profile ›</a>
                    <a href="https://www.linkedin.com/in/sandeepvijayarao/" target="_blank" rel="noopener noreferrer" className="typography-body" style={{ color: 'var(--text-primary)', borderBottom: '1px solid var(--accent-blue)' }}>LinkedIn ›</a>
                </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
                {status.message && (
                    <div style={{
                        padding: '12px',
                        marginBottom: '20px',
                        borderRadius: 'var(--radius-md)',
                        background: status.type === 'error' ? 'rgba(255, 59, 48, 0.1)' : 'rgba(52, 199, 89, 0.1)',
                        color: status.type === 'error' ? '#ff3b30' : '#34c759',
                        fontSize: '14px',
                        textAlign: 'center'
                    }}>
                        {status.message}
                    </div>
                )}

                {/* Honeypot to prevent spam */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                {/* Disable Captcha for cleaner look (optional, spam protection will decrease) */}
                <input type="hidden" name="_captcha" value="false" />

                <div className="form-group">
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
                </div>

                <div className="form-group">
                    <label className="form-label">Name</label>
                    <input type="text" name="name" className="form-input" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="email" name="email" className="form-input" placeholder="name@example.com" required />
                </div>
                <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea name="message" className="form-textarea" placeholder="Your message..." required></textarea>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <button type="submit" className="submit-btn" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
