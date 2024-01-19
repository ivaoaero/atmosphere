import { useContext } from 'react';

import { ThemeContext } from 'src/lib/contexts/ThemeContext';

export const useTheme = () => useContext(ThemeContext);
