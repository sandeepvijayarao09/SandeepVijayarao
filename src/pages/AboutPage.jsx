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

                    <p className="about-text" style={{ marginBottom: '20px' }}>
                        We got our first computer when I was five—interacting with it was engaging and fascinating. However, it was the iPhone 4s I first used in 2012 that truly sparked my deep interest in technology. From that moment, my perspective on tech changed completely. Inspired by Apple's product innovation, I've always wanted to build products on that level. My long-term goal is to start a consumer technology company with scale, consistency, and a significant contribution to the industry.
                    </p>

                    <p className="about-text" style={{ marginBottom: '20px' }}>
                        I attended a school that emphasized corporate values, soft skills, and leadership, preparing us for future business leadership. Advanced mathematics and science classes established a strong foundation that makes complex equations and calculations in computer science effortless. My achievements in school include reaching the 3rd stage at the International Maths Olympiad and National Science Olympiad multiple times, consistently ranking in the top 5, and being elected as <strong>Head Boy</strong> by the students. Through this role, I led teams towards greater purpose and integrated leadership skills into life. Admiration for programming led me to dedicate my school summer vacations to mastering C/C++ and Java.
                    </p>

                    <p className="about-text" style={{ marginBottom: '20px' }}>
                        I pursued my undergraduate in Computer Science and Engineering at <strong>RMK Engineering College, Chennai</strong>. Beyond my coursework, I used platforms like edX, Coursera, and attended developer community sessions from Google, Apple, Microsoft, and Qualcomm. I built projects from the ground up—including a Hospital Management System for a local hospital and a Low-Code/No-Code Development Platform leveraging ChatGPT and Codex. That project awakened me to the larger potential for AI applications and solidified my direction.
                    </p>

                    <p className="about-text" style={{ marginBottom: '20px' }}>
                        Active participation in technical societies like IEEE, CSI, and CTSOC enriched my professional network and introduced me to global R&D opportunities. As a Prime member of IEEE-IAYPC, I was paired with an industry mentor through the Student Mentorship Program, who reviews my work and challenges me with real-world problems. I've completed internships in Android App Development, AI-ML, and DevOps—including at Infosys, which exposed me to industry-standard tools and workflows.
                    </p>

                    <p className="about-text">
                        My vision is to integrate AI into computer systems to achieve the "Personal Assistant" goal—an <strong>Intelligent Second Brain</strong> containing all the information we process, capable of accessing and working with data on-device. To realize this, I pursued my <strong>Master of Science in Computer Science</strong> from the Khoury College of Computer Sciences at <strong>Northeastern University</strong>, currently studying in San Francisco. I am committed to leveraging every opportunity to gain the expertise necessary to build a large-scale consumer technology company.
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
