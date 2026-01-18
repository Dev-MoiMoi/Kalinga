import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Activity } from 'lucide-react';

export default function HealthCheck() {
    const navigate = useNavigate();

    return (
        <div style={{ padding: '1rem', minHeight: '100vh', paddingBottom: '3rem' }}>
            <button
                onClick={() => navigate('/dashboard')}
                style={{
                    background: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '1.1rem',
                    color: 'var(--color-text-muted)',
                    marginBottom: '1.5rem',
                    marginTop: '0.5rem'
                }}
            >
                <ArrowLeft size={24} />
                Bumalik (Back)
            </button>

            <header style={{ marginBottom: '2rem' }}>
                <h1 style={{ color: 'var(--color-primary)', fontSize: '2rem' }}>Health Logs</h1>
                <p className="text-lg" style={{ color: 'var(--color-text-muted)' }}>
                    Monitor your vital signs daily.
                </p>
            </header>

            {/* Input Form */}
            <div className="card" style={{ marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Activity size={24} color="var(--color-primary)" />
                    New Log (Tala)
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Systolic (BP)</label>
                        <input
                            type="number"
                            placeholder="120"
                            className="text-lg"
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: 'var(--radius-md)',
                                border: '1px solid var(--color-border)',
                                textAlign: 'center'
                            }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Diastolic (BP)</label>
                        <input
                            type="number"
                            placeholder="80"
                            className="text-lg"
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: 'var(--radius-md)',
                                border: '1px solid var(--color-border)',
                                textAlign: 'center'
                            }}
                        />
                    </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Blood Sugar (mg/dL)</label>
                    <input
                        type="number"
                        placeholder="Enter value"
                        className="text-lg"
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid var(--color-border)'
                        }}
                    />
                </div>

                <button className="btn btn-primary" style={{ width: '100%', gap: '0.5rem' }}>
                    <Plus size={20} /> Add Log (Mag-tala)
                </button>
            </div>

            {/* History List */}
            <h3 style={{ marginBottom: '1rem', color: 'var(--color-text-muted)' }}>Recent History</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                    { date: 'Today, 8:00 AM', bp: '120/80', sugar: '100 mg/dL', status: 'Normal', color: 'var(--color-success)' },
                    { date: 'Yesterday, 8:15 AM', bp: '135/85', sugar: '110 mg/dL', status: 'Elevated', color: 'var(--color-warning)' },
                    { date: 'Jan 16, 7:55 AM', bp: '118/79', sugar: '98 mg/dL', status: 'Normal', color: 'var(--color-success)' },
                ].map((log, idx) => (
                    <div key={idx} className="card" style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <p style={{ fontWeight: 600, color: 'var(--color-text-main)' }}>BP: {log.bp}</p>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Sugar: {log.sugar}</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>{log.date}</p>
                            <span style={{
                                background: `${log.color}20`,
                                color: log.color,
                                padding: '0.25rem 0.5rem',
                                borderRadius: 'var(--radius-full)',
                                fontSize: '0.8rem',
                                fontWeight: 600
                            }}>
                                {log.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
