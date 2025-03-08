import { createContext } from 'react';

import { ThemeContextType } from '@utils/theme';

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'system',
  toggleTheme: () => {},
});
