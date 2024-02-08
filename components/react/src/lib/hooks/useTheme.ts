import { useContext } from 'react';

import { ThemeContext } from 'src/lib/contexts/ThemeContext';

export const useTheme = () => {
  try {
    const themeContext = useContext(ThemeContext);

    if (themeContext) {
      return themeContext;
    }
  } catch (error: unknown) {
    console.error(error);
  }
  throw new Error('useTheme must be used within a ThemeProvider');
};
