'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Return a placeholder during SSR to avoid hydration mismatch
  if (!mounted) {
    return (
      <button
        className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary/20 hover:bg-secondary/30 transition-all duration-300 group"
        aria-label="Toggle theme"
      >
        <Sun className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary/20 hover:bg-secondary/30 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
      ) : (
        <Sun className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
      )}
    </button>
  );
}
