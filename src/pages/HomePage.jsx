import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Divider from '../components/common/Divider';
import './AboutPage.css';

const Home = () => {
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
                            Technology Should<br />
                            Work For Everyone.
                        </h1>
                        <p className="hero-statement">
                            I'm building the future of personal computing — where AI doesn't just assist, it understands. An Intelligent Second Brain for every person on the planet.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Status Ticker */}
            <section className="status-ticker">
                <div className="container ticker-content">
                    <div>
                        <span className="ticker-label">Mission:</span>
                        Consumer Technology at Scale
                    </div>
                    <div>
                        <span className="ticker-label">Academics:</span>
                        M.S. Computer Science — Northeastern University
                    </div>
                    <div>
                        <span className="ticker-label">Location:</span>
                        San Francisco
                    </div>
                </div>
            </section>

            <div className="container">
                <Divider />
            </div>

            {/* The Origin */}
            <section className="narrative-section" style={{ backgroundColor: 'var(--bg-section-alt)', textAlign: 'center' }}>
                <motion.div
                    className="container"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <p className="typography-caption" style={{ marginBottom: '16px', textTransform: 'uppercase' }}>The Origin</p>
                    <h2 className="narrative-headline">One Device Changed Everything.</h2>
                    <p className="narrative-text">
                        In 2012, I held an iPhone 4s for the first time. That single moment rewired how I saw the world. Technology wasn't just a tool — it was a medium for human expression. From that day, I've had one goal: build products at that level.
                    </p>
                </motion.div>
            </section>

            <div className="container">
                <Divider />
            </div>

            {/* The Thesis */}
            <section className="narrative-section" style={{ backgroundColor: 'var(--bg-color)', textAlign: 'center' }}>
                <motion.div
                    className="container"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <h2 className="narrative-headline">The Thesis.</h2>
                    <p className="narrative-text" style={{ marginBottom: '60px' }}>
                        The next great company won't just build software. It will build intelligence — deeply personal, always available, running on-device.
                    </p>
                    <motion.div className="narrative-grid" style={{ maxWidth: '900px', margin: '0 auto' }} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <motion.div className="narrative-card" style={{ textAlign: 'center' }} variants={fadeInUp}>
                            <h3 className="narrative-card-title" style={{ color: 'var(--accent-blue)' }}>On-Device AI</h3>
                            <p className="narrative-card-text">Intelligence that lives with you, not on a server. Private, fast, always available.</p>
                        </motion.div>
                        <motion.div className="narrative-card" style={{ textAlign: 'center' }} variants={fadeInUp}>
                            <h3 className="narrative-card-title" style={{ color: 'var(--accent-blue)' }}>Consumer Scale</h3>
                            <p className="narrative-card-text">Technology for the billion, not the few. Products that work for everyone, everywhere.</p>
                        </motion.div>
                        <motion.div className="narrative-card" style={{ textAlign: 'center' }} variants={fadeInUp}>
                            <h3 className="narrative-card-title" style={{ color: 'var(--accent-blue)' }}>Product Vision</h3>
                            <p className="narrative-card-text">Where engineering meets intention. Every product I build starts with a question: does this make life better?</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            <div className="container">
                <Divider />
            </div>

            {/* The Vision */}
            <section className="narrative-section" style={{ backgroundColor: 'var(--bg-section-alt)', textAlign: 'center' }}>
                <motion.div
                    className="container"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <h2 className="narrative-headline" style={{ fontSize: '56px' }}>"Every person deserves<br />a Second Brain."</h2>
                    <p className="narrative-text" style={{ marginBottom: '40px' }}>
                        An AI that remembers everything you've ever learned, surfaces it when you need it, and works entirely on your device. That's the product. That's the company.
                    </p>
                    <Link to="/about" className="manifesto-cta" style={{ fontSize: '21px' }}>The Full Story ›</Link>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
