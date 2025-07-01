import { ComponentProps, ComponentPropsWithoutRef, ComponentType } from 'react';

import { Moon, Sun } from 'lucide-react';

import { IconButton } from '@components/atoms/icon-button';
import { Tooltip } from '@components/molecules/tooltip';

import { useTheme } from '@hooks/useTheme';

type DarkModeToggleProps = Omit<
  ComponentProps<typeof IconButton>,
  'onClick' | 'Icon'
> &
  Pick<
    ComponentPropsWithoutRef<typeof Tooltip>,
    'side' | 'sideOffset' | 'align' | 'alignOffset'
  >;

export const DarkModeToggle: ComponentType<DarkModeToggleProps> = ({
  title = 'Change theme',
  side,
  sideOffset,
  align,
  alignOffset,
  ...props
}) => {
  const { toggleTheme, theme } = useTheme();

  const Icon = theme === 'light' ? Moon : Sun;

  return (
    <Tooltip
      content={title}
      side={side}
      sideOffset={sideOffset}
      align={align}
      alignOffset={alignOffset}
    >
      <IconButton title={title} onClick={() => toggleTheme()} {...props}>
        <Icon size={18} />
      </IconButton>
    </Tooltip>
  );
};
DarkModeToggle.displayName = 'DarkModeToggle';
