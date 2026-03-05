import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Divider from '../components/common/Divider';
import './AboutPage.css';

const Home = () => {
    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="manifesto-hero">
                <div className="container hero-container">
                    <motion.div
                        className="hero-content"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        <h1 className="hero-traits">
                            Building World-Class Products. <br />
                            Architecting the Future.
                        </h1>
                        <p className="hero-statement">
                            From the moment I held an iPhone 4s in 2012, I knew I wanted to build products that change how people experience technology. I'm on a mission to create an AI-powered Intelligent Second Brain—and ultimately, a consumer technology company that makes a lasting impact.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Status Ticker Section */}
            <section className="status-ticker">
                <div className="container ticker-content">
                    <div>
                        <span className="ticker-label">Interests:</span>
                        Computer Science, AI & Business
                    </div>
                    <div>
                        <span className="ticker-label">Academics:</span>
                        M.S. CS, Northeastern University
                    </div>
                    <div>
                        <span className="ticker-label">Status:</span>
                        Graduate Student & Aspiring Entrepreneur
                    </div>
                </div>
            </section>

            <div className="container">
                <Divider />
            </div>

            {/* Section 2: Where It Started */}
            <section className="narrative-section" style={{ backgroundColor: 'var(--bg-section-alt)', textAlign: 'center' }}>
                <motion.div
                    className="container"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <p className="typography-caption" style={{ marginBottom: '16px', textTransform: 'uppercase' }}>Where It Started</p>
                    <h2 className="narrative-headline">A Spark That Changed Everything.</h2>
                    <p className="narrative-text">
                        We got our first computer when I was five. But it was the iPhone 4s in 2012 that truly ignited my passion for technology and inspired me to build products on the level of Apple.
                    </p>

                    <motion.div className="narrative-grid" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <motion.div className="narrative-card" variants={fadeInUp}>
                            <div className="narrative-card-title">Early Tech Spark</div>
                            <p className="narrative-card-text">First computer at age 5, iPhone 4s at age 9. From that moment, my perspective on technology changed completely. I dedicated school summers to mastering C/C++ and Java.</p>
                        </motion.div>
                        <motion.div className="narrative-card" variants={fadeInUp}>
                            <div className="narrative-card-title">Leadership & Excellence</div>
                            <p className="narrative-card-text">Elected Head Boy by the students. Reached 3rd stage at International Maths Olympiad and National Science Olympiad multiple times. Consistently in the top 5 of my class.</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            <div className="container">
                <Divider />
            </div>

            {/* Section 3: Three Passions */}
            <section className="narrative-section" style={{ backgroundColor: 'var(--bg-color)', textAlign: 'center' }}>
                <motion.div
                    className="container"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <div className="big-stat">3 Passions</div>
                    <h2 className="narrative-headline">Where My Interests Converge.</h2>
                    <p className="narrative-text">
                        I believe the most impactful solutions emerge at the intersection of these fields.
                    </p>
                    <motion.div className="narrative-grid" style={{ maxWidth: '800px', margin: '60px auto 0' }} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <motion.div className="narrative-card" style={{ textAlign: 'center' }} variants={fadeInUp}>
                            <h3 className="narrative-card-title" style={{ color: 'var(--accent-blue)' }}>Computer Science</h3>
                            <p className="narrative-card-text">The foundation. From algorithms to full-stack systems, this is the craft I've been honing since school.</p>
                        </motion.div>
                        <motion.div className="narrative-card" style={{ textAlign: 'center' }} variants={fadeInUp}>
                            <h3 className="narrative-card-title" style={{ color: 'var(--accent-blue)' }}>Artificial Intelligence</h3>
                            <p className="narrative-card-text">The enabler. I envision AI integrated into everyday devices—a personal assistant that works for everyone.</p>
                        </motion.div>
                        <motion.div className="narrative-card" style={{ textAlign: 'center' }} variants={fadeInUp}>
                            <h3 className="narrative-card-title" style={{ color: 'var(--accent-blue)' }}>Business & Entrepreneurship</h3>
                            <p className="narrative-card-text">The goal. Building a consumer technology company with scale, consistency, and significant contribution to the industry.</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            <div className="container">
                <Divider />
            </div>

            {/* Section 4: The Vision */}
            <section className="narrative-section" style={{ backgroundColor: 'var(--bg-section-alt)', textAlign: 'center' }}>
                <motion.div
                    className="container"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <h2 className="narrative-headline">The Intelligent Second Brain.</h2>
                    <p className="narrative-text" style={{ marginBottom: '40px' }}>
                        My vision is to integrate AI into devices with dedicated computational power and storage—capable of accessing and working with all your data, on-device. A true personal assistant that contains everything you've ever learned, read, and experienced. That's the future I'm building toward.
                    </p>
                    <Link to="/about" className="manifesto-cta" style={{ fontSize: '21px' }}>Read My Full Story ›</Link>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
