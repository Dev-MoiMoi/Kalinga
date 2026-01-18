import { useNavigate } from 'react-router-dom';
import {
    HeartPulse,
    Building2,
    Users,
    Settings,
    Bell
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Dashboard() {
    const navigate = useNavigate();
    const { t } = useTheme();

    const menuItems = [
        {
            title: t('health'),
            subtitle: 'Health & Vitals',
            icon: <HeartPulse size={32} />,
            color: 'var(--color-primary)',
            path: '/health'
        },
        {
            title: t('services'),
            subtitle: 'Govt Services',
            icon: <Building2 size={32} />,
            color: 'var(--color-secondary)',
            path: '/services'
        },
        {
            title: t('family'),
            subtitle: 'Family & Chat',
            icon: <Users size={32} />,
            color: '#8B5CF6',
            path: '/family'
        },
        {
            title: t('settings'),
            subtitle: 'Accessibility',
            icon: <Settings size={32} />,
            color: 'var(--color-text-muted)',
            path: '/settings'
        }
    ];

    return (
        <div style={{ padding: '1rem', paddingBottom: '5rem' }}>
            <header style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '2rem'
            }}>
                <div>
                    <h2 style={{ marginBottom: '0', color: 'var(--color-primary-dark)' }}>Magandang Araw!</h2>
                    <p className="text-lg" style={{ color: 'var(--color-text-muted)' }}>Lola Rosa</p>
                </div>
                <div style={{ position: 'relative' }}>
                    <Bell size={28} />
                    <span style={{
                        position: 'absolute',
                        top: -2,
                        right: -2,
                        width: '12px',
                        height: '12px',
                        background: 'var(--color-danger)',
                        borderRadius: '50%'
                    }} />
                </div>
            </header>

            <section style={{ marginBottom: '2rem' }}>
                <div
                    onClick={() => navigate('/medicines')}
                    className="card"
                    style={{
                        background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))',
                        color: 'white',
                        border: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        cursor: 'pointer'
                    }}
                >
                    <p style={{ opacity: 0.9, marginBottom: '0.5rem' }}>Oras ng Gamot (Next Med)</p>
                    <h1 style={{ marginBottom: '0.5rem', fontSize: '2.5rem' }}>2:00 PM</h1>
                    <p style={{ fontWeight: 600, fontSize: '1.2rem' }}>Amlodipine (10mg)</p>
                    <button className="btn" style={{
                        marginTop: '1rem',
                        background: 'white',
                        color: 'var(--color-primary-dark)',
                        fontSize: '0.9rem'
                    }}>
                        Mark as Taken (Ininom na)
                    </button>
                </div>
            </section>

            <section className="grid-cols-2">
                {menuItems.map((item, index) => (
                    <button
                        key={index}
                        className="card"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            height: '160px',
                            border: `2px solid ${item.color}20`,
                            textAlign: 'center',
                            cursor: 'pointer',
                            transition: 'transform 0.1s'
                        }}
                        onClick={() => navigate(item.path)}
                    >
                        <div style={{
                            padding: '0.75rem',
                            borderRadius: '50%',
                            background: `${item.color}15`,
                            color: item.color
                        }}>
                            {item.icon}
                        </div>
                        <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-text-main)' }}>{item.title}</span>
                        <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{item.subtitle}</span>
                    </button>
                ))}
            </section>

            <button
                className="btn"
                onClick={() => navigate('/sos')}
                style={{
                    position: 'fixed',
                    bottom: '1rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--color-danger)',
                    color: 'white',
                    boxShadow: 'var(--shadow-lg)',
                    zIndex: 50,
                    padding: '0.75rem 2rem',
                    display: 'flex',
                    gap: '0.5rem',
                    width: '90%',
                    maxWidth: '400px'
                }}
            >
                <HeartPulse size={20} />
                {t('emergency')}
            </button>
        </div>
    );
}
