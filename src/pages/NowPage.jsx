import React from 'react';
import { now } from '../data/portfolioData';

const Now = () => {
    return (
        <div className="container">
            <h1 className="typography-section-headline" style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>Now</h1>

            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <div style={{
                    background: 'var(--bg-card)',
                    padding: '40px',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--divider-color)',
                    textAlign: 'center'
                }}>
                    <p className="typography-caption" style={{ marginBottom: '16px', color: 'var(--text-secondary)' }}>UPDATED {now.updated}</p>

                    <h2 className="typography-headline" style={{ marginBottom: '24px' }}>What I'm focused on.</h2>

                    <p className="typography-body" style={{ marginBottom: 'var(--spacing-lg)', fontSize: '20px' }}>
                        {now.focus}
                    </p>

                    <hr style={{ border: '0', borderTop: '1px solid var(--divider-color)', margin: '30px 0' }} />

                    <div style={{ display: 'grid', gap: '20px', textAlign: 'left' }}>
                        <div>
                            <span className="typography-caption" style={{ display: 'block', marginBottom: '4px' }}>CURRENT PROJECT</span>
                            <span className="typography-body" style={{ fontWeight: '600' }}>{now.currentProject}</span>
                        </div>
                        <div>
                            <span className="typography-caption" style={{ display: 'block', marginBottom: '4px' }}>READING</span>
                            <span className="typography-body" style={{ fontWeight: '600' }}>{now.reading}</span>
                        </div>
                        <div>
                            <span className="typography-caption" style={{ display: 'block', marginBottom: '4px' }}>LOCATION</span>
                            <span className="typography-body" style={{ fontWeight: '600' }}>{now.location}</span>
                        </div>
                    </div>
                </div>

                <p className="typography-caption" style={{ textAlign: 'center', marginTop: '40px', color: 'var(--text-secondary)' }}>
                    Inspired by <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'underline' }}>nownownow.com</a>
                </p>
            </div>
        </div>
    );
};

export default Now;
