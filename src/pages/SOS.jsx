import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Phone, MapPin } from 'lucide-react';

export default function SOS() {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);
    const [active, setActive] = useState(true);

    useEffect(() => {
        if (!active) return;

        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            // Trigger alert
            console.log('SOS SENT!');
        }
    }, [countdown, active]);

    const cancelSOS = () => {
        setActive(false);
        navigate(-1);
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: '#DC2626',
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            padding: '2rem',
            textAlign: 'center'
        }}>
            <div style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                border: '4px solid white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem',
                fontWeight: 'bold',
                marginBottom: '2rem',
                animation: 'pulse 1s infinite'
            }}>
                {countdown > 0 ? countdown : '!'}
            </div>

            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                {countdown > 0 ? 'SENDING ALERT...' : 'ALERT SENT!'}
            </h1>

            <p className="text-xl" style={{ marginBottom: '3rem', opacity: 0.9 }}>
                {countdown > 0
                    ? 'Notifying Family & Emergency Services'
                    : 'Help is on the way. Keep calm.'}
            </p>

            {countdown === 0 && (
                <div style={{
                    background: 'rgba(0,0,0,0.2)',
                    padding: '1rem',
                    borderRadius: 'var(--radius-md)',
                    marginBottom: '2rem',
                    width: '100%'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <MapPin size={20} />
                        <strong>Location Shared:</strong>
                    </div>
                    <p>123 Rizal St, Brgy. San Antonio, Manila</p>
                </div>
            )}

            {countdown > 0 ? (
                <button
                    onClick={cancelSOS}
                    className="btn"
                    style={{
                        background: 'white',
                        color: '#DC2626',
                        padding: '1rem 3rem',
                        fontSize: '1.25rem',
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}
                >
                    <X size={24} />
                    CANCEL (Ikansela)
                </button>
            ) : (
                <button
                    className="btn"
                    style={{
                        background: 'white',
                        color: '#DC2626',
                        padding: '1rem 3rem',
                        fontSize: '1.25rem',
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}
                >
                    <Phone size={24} />
                    CALL 911
                </button>
            )}

            <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
        </div>
    );
}
