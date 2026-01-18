import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import SOS from './pages/SOS';
import GovernmentServices from './pages/GovernmentServices';
import ServiceDetail from './pages/ServiceDetail';
import HealthCheck from './pages/HealthCheck';
import FamilyConnect from './pages/FamilyConnect';
import MedicineReminder from './pages/MedicineReminder';
import './App.css';

import { ThemeProvider } from './context/ThemeContext';
import Settings from './pages/Settings';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        {/* Container simulating mobile viewport */}
        <div className="container">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sos" element={<SOS />} />

            <Route path="/services" element={<GovernmentServices />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/health" element={<HealthCheck />} />
            <Route path="/medicines" element={<MedicineReminder />} />
            <Route path="/family" element={<FamilyConnect />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
