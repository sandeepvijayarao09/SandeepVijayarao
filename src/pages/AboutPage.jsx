import React from 'react';
import { motion } from 'framer-motion';
import Divider from '../components/common/Divider';
import ValueCard from '../components/common/ValueCard';
import InspirationCard from '../components/common/InspirationCard';
import './AboutPage.css';

const About = () => {
    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const sectionVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    return (
        <div className="container" style={{ paddingBottom: '100px' }}>
            <motion.h1
                className="typography-section-headline"
                style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)', marginTop: '60px' }}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
            >
                The Operator/’s Mindset
            </motion.h1>

            <motion.div
                className="about-section"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                {/* 1. Bio Narrative */}
                <motion.div className="about-block" variants={sectionVariant}>
                    <p className="about-intro" style={{ fontSize: '24px', lineHeight: '1.5', textAlign: 'center', maxWidth: '900px', margin: '0 auto 60px' }}>
                        "Principled Architect of Intelligent Futures"
                    </p>
                    <p className="about-text">
                        I am a Computer Science graduate student at Northeastern University and an AI engineer with a background in building real-time systems (IEEE AISP 2024). Formerly at Trominosoft and Infosys, I now focus on <strong>'Zero to One'</strong> product development, combining deep technical expertise in LLMs and NLP with a founder's discipline.
                    </p>
                </motion.div>

                {/* 2. Core Values */}
                <Divider style={{ margin: '60px 0' }} />
                <motion.div className="about-block" variants={sectionVariant}>
                    <p className="typography-caption" style={{ textTransform: 'uppercase', marginBottom: '20px' }}>The Foundation</p>
                    <h2 className="typography-headline" style={{ marginBottom: '30px' }}>Core Values</h2>
                    <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
                        <ValueCard title="Integrity" description="&quot;Code doesn't lie. I build transparent, honest systems.&quot;" />
                        <ValueCard title="Commitment" description="&quot;Unwavering dedication to solving the problem, no matter the difficulty.&quot;" />
                        <ValueCard title="Honesty" description="&quot;Truth in engineering and business practices.&quot;" />
                        <ValueCard title="Focus" description="&quot;Deep work and signal over noise.&quot;" />
                    </div>
                </motion.div>

                {/* 3. Guiding Principles */}
                <Divider style={{ margin: '60px 0' }} />
                <motion.div className="about-block" variants={sectionVariant}>
                    <p className="typography-caption" style={{ textTransform: 'uppercase', marginBottom: '20px' }}>The Logic</p>
                    <h2 className="typography-headline" style={{ marginBottom: '30px' }}>Guiding Principles</h2>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '20px', fontSize: '18px' }}><strong style={{ color: 'var(--accent-blue)' }}>Product First:</strong> "Technology must serve a human purpose."</li>
                        <li style={{ marginBottom: '20px', fontSize: '18px' }}><strong style={{ color: 'var(--accent-blue)' }}>Result Based:</strong> "Measured by shipped products, not just effort."</li>
                        <li style={{ marginBottom: '20px', fontSize: '18px' }}><strong style={{ color: 'var(--accent-blue)' }}>Business Oriented:</strong> "Building for economic viability and scale."</li>
                    </ul>
                </motion.div>

                {/* 4. Inspirations */}
                <Divider style={{ margin: '60px 0' }} />
                <motion.div className="about-block" variants={sectionVariant}>
                    <p className="typography-caption" style={{ textTransform: 'uppercase', marginBottom: '20px' }}>The Fuel</p>
                    <h2 className="typography-headline" style={{ marginBottom: '30px' }}>Inspirations</h2>
                    <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
                        <InspirationCard name="Steve Jobs" description="Fusion of Art & Technology." />
                        <InspirationCard name="Virat Kohli" description="Relentless consistency and discipline." />
                        <InspirationCard name="Pawan Kalyan" description="Servant leadership and integrity." />
                    </div>
                </motion.div>

                {/* 5. Discipline */}
                <Divider style={{ margin: '60px 0' }} />
                <motion.div className="about-block" variants={sectionVariant}>
                    <h2 className="typography-headline" style={{ marginBottom: '30px' }}>Discipline</h2>
                    <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                        <div style={{ flex: 1 }}>
                            <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>Financial</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Lean operations; high ROI focus.</p>
                        </div>
                        <div style={{ flex: 1 }}>
                            <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>Lifestyle</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Physical and mental rigor for long-term performance.</p>
                        </div>
                    </div>
                </motion.div>

            </motion.div>
        </div>
    );
};

export default About;
