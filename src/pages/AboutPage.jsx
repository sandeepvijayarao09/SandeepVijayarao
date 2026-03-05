import React from 'react';
import { motion } from 'framer-motion';
import Divider from '../components/common/Divider';
import ValueCard from '../components/common/ValueCard';
import InspirationCard from '../components/common/InspirationCard';
import './AboutPage.css';

const About = () => {
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
                The Journey
            </motion.h1>

            <motion.div
                className="about-section"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                {/* 1. Visionary Narrative */}
                <motion.div className="about-block" variants={sectionVariant}>
                    <p className="about-intro" style={{ fontSize: '28px', lineHeight: '1.5', textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px', fontWeight: '600' }}>
                        "I believe every person on this planet deserves technology that thinks with them, not for them."
                    </p>

                    <p className="about-text" style={{ marginBottom: '20px' }}>
                        It started with a single device. In 2012, I used an iPhone 4s for the first time — and from that moment, everything changed. I wasn't just fascinated by technology; I was consumed by the question of what it could become. The elegance of Apple's vision — a product so intuitive it disappears — became my north star.
                    </p>

                    <p className="about-text" style={{ marginBottom: '20px' }}>
                        That obsession drove every decision since. I taught myself to code during school vacations. I competed in international olympiads. I led as Head Boy. But these weren't checklist items — they were expressions of a deeper conviction: that technology, when built with intention, transforms lives.
                    </p>

                    <p className="about-text" style={{ marginBottom: '20px' }}>
                        Through my undergraduate in Computer Science, I didn't just study — I built. A Hospital Management System for a real hospital. A Low-Code platform that evolved into an AI-powered development tool. Each project sharpened the same question: how do we make technology truly personal?
                    </p>

                    <p className="about-text" style={{ marginBottom: '20px' }}>
                        That question became my thesis. Internships at companies like Infosys and Trominosoft taught me how the industry operates. Research published at IEEE taught me where the frontier lies. Active participation in global technical communities showed me the scale of what's possible.
                    </p>

                    <p className="about-text">
                        Now, at Northeastern University in San Francisco, I'm building toward the answer: the <strong>Intelligent Second Brain</strong> — an AI that lives on your device, remembers everything you've learned, and surfaces knowledge exactly when you need it. Not a chatbot. Not an assistant. A second mind. This is the product. This is the company. This is my life's work.
                    </p>
                </motion.div>

                {/* 2. Core Values */}
                <Divider style={{ margin: '60px 0' }} />
                <motion.div className="about-block" variants={sectionVariant}>
                    <p className="typography-caption" style={{ textTransform: 'uppercase', marginBottom: '20px' }}>The Foundation</p>
                    <h2 className="typography-headline" style={{ marginBottom: '30px' }}>Core Values</h2>
                    <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
                        <ValueCard title="Integrity" description="&quot;Build things that are honest. No shortcuts, no illusions.&quot;" />
                        <ValueCard title="Conviction" description="&quot;Have the courage to pursue what you believe in, even when others don't see it yet.&quot;" />
                        <ValueCard title="Craft" description="&quot;Every detail matters. The product is the strategy.&quot;" />
                        <ValueCard title="Focus" description="&quot;Say no to a thousand things to say yes to the one that matters.&quot;" />
                    </div>
                </motion.div>

                {/* 3. Guiding Principles */}
                <Divider style={{ margin: '60px 0' }} />
                <motion.div className="about-block" variants={sectionVariant}>
                    <p className="typography-caption" style={{ textTransform: 'uppercase', marginBottom: '20px' }}>The Philosophy</p>
                    <h2 className="typography-headline" style={{ marginBottom: '30px' }}>How I Think</h2>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '20px', fontSize: '18px' }}><strong style={{ color: 'var(--accent-blue)' }}>Start with the human:</strong> "Technology exists to serve people, not the other way around."</li>
                        <li style={{ marginBottom: '20px', fontSize: '18px' }}><strong style={{ color: 'var(--accent-blue)' }}>Ship, don't theorize:</strong> "Ideas are worthless until they're in someone's hands."</li>
                        <li style={{ marginBottom: '20px', fontSize: '18px' }}><strong style={{ color: 'var(--accent-blue)' }}>Think in decades:</strong> "Build for where the world is going, not where it is."</li>
                    </ul>
                </motion.div>

                {/* 4. Inspirations */}
                <Divider style={{ margin: '60px 0' }} />
                <motion.div className="about-block" variants={sectionVariant}>
                    <p className="typography-caption" style={{ textTransform: 'uppercase', marginBottom: '20px' }}>The Fuel</p>
                    <h2 className="typography-headline" style={{ marginBottom: '30px' }}>Inspirations</h2>
                    <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
                        <InspirationCard name="Steve Jobs" description="The intersection of technology and liberal arts." />
                        <InspirationCard name="Virat Kohli" description="Relentless pursuit of excellence under pressure." />
                        <InspirationCard name="Pawan Kalyan" description="Servant leadership and principled conviction." />
                    </div>
                </motion.div>

                {/* 5. Discipline */}
                <Divider style={{ margin: '60px 0' }} />
                <motion.div className="about-block" variants={sectionVariant}>
                    <h2 className="typography-headline" style={{ marginBottom: '30px' }}>Discipline</h2>
                    <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                        <div style={{ flex: 1 }}>
                            <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>Physical</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Peak performance demands peak health. No compromises.</p>
                        </div>
                        <div style={{ flex: 1 }}>
                            <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>Mental</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Clarity of thought. Deep focus. Long-term thinking over short-term noise.</p>
                        </div>
                    </div>
                </motion.div>

            </motion.div>
        </div>
    );
};

export default About;
