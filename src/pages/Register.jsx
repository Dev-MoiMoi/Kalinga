import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Register() {
    const navigate = useNavigate();

    return (
        <div style={{ padding: '1rem', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <button
                onClick={() => navigate('/')}
                style={{
                    background: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '1.1rem',
                    color: 'var(--color-text-muted)',
                    marginBottom: '2rem'
                }}
            >
                <ArrowLeft size={24} />
                Bumalik (Back)
            </button>

            <header style={{ marginBottom: '2rem' }}>
                <h1 style={{ color: 'var(--color-primary)' }}>Gumawa ng Account</h1>
                <p className="text-xl" style={{ color: 'var(--color-text-muted)' }}>
                    Create your account for personalized care.
                </p>
            </header>

            <div className="card" style={{ background: 'var(--color-surface)', textAlign: 'center', padding: '2rem' }}>
                <p style={{ marginBottom: '1rem' }}>
                    This registration form would connect to the Health Management Module (UC01), collecting:
                </p>
                <ul style={{ textAlign: 'left', marginBottom: '1.5rem', paddingLeft: '1.5rem', lineHeight: '2' }}>
                    <li>Personal Information</li>
                    <li>Senior Citizen ID</li>
                    <li>Emergency Contacts</li>
                    <li>Medical History</li>
                </ul>

                <button
                    className="btn btn-primary text-xl"
                    onClick={() => navigate('/dashboard')}
                    style={{ width: '100%' }}
                >
                    Simulate Registration
                </button>
            </div>
        </div>
    );
}
