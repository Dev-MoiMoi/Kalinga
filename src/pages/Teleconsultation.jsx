import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Video, Mic, Calendar, Clock, Download, X } from 'lucide-react';
import { useState } from 'react';

export default function Teleconsultation() {
    const navigate = useNavigate();
    const [activeCall, setActiveCall] = useState(false);

    return (
        <div style={{ padding: '1rem', minHeight: '100vh', paddingBottom: '3rem' }}>
            <button
                onClick={() => navigate('/dashboard')}
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

            {!activeCall ? (
                <>
                    <header style={{ marginBottom: '2rem' }}>
                        <h1 style={{ color: 'var(--color-primary)', fontSize: '2rem' }}>Tele-Konsulta</h1>
                        <p className="text-xl" style={{ color: 'var(--color-text-muted)' }}>
                            Online Doctor Consultation (UC09)
                        </p>
                    </header>

                    <div className="card" style={{ marginBottom: '1.5rem', textAlign: 'center', padding: '2rem' }}>
                        <div style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            background: 'var(--color-border)',
                            margin: '0 auto 1rem',
                            overflow: 'hidden'
                        }}>
                            <img src="https://ui-avatars.com/api/?name=Dr+Santos&background=0D9488&color=fff&size=100" alt="Doctor" />
                        </div>
                        <h2 style={{ marginBottom: '0.5rem' }}>Dr. Jose Santos</h2>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>Cardiologist • Daily 9AM - 5PM</p>

                        <button
                            className="btn btn-primary"
                            onClick={() => setActiveCall(true)}
                            style={{ width: '100%', gap: '0.5rem', fontSize: '1.1rem', padding: '1rem' }}
                        >
                            <Video size={24} /> Start Video Call
                        </button>
                    </div>

                    <div className="card">
                        <h3 style={{ marginBottom: '1rem' }}>Upcoming Appointments (UC08)</h3>
                        <div style={{
                            display: 'flex',
                            gap: '1rem',
                            padding: '1rem',
                            background: 'var(--color-bg)',
                            borderRadius: 'var(--radius-md)'
                        }}>
                            <div style={{ textAlign: 'center', padding: '0.5rem', background: 'white', borderRadius: 'var(--radius-sm)' }}>
                                <p style={{ fontWeight: 'bold', color: 'var(--color-primary)' }}>JAN</p>
                                <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>20</p>
                            </div>
                            <div>
                                <p style={{ fontWeight: 'bold' }}>General Checkup</p>
                                <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                                    <Clock size={16} /> 10:00 AM
                                </p>
                            </div>
                        </div>
                        <button className="btn btn-outline" style={{ marginTop: '1rem', width: '100%' }}>
                            <Calendar size={20} style={{ marginRight: '0.5rem' }} /> Schedule New Visit
                        </button>
                    </div>
                </>
            ) : (
                <div style={{
                    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                    background: '#1a1a1a',
                    zIndex: 100,
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                        <h2 style={{ color: 'white' }}>Connecting to Dr. Santos...</h2>
                        <div style={{
                            position: 'absolute',
                            bottom: '1rem',
                            right: '1rem',
                            width: '120px',
                            height: '160px',
                            background: '#333',
                            borderRadius: 'var(--radius-md)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            border: '2px solid white'
                        }}>
                            <p>You</p>
                        </div>
                    </div>

                    <div style={{
                        padding: '2rem',
                        background: 'rgba(0,0,0,0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '2rem'
                    }}>
                        <button className="btn" style={{ background: 'white', padding: '1rem', borderRadius: '50%' }}>
                            <Mic size={24} color="#333" />
                        </button>
                        <button
                            className="btn"
                            onClick={() => setActiveCall(false)}
                            style={{ background: 'var(--color-danger)', padding: '1rem', borderRadius: '50%', color: 'white' }}
                        >
                            <X size={24} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
