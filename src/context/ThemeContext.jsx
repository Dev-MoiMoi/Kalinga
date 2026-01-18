import { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [language, setLanguage] = useState('en'); // 'en' or 'fil'
    const [textSize, setTextSize] = useState('normal'); // 'normal', 'large', 'extra'
    const [highContrast, setHighContrast] = useState(false);

    // Apply styles to body when settings change
    useEffect(() => {
        const root = document.documentElement;

        // Text Size Handling
        if (textSize === 'normal') root.style.fontSize = '16px';
        if (textSize === 'large') root.style.fontSize = '18px';
        if (textSize === 'extra') root.style.fontSize = '20px';

        // Contrast Handling
        if (highContrast) {
            root.style.setProperty('--color-bg', '#000000');
            root.style.setProperty('--color-surface', '#1a1a1a');
            root.style.setProperty('--color-text-main', '#FFFF00'); // Yellow on Black
            root.style.setProperty('--color-text-muted', '#FFFFFF');
            root.style.setProperty('--color-primary', '#00FFFF'); // Cyan
        } else {
            // Reset variables (simplified reset, ideally would reload CSS)
            root.style.removeProperty('--color-bg');
            root.style.removeProperty('--color-surface');
            root.style.removeProperty('--color-text-main');
            root.style.removeProperty('--color-text-muted');
            root.style.removeProperty('--color-primary');
        }

    }, [textSize, highContrast]);

    // Dictionary for translations
    const t = (key) => {
        const dict = {
            'welcome': { en: 'Welcome', fil: 'Mabuhay' },
            'login': { en: 'Login', fil: 'Pumasok' },
            'register': { en: 'Register', fil: 'Magparehistro' },
            'emergency': { en: 'EMERGENCY SOS', fil: 'SAKLOLO / SOS' },
            'health': { en: 'Health', fil: 'Kalusugan' },
            'services': { en: 'Services', fil: 'Serbisyo' },
            'family': { en: 'Family', fil: 'Pamilya' },
            'settings': { en: 'Settings', fil: 'Ayos' },
            'back': { en: 'Back', fil: 'Bumalik' }
        };
        return dict[key]?.[language] || key;
    };

    return (
        <ThemeContext.Provider value={{
            language, setLanguage,
            textSize, setTextSize,
            highContrast, setHighContrast,
            t
        }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
