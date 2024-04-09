import { ComponentType, DetailedHTMLProps } from 'react';

import { cn } from '@utils/styles';

export const NavbarContainer: ComponentType<
  DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = ({ className, children, ...pros }) => {
  return (
    <nav
      className={cn(
        'bg-atmos-700 dark:bg-fuselage-900 dark:border-fuselage-700 border-atmos-50 flex w-full items-center justify-between border-b px-4 py-3',
        className,
      )}
      {...pros}
    >
      {children}
    </nav>
  );
};
NavbarContainer.displayName = 'NavbarContainer';
