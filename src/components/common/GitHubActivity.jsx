import React from 'react';
import Divider from './Divider';

const GitHubActivity = ({ username }) => {
    return (
        <div style={{ marginTop: '60px' }}>
            <Divider style={{ marginBottom: '60px' }} />
            <div style={{ padding: '20px', background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)' }}>
                <h2 className="typography-headline" style={{ marginBottom: '20px' }}>Engineering Activity</h2>
                <img src={`https://ghchart.rshah.org/${username}`} alt="GitHub Activity Graph" style={{ width: '100%', opacity: 0.8 }} />
            </div>
        </div>
    );
};

export default GitHubActivity;
