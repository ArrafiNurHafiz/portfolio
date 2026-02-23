import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark'
    );

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const html = document.querySelector('html');
        if (theme === 'dark') {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button
            onClick={toggleTheme}
            className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-slate-800 border border-slate-700 text-yellow-400 hover:bg-slate-700 transition-all duration-300 shadow-lg"
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? <FaSun className="text-xl" /> : <FaMoon className="text-xl text-slate-200" />}
        </button>
    );
};

export default ThemeToggle;
