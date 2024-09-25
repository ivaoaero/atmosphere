import { ComponentType, DetailedHTMLProps } from 'react';

import { cn } from '@utils/styles';

export const NavbarContainer: ComponentType<
  DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = ({ className, children, ...pros }) => {
  return (
    <nav
      className={cn(
        'flex w-full items-center justify-between border-b border-atmos-50 bg-atmos-700 px-4 py-3 dark:border-fuselage-700 dark:bg-fuselage-900',
        className,
      )}
      {...pros}
    >
      {children}
    </nav>
  );
};
NavbarContainer.displayName = 'NavbarContainer';
