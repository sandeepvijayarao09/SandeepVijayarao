import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Divider from '../components/common/Divider';
import './HomePage.css';

// Apple-grade easing
const appleEase = [0.25, 0.1, 0.25, 1.0];
const appleSpring = [0.22, 1, 0.36, 1];

const fadeInUp = {
    hidden: { opacity: 0, y: 60, scale: 0.97, filter: 'blur(8px)' },
    visible: {
        opacity: 1, y: 0, scale: 1, filter: 'blur(0px)',
        transition: { duration: 0.8, ease: appleSpring }
    }
};

const fadeInUpLight = {
    hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
    visible: {
        opacity: 1, y: 0, filter: 'blur(0px)',
        transition: { duration: 0.7, ease: appleEase }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
};

const heroStagger = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.15 }
    }
};

const heroChild = {
    hidden: { opacity: 0, y: 50, filter: 'blur(12px)' },
    visible: {
        opacity: 1, y: 0, filter: 'blur(0px)',
        transition: { duration: 1.0, ease: appleSpring }
    }
};

const tickerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.5, ease: appleEase }
    }
};

const cardReveal = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
        opacity: 1, y: 0, scale: 1,
        transition: { duration: 0.6, ease: appleSpring }
    }
};

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="manifesto-hero">
                <div className="container hero-container">
                    <motion.div
                        className="hero-content"
                        initial="hidden"
                        animate="visible"
                        variants={heroStagger}
                    >
                        <motion.h1 className="hero-traits" variants={heroChild}>
                            Technology Should<br />
                            Work For Everyone.
                        </motion.h1>
                        <motion.p className="hero-statement" variants={heroChild}>
                            AI Researcher. Engineer. Future CEO.<br />
                            I'm building an Intelligent Second Brain — and the company behind it.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Status Ticker */}
            <motion.section
                className="status-ticker"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
            >
                <div className="container ticker-content">
                    <motion.div variants={tickerItem}>
                        <span className="ticker-label">Research:</span>
                        On-Device AI & Intelligent Systems
                    </motion.div>
                    <motion.div variants={tickerItem}>
                        <span className="ticker-label">Published:</span>
                        IEEE AISP 2024
                    </motion.div>
                    <motion.div variants={tickerItem}>
                        <span className="ticker-label">Based in:</span>
                        San Francisco
                    </motion.div>
                </div>
            </motion.section>

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
                        In 2012, I held an iPhone 4s for the first time. That single moment rewired how I saw the world. Technology wasn't just a tool — it was a medium for human expression. From that day, I've had one purpose: build products at that level, and lead the company that ships them.
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
                    variants={fadeInUpLight}
                >
                    <h2 className="narrative-headline">The Thesis.</h2>
                    <p className="narrative-text" style={{ marginBottom: '60px' }}>
                        The next great company won't just build software. It will build intelligence — deeply personal, always available, running on-device. I'm researching the science and engineering the product to make that real.
                    </p>
                    <motion.div
                        className="narrative-grid"
                        style={{ margin: '0 auto' }}
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div className="narrative-card" variants={cardReveal}>
                            <h3 className="narrative-card-title" style={{ color: 'var(--accent-blue)' }}>On-Device AI</h3>
                            <p className="narrative-card-text">Researching efficient model architectures for private, on-device intelligence — AI that lives with you, not on a server.</p>
                        </motion.div>
                        <motion.div className="narrative-card" variants={cardReveal}>
                            <h3 className="narrative-card-title" style={{ color: 'var(--accent-blue)' }}>Consumer Scale</h3>
                            <p className="narrative-card-text">Building products that serve billions — not proofs of concept. Technology for every person, everywhere.</p>
                        </motion.div>
                        <motion.div className="narrative-card" variants={cardReveal}>
                            <h3 className="narrative-card-title" style={{ color: 'var(--accent-blue)' }}>Product Vision</h3>
                            <p className="narrative-card-text">The intersection of deep AI research and consumer intuition. Every product starts with one question: does this make life fundamentally better?</p>
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
                    <h2 className="narrative-headline" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>"Every person deserves<br />a Second Brain."</h2>
                    <p className="narrative-text" style={{ marginBottom: '40px' }}>
                        An AI that remembers everything you've ever learned, surfaces it when you need it, and runs entirely on your device. That's the product. That's the company. And I will build it.
                    </p>
                    <Link to="/about" className="manifesto-cta" style={{ fontSize: '21px' }}>The Full Story ›</Link>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
