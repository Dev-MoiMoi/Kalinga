import { useNavigate } from 'react-router-dom';
import { ArrowLeft, PlayCircle, BookOpen, HelpCircle } from 'lucide-react';

export default function HelpTutorial() {
    const navigate = useNavigate();

    const tutorials = [
        { title: 'Paano mag-Login', description: 'Guide to accessing your account', duration: '2 min' },
        { title: 'Gamitin ang SOS', description: 'Emergency alert tutorial', duration: '1 min' },
        { title: 'Mag-record ng BP', description: 'Logging health vitals', duration: '3 min' },
    ];

    return (
        <div style={{ padding: '1rem', minHeight: '100vh', paddingBottom: '3rem' }}>
            <button
                onClick={() => navigate('/settings')}
                style={{
                    background: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '1.2rem',
                    color: 'var(--color-text-muted)',
                    marginBottom: '1.5rem',
                    marginTop: '0.5rem'
                }}
            >
                <ArrowLeft size={24} />
                Bumalik (Back)
            </button>

            <header style={{ marginBottom: '2rem' }}>
                <h1 style={{ color: 'var(--color-secondary)', fontSize: '2rem' }}>Tulong (Help)</h1>
                <p className="text-xl" style={{ color: 'var(--color-text-muted)' }}>
                    Video Guides & FAQs (UC32)
                </p>
            </header>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {tutorials.map((tut, idx) => (
                    <div key={idx} className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <div style={{
                            width: '60px',
                            height: '60px',
                            background: 'var(--color-border)',
                            borderRadius: 'var(--radius-md)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <PlayCircle size={32} color="var(--color-primary)" />
                        </div>
                        <div>
                            <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{tut.title}</h3>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{tut.description} • {tut.duration}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="card" style={{ marginTop: '2rem', background: '#EFF6FF', border: '1px solid #BFDBFE' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1E40AF' }}>
                    <HelpCircle size={24} /> Need more help?
                </h3>
                <p style={{ marginBottom: '1rem', color: '#1E3A8A' }}>
                    Call our support team for assistance.
                </p>
                <button className="btn" style={{ background: '#2563EB', color: 'white', width: '100%' }}>
                    Call Support
                </button>
            </div>
        </div>
    );
}
