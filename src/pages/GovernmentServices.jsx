import { useNavigate } from 'react-router-dom';
import { Building2, FileText, ChevronRight, ArrowLeft } from 'lucide-react';

export default function GovernmentServices() {
    const navigate = useNavigate();

    const services = [
        {
            id: 'osca',
            name: 'Senior Citizen ID (OSCA)',
            agency: 'Local Government / OSCA',
            description: 'Get your ID for 20% discount on medicines, food, and transport.',
            icon: <FileText size={24} />
        },
        {
            id: 'sss-pension',
            name: 'SSS Pension',
            agency: 'Social Security System',
            description: 'Apply for retirement benefits and monthly pension.',
            icon: <Building2 size={24} />
        },
        {
            id: 'philhealth',
            name: 'PhilHealth Coverage',
            agency: 'PhilHealth',
            description: 'Mandatory PhilHealth coverage for all Senior Citizens.',
            icon: <HeartIcon />
        },
        {
            id: 'social-pension',
            name: 'Social Pension',
            agency: 'DSWD',
            description: 'Monthly stipend for indigent senior citizens.',
            icon: <Building2 size={24} />
        }
    ];

    function HeartIcon() {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 14C20.49 12.54 22 10.79 22 8.5C22 7.04131 21.4205 5.64236 20.3891 4.61091C19.3576 3.57946 17.9587 3 16.5 3C14.74 3 13.5 3.5 12 5C10.5 3.5 9.26 3 7.5 3C6.04131 3 4.64236 3.57946 3.61091 4.61091C2.57946 5.64236 2 7.04131 2 8.5C2 10.8 3.5 12.55 5 14L12 21L19 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    }

    return (
        <div style={{ padding: '1rem', minHeight: '100vh', paddingBottom: '2rem' }}>
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
                <h1 style={{ color: 'var(--color-secondary)', fontSize: '2rem', lineHeight: 1.2 }}>
                    Government Services
                </h1>
                <p className="text-lg" style={{ color: 'var(--color-text-muted)' }}>
                    Benepisyo at serbisyo para kay Lolo at Lola.
                </p>
            </header>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {services.map((service) => (
                    <button
                        key={service.id}
                        onClick={() => navigate(`/services/${service.id}`)}
                        className="card"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            textAlign: 'left',
                            width: '100%',
                            padding: '1.25rem',
                            borderLeft: '5px solid var(--color-secondary)'
                        }}
                    >
                        <div style={{
                            color: 'var(--color-secondary)',
                            background: 'rgba(249, 115, 22, 0.1)',
                            padding: '0.75rem',
                            borderRadius: '50%'
                        }}>
                            {service.icon}
                        </div>

                        <div style={{ flex: 1 }}>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem', color: 'var(--color-text-main)' }}>
                                {service.name}
                            </h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>
                                {service.agency}
                            </p>
                        </div>

                        <ChevronRight size={20} color="var(--color-text-muted)" />
                    </button>
                ))}
            </div>
        </div>
    );
}
