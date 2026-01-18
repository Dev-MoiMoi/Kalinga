import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Type, Globe, Eye } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Settings() {
    const navigate = useNavigate();
    const {
        language, setLanguage,
        textSize, setTextSize,
        highContrast, setHighContrast,
        t
    } = useTheme();

    return (
        <div style={{ padding: '1rem', minHeight: '100vh', paddingBottom: '3rem' }}>
            <button
                onClick={() => navigate('/dashboard')}
                style={{
                    background: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '1.25rem', // Slightly larger for settings
                    color: 'var(--color-text-muted)',
                    marginBottom: '1.5rem',
                    marginTop: '0.5rem'
                }}
            >
                <ArrowLeft size={28} />
                {t('back')}
            </button>

            <header style={{ marginBottom: '2rem' }}>
                <h1 style={{ color: 'var(--color-text-main)', fontSize: '2.5rem' }}>
                    {language === 'en' ? 'Settings' : 'Mga Ayos'}
                </h1>
                <p className="text-xl" style={{ color: 'var(--color-text-muted)' }}>
                    {language === 'en' ? 'Customize your experience' : 'Isaayos ang iyong karanasan'}
                </p>
            </header>

            {/* Language Section */}
            <section className="card" style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <Globe size={28} color="var(--color-primary)" />
                    <span>Wika (Language)</span>
                </h3>
                <div className="grid-cols-2">
                    <button
                        className={`btn ${language === 'fil' ? 'btn-primary' : 'btn-outline'}`}
                        onClick={() => setLanguage('fil')}
                        style={{ fontSize: '1.1rem' }}
                    >
                        Filipino
                    </button>
                    <button
                        className={`btn ${language === 'en' ? 'btn-primary' : 'btn-outline'}`}
                        onClick={() => setLanguage('en')}
                        style={{ fontSize: '1.1rem' }}
                    >
                        English
                    </button>
                </div>
            </section>

            {/* Text Size Section */}
            <section className="card" style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <Type size={28} color="var(--color-primary)" />
                    <span>Laki ng Titik (Text Size)</span>
                </h3>
                <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'space-between' }}>
                    <button
                        className={`btn ${textSize === 'normal' ? 'btn-primary' : 'btn-outline'}`}
                        onClick={() => setTextSize('normal')}
                        style={{ flex: 1, fontSize: '1rem' }}
                    >
                        A
                    </button>
                    <button
                        className={`btn ${textSize === 'large' ? 'btn-primary' : 'btn-outline'}`}
                        onClick={() => setTextSize('large')}
                        style={{ flex: 1, fontSize: '1.3rem' }}
                    >
                        A+
                    </button>
                    <button
                        className={`btn ${textSize === 'extra' ? 'btn-primary' : 'btn-outline'}`}
                        onClick={() => setTextSize('extra')}
                        style={{ flex: 1, fontSize: '1.6rem' }}
                    >
                        A++
                    </button>
                </div>
            </section>

            {/* Contrast Section */}
            <section className="card" style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <Eye size={28} color="var(--color-primary)" />
                    <span>Kontrast (Contrast)</span>
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span className="text-lg">High Contrast Mode</span>
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={highContrast}
                            onChange={() => setHighContrast(!highContrast)}
                            style={{ width: '24px', height: '24px' }}
                        />
                    </label>
                </div>
                <p style={{ marginTop: '0.5rem', color: 'var(--color-text-muted)' }}>
                    Best for low vision (Mainam para sa malabong mata)
                </p>
            </section>

        </div>
    );
}
