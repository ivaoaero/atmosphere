import {
  ComponentType,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { Theme } from '@utils/theme';

import { ThemeContext } from 'src/lib/contexts/ThemeContext';

export const ThemeProvider: ComponentType<PropsWithChildren> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const currentTheme = localStorage.getItem('theme');
    switch (currentTheme) {
      case 'light':
      case 'dark':
        return currentTheme;

      case 'system':
      default:
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          return 'dark';
        } else {
          return 'light';
        }
    }
  });

  const toggleTheme = useCallback((theme?: Theme | 'system') => {
    if (theme && theme !== 'system') {
      setTheme(theme);
    } else if (theme) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    } else {
      setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove('light');
    root.classList.remove('dark');

    switch (theme) {
      case 'light':
        root.classList.add('light');
        break;

      case 'dark':
        root.classList.add('dark');
        break;
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
