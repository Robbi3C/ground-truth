import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import '../styles/theme-toggle.css';

type Theme = 'dark' | 'light';
const THEME_COLOR: Record<Theme, string> = { dark: '#0f191e', light: '#f0ece3' };

export function ThemeToggle() {
  // index.html applies a stored choice before first paint; dark is the default.
  const [theme, setTheme] = useState<Theme>(() => document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') root.dataset.theme = 'light';
    else delete root.dataset.theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[theme]);
    try { localStorage.setItem('gt-theme', theme); } catch { /* storage blocked */ }
  }, [theme]);

  return <div className="theme-toggle" role="group" aria-label="Colour theme">
    <button type="button" aria-pressed={theme === 'dark'} onClick={() => setTheme('dark')}><Moon size={14} aria-hidden="true" />Dark</button>
    <button type="button" aria-pressed={theme === 'light'} onClick={() => setTheme('light')}><Sun size={14} aria-hidden="true" />Light</button>
  </div>;
}
