import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Lock, Eye, EyeOff } from 'lucide-react';

export default function Login() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleLogin = (e) => {
        e.preventDefault();
        // Simulate login - in a real app this would hit an API
        console.log('Logging in with:', formData);
        navigate('/dashboard');
    };

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
                <h1 style={{ color: 'var(--color-primary)' }}>Mag-login</h1>
                <p className="text-xl" style={{ color: 'var(--color-text-muted)' }}>
                    Welcome back! Please enter your details.
                </p>
            </header>

            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                        Username / ID Number
                    </label>
                    <div style={{ position: 'relative' }}>
                        <User size={24} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                        <input
                            type="text"
                            required
                            className="text-lg"
                            placeholder="Ex. JuanDelaCruz"
                            style={{
                                width: '100%',
                                padding: '1rem 1rem 1rem 3rem',
                                borderRadius: 'var(--radius-md)',
                                border: '1px solid var(--color-border)',
                                fontSize: '1.1rem'
                            }}
                            value={formData.username}
                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        />
                    </div>
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                        Password
                    </label>
                    <div style={{ position: 'relative' }}>
                        <Lock size={24} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                        <input
                            type={showPassword ? "text" : "password"}
                            required
                            className="text-lg"
                            placeholder="••••••••"
                            style={{
                                width: '100%',
                                padding: '1rem 3rem',
                                borderRadius: 'var(--radius-md)',
                                border: '1px solid var(--color-border)',
                                fontSize: '1.1rem'
                            }}
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            style={{
                                position: 'absolute',
                                right: '1rem',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                background: 'none',
                                color: 'var(--color-text-muted)'
                            }}
                        >
                            {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
                        </button>
                    </div>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary text-xl"
                    style={{ padding: '1rem', marginTop: '1rem' }}
                >
                    Pumasok (Login)
                </button>

                <button
                    type="button"
                    onClick={() => navigate('/register')}
                    className="btn"
                    style={{ background: 'transparent', color: 'var(--color-text-main)', marginTop: '0.5rem' }}
                >
                    Wala pang account? <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Mag-rehistro</span>
                </button>

                <button
                    type="button"
                    className="btn"
                    style={{ background: 'transparent', color: 'var(--color-primary)', textDecoration: 'underline' }}
                >
                    Nakalimutan ang password? (Forgot Password)
                </button>
            </form>
        </div>
    );
}
