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
                            I bridge the gap between stochastic models and business models—transforming raw code into scalable, revenue-generating AI products.
                        </p>
                    </motion.div>

                    {/* New Image Section */}
                    <motion.div
                        className="hero-image-container"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src="/profile.jpg"
                            alt="Sandeep Vijayarao"
                            className="hero-image"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Status Ticker Section */}
            <section className="status-ticker">
                <div className="container ticker-content">
                    <div>
                        <span className="ticker-label">Focus:</span>
                        Building Agentic AI & Universal Enterprise Infrastructure
                    </div>
                    <div>
                        <span className="ticker-label">Academics:</span>
                        M.S. CS, Northeastern University
                    </div>
                    <div>
                        <span className="ticker-label">Status:</span>
                        Pre-Seed / Stealth Development
                    </div>
                </div>
            </section>

            <div className="container">
                <Divider />
            </div>

            {/* Section 2: The Foundation */}
            <section className="narrative-section" style={{ backgroundColor: 'var(--bg-section-alt)', textAlign: 'center' }}>
                <motion.div
                    className="container"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <p className="typography-caption" style={{ marginBottom: '16px', textTransform: 'uppercase' }}>The Foundation</p>
                    <h2 className="narrative-headline">Rooted in Discipline.</h2>
                    <p className="narrative-text">
                        Coming from a family background that blended business acumen with professional service, I internalized financial prudence and lifestyle discipline early on.
                    </p>

                    <motion.div className="narrative-grid" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <motion.div className="narrative-card" variants={fadeInUp}>
                            <div className="narrative-card-title">Business Acumen</div>
                            <p className="narrative-card-text">Understanding the market is just as important as building the code. My background ensures every line of code serves a business purpose.</p>
                        </motion.div>
                        <motion.div className="narrative-card" variants={fadeInUp}>
                            <div className="narrative-card-title">Financial Discipline</div>
                            <p className="narrative-card-text">Efficiency isn't just an algorithm; it's a lifestyle. I build systems that optimize resources and maximize impact.</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            <div className="container">
                <Divider />
            </div>

            {/* Section 3: The Intersection */}
            <section className="narrative-section" style={{ backgroundColor: 'var(--bg-color)', textAlign: 'center' }}>
                <motion.div
                    className="container"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <div className="big-stat">3 Domains</div>
                    <h2 className="narrative-headline">Connecting the Dots.</h2>
                    <p className="narrative-text">
                        Real-life solutions don't live in silos. They emerge at the intersection of fields.
                    </p>
                    <motion.div className="narrative-grid" style={{ maxWidth: '800px', margin: '60px auto 0' }} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <motion.div className="narrative-card" style={{ textAlign: 'center' }} variants={fadeInUp}>
                            <h3 className="narrative-card-title" style={{ color: 'var(--accent-blue)' }}>Software Engineering</h3>
                            <p className="narrative-card-text">To know what the market lacks.</p>
                        </motion.div>
                        <motion.div className="narrative-card" style={{ textAlign: 'center' }} variants={fadeInUp}>
                            <h3 className="narrative-card-title" style={{ color: 'var(--accent-blue)' }}>Artificial Intelligence</h3>
                            <p className="narrative-card-text">To provide the automated solution.</p>
                        </motion.div>
                        <motion.div className="narrative-card" style={{ textAlign: 'center' }} variants={fadeInUp}>
                            <h3 className="narrative-card-title" style={{ color: 'var(--accent-blue)' }}>Data Systems</h3>
                            <p className="narrative-card-text">To drive personalization.</p>
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
                    <h2 className="narrative-headline">"The home of innovation."</h2>
                    <p className="narrative-text" style={{ marginBottom: '40px' }}>
                        Inspired by Steve Jobs, I view technology as a tool to advance humanity. My product vision is simple: automation that works for you, from age 12 to 100.
                    </p>
                    <Link to="/about" className="manifesto-cta" style={{ fontSize: '21px' }}>Read the Full Vision ›</Link>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
