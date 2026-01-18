import { useNavigate } from 'react-router-dom';

export default function Landing() {
    const navigate = useNavigate();

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'var(--color-primary-light)',
                    borderRadius: '20px',
                    margin: '0 auto 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.5rem',
                    color: 'white',
                    boxShadow: 'var(--shadow-lg)'
                }}>
                    K
                </div>
                <h1 style={{ color: 'var(--color-primary)', fontSize: '2.5rem', marginBottom: '0.5rem' }}>Kalinga</h1>
                <p className="text-xl" style={{ color: 'var(--color-text-muted)', margin: '0 2rem' }}>
                    Empowering Seniors with Care and Connection
                </p>
            </header>

            <main style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '0 1rem' }}>
                <button
                    onClick={() => navigate('/login')}
                    className="btn btn-primary text-xl"
                    style={{ width: '100%', padding: '1rem' }}
                >
                    Mag-login (Login)
                </button>

                <button
                    onClick={() => navigate('/register')}
                    className="btn btn-outline text-xl"
                    style={{ width: '100%', padding: '1rem' }}
                >
                    Mag-rehistro (Register)
                </button>

                <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                    <button
                        onClick={() => navigate('/sos')}
                        className="btn"
                        style={{
                            background: 'var(--color-danger)',
                            color: 'white',
                            width: '100%',
                            fontSize: '1.25rem',
                            fontWeight: 700,
                            padding: '1.25rem'
                        }}
                    >
                        EMERGENCY SOS
                    </button>
                    <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                        Tap for immediate help / Tapikin para sa tulong
                    </p>
                </div>
            </main>

            <footer style={{ marginTop: 'auto', padding: '2rem 0', textAlign: 'center' }}>
                <p style={{ color: 'var(--color-text-muted)' }}>Version 1.0.0</p>
            </footer>
        </div>
    );
}
