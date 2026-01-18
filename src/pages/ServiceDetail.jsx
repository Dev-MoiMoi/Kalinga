import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, MapPin, Download, CheckCircle, ExternalLink } from 'lucide-react';

export default function ServiceDetail() {
    const navigate = useNavigate();
    const { id } = useParams();

    // Mock Data - normally fetched based on ID
    const serviceData = {
        'osca': {
            name: 'Senior Citizen ID',
            agency: 'OSCA / Local Govt',
            requirements: [
                'Birth Certificate (PSA)',
                'Valid Government ID',
                '1x1 ID Photos (2pcs)',
                'Barangay Certificate of Residency'
            ],
            steps: [
                'Kumuha ng application form sa OSCA Office.',
                'Ipasa ang requirements at form.',
                'Hintayin ang release ng ID at Booklet.'
            ]
        },
        'sss-pension': {
            name: 'SSS Retirement Pension',
            agency: 'Social Security System',
            requirements: [
                'SSS ID or UMID Card',
                'Savings Account Number',
                'Application for Retirement Benefit Form'
            ],
            steps: [
                'Mag-file online sa My.SSS portal.',
                'O magsadya sa pinakamalapit na SSS Branch.',
                'I-submit ang mga requirements.'
            ]
        }
    };

    const details = serviceData[id] || serviceData['osca']; // Fallback to osca for demo

    return (
        <div style={{ padding: '1rem', minHeight: '100vh', paddingBottom: '3rem' }}>
            <button
                onClick={() => navigate('/services')}
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

            <div className="card" style={{ borderTop: '5px solid var(--color-secondary)' }}>
                <h1 style={{ color: 'var(--color-secondary)', fontSize: '1.8rem', marginBottom: '0.5rem' }}>{details.name}</h1>
                <p className="text-lg" style={{ color: 'var(--color-text-muted)', fontWeight: 600 }}>{details.agency}</p>

                <div style={{ marginTop: '2rem' }}>
                    <h3 style={{ borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                        Mga Kailangan (Requirements)
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {details.requirements.map((req, idx) => (
                            <li key={idx} style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', alignItems: 'flex-start' }}>
                                <CheckCircle size={20} color="var(--color-success)" style={{ marginTop: '3px', flexShrink: 0 }} />
                                <span className="text-lg">{req}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div style={{ marginTop: '2rem' }}>
                    <h3 style={{ borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                        Paano Mag-apply (Steps)
                    </h3>
                    <ol style={{ paddingLeft: '1.5rem' }}>
                        {details.steps.map((step, idx) => (
                            <li key={idx} className="text-lg" style={{ marginBottom: '1rem' }}>{step}</li>
                        ))}
                    </ol>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column', marginTop: '2rem' }}>
                    <button className="btn btn-primary" style={{ width: '100%', gap: '0.5rem' }}>
                        <Download size={20} /> Download Form
                    </button>
                    <button className="btn btn-outline" style={{ width: '100%', gap: '0.5rem' }}>
                        <MapPin size={20} /> Locate Office
                    </button>
                </div>
            </div>
        </div>
    );
}
