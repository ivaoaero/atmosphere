export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme | 'system';
  toggleTheme: () => void;
}
