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
                Vision & Mission
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
                        "The companies that will define the next century are the ones building intelligence — not as a feature, but as a foundation."
                    </p>

                    <p className="about-text" style={{ marginBottom: '20px' }}>
                        My research sits at the intersection of artificial intelligence and consumer technology. I study on-device AI architectures, intelligent knowledge systems, and the computational frameworks needed to make personal AI a reality — not in the cloud, but in the palm of your hand. My work has been published at <strong>IEEE AISP 2024</strong>, and I hold deep expertise across the modern AI stack: from transformer architectures and RAG pipelines to real-time pose estimation and multimodal systems.
                    </p>

                    <p className="about-text" style={{ marginBottom: '20px' }}>
                        But research without product is incomplete. Every system I've built — from Neural Studio, a multimodal AI productivity suite powered by Gemini, to a Low-Code platform generating applications from natural language — was designed to ship. Not to demonstrate. Not to prototype. To ship to real users, solving real problems. That's the difference between a researcher and a builder. I am both.
                    </p>

                    <p className="about-text" style={{ marginBottom: '20px' }}>
                        This conviction didn't start in a lab. It started in 2012, holding an iPhone 4s, understanding for the first time that a product could be a medium for human expression. That moment set the trajectory: I taught myself to code, earned recognition in international olympiads, led as Head Boy, and pursued Computer Science at RMK Engineering College — not as steps on a resume, but as training for the company I intend to build.
                    </p>

                    <p className="about-text" style={{ marginBottom: '20px' }}>
                        At <strong>Northeastern University</strong> in San Francisco, I'm sharpening the blade. Studying at the Khoury College of Computer Sciences, surrounded by the world's most ambitious technologists, in the city where the future is built. Every class, every research project, every line of code serves a singular mission.
                    </p>

                    <p className="about-text">
                        That mission is the <strong>Intelligent Second Brain</strong> — an AI that lives on your device, contains everything you've ever learned, and surfaces knowledge exactly when you need it. Not a chatbot. Not an assistant. A second mind. I will build this product. I will build the company behind it. And I will lead it to become one of the most important technology companies of our generation.
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
                        <li style={{ marginBottom: '20px', fontSize: '18px' }}><strong style={{ color: 'var(--accent-blue)' }}>Lead from the front:</strong> "The CEO must be the best product thinker in the room."</li>
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
