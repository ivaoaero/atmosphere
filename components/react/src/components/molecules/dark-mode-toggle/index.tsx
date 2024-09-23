import { ComponentProps, ComponentType } from 'react';

import { Moon, Sun } from 'lucide-react';

import { IconButton } from '@components/atoms/icon-button';

import { useTheme } from '@hooks/useTheme';

type DarkModeToggleProps = ComponentProps<typeof IconButton>;

export const DarkModeToggle: ComponentType<DarkModeToggleProps> = (props) => {
  const { toggleTheme, theme } = useTheme();

  return (
    <IconButton title="Change theme" onClick={() => toggleTheme()} {...props}>
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </IconButton>
  );
};
DarkModeToggle.displayName = 'DarkModeToggle';
