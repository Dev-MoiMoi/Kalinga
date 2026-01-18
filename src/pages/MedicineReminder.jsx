import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Clock, Pill, Trash2 } from 'lucide-react';

export default function MedicineReminder() {
    const navigate = useNavigate();

    // Mock Data
    const [medicines, setMedicines] = useState([
        { id: 1, name: 'Amlodipine', dose: '10mg', time: '08:00', taken: true },
        { id: 2, name: 'Metformin', dose: '500mg', time: '13:00', taken: false },
        { id: 3, name: 'Atorvastatin', dose: '20mg', time: '20:00', taken: false },
    ]);

    const [showAddForm, setShowAddForm] = useState(false);
    const [newMed, setNewMed] = useState({ name: '', dose: '', time: '' });

    const handleAdd = (e) => {
        e.preventDefault();
        if (!newMed.name || !newMed.time) return;

        setMedicines([...medicines, {
            id: Date.now(),
            ...newMed,
            taken: false
        }]);
        setNewMed({ name: '', dose: '', time: '' });
        setShowAddForm(false);
    };

    const toggleTaken = (id) => {
        setMedicines(medicines.map(med =>
            med.id === id ? { ...med, taken: !med.taken } : med
        ));
    };

    const deleteMed = (id) => {
        setMedicines(medicines.filter(med => med.id !== id));
    };

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

            <header style={{ marginBottom: '2rem' }}>
                <h1 style={{ color: 'var(--color-primary)', fontSize: '2rem' }}>Mga Gamot</h1>
                <p className="text-xl" style={{ color: 'var(--color-text-muted)' }}>
                    Medicine Schedule & Reminders
                </p>
            </header>

            {/* List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {medicines.sort((a, b) => a.time.localeCompare(b.time)).map((med) => (
                    <div key={med.id} className="card" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '1.25rem',
                        borderLeft: med.taken ? '5px solid var(--color-success)' : '5px solid var(--color-warning)',
                        opacity: med.taken ? 0.7 : 1
                    }}>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div style={{
                                background: med.taken ? 'var(--color-bg)' : 'var(--color-primary-light)',
                                color: med.taken ? 'var(--color-text-muted)' : 'white',
                                padding: '0.75rem',
                                borderRadius: '50%'
                            }}>
                                <Pill size={24} />
                            </div>
                            <div>
                                <h3 style={{ margin: 0, textDecoration: med.taken ? 'line-through' : 'none' }}>
                                    {med.name} <span style={{ fontSize: '0.9rem', fontWeight: 400, color: 'var(--color-text-muted)' }}>{med.dose}</span>
                                </h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
                                    <Clock size={16} />
                                    <span>{med.time}</span>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button
                                onClick={() => toggleTaken(med.id)}
                                className="btn"
                                style={{
                                    background: med.taken ? 'var(--color-border)' : 'var(--color-success)',
                                    color: med.taken ? 'var(--color-text-muted)' : 'white',
                                    padding: '0.5rem 1rem',
                                    fontSize: '0.9rem'
                                }}
                            >
                                {med.taken ? 'Undo' : 'Take'}
                            </button>
                            {med.taken && (
                                <button
                                    onClick={() => deleteMed(med.id)}
                                    className="btn"
                                    style={{ background: 'transparent', color: 'var(--color-danger)', padding: '0.5rem' }}
                                >
                                    <Trash2 size={20} />
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Add Form Overlay or Section */}
            {showAddForm ? (
                <div className="card" style={{ border: '2px solid var(--color-primary)' }}>
                    <h3 style={{ marginBottom: '1rem' }}>Magdagdag ng Gamot</h3>
                    <form onSubmit={handleAdd} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <input
                            type="text"
                            placeholder="Pangalan ng Gamot (e.g. Losartan)"
                            className="text-lg"
                            value={newMed.name}
                            onChange={e => setNewMed({ ...newMed, name: e.target.value })}
                            style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}
                            required
                        />
                        <div className="grid-cols-2">
                            <input
                                type="text"
                                placeholder="Dose (e.g. 50mg)"
                                className="text-lg"
                                value={newMed.dose}
                                onChange={e => setNewMed({ ...newMed, dose: e.target.value })}
                                style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}
                            />
                            <input
                                type="time"
                                className="text-lg"
                                value={newMed.time}
                                onChange={e => setNewMed({ ...newMed, time: e.target.value })}
                                style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}
                                required
                            />
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                            <button type="button" onClick={() => setShowAddForm(false)} className="btn btn-outline" style={{ flex: 1 }}>
                                Cancel
                            </button>
                            <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <button
                    onClick={() => setShowAddForm(true)}
                    className="btn btn-primary"
                    style={{
                        width: '100%',
                        padding: '1rem',
                        fontSize: '1.2rem',
                        gap: '0.5rem',
                        position: 'sticky',
                        bottom: '1rem',
                        boxShadow: 'var(--shadow-lg)'
                    }}
                >
                    <Plus size={24} /> New Reminder (Bago)
                </button>
            )}

        </div>
    );
}
