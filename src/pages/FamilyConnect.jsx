import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Phone, Video, MessageCircle } from 'lucide-react';

export default function FamilyConnect() {
    const navigate = useNavigate();

    const contacts = [
        { name: 'Maria (Anak)', role: 'Caregiver', status: 'Online' },
        { name: 'Dr. Santos', role: 'Cardiologist', status: 'Offline' },
        { name: 'Pedro (Apo)', role: 'Family', status: 'Online' }
    ];

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
                <h1 style={{ color: '#8B5CF6', fontSize: '2rem' }}>Pamilya & Doktor</h1>
                <p className="text-lg" style={{ color: 'var(--color-text-muted)' }}>
                    Stay connected with your loved ones.
                </p>
            </header>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {contacts.map((contact, idx) => (
                    <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderLeft: idx === 0 ? '5px solid var(--color-primary)' : '1px solid var(--color-border)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                background: '#E2E8F0',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                color: '#64748B'
                            }}>
                                {contact.name[0]}
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{contact.name}</h3>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{contact.role} • {contact.status}</p>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem' }}>
                            <button className="btn" style={{ background: '#EEF2FF', color: '#6366F1', padding: '0.75rem' }}>
                                <Phone size={24} />
                            </button>
                            <button className="btn" style={{ background: '#ECFDF5', color: '#10B981', padding: '0.75rem' }}>
                                <MessageCircle size={24} />
                            </button>
                            <button
                                className="btn"
                                style={{ background: '#FFF7ED', color: '#F97316', padding: '0.75rem' }}
                                onClick={() => idx === 1 && navigate('/teleconsult')}
                            >
                                <Video size={24} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
