import { ComponentType, DetailedHTMLProps, HTMLAttributes } from 'react';

import { cn } from '@utils/styles';

export const NavbarContainer: ComponentType<
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
> = ({ className, children, ...pros }) => {
  return (
    <nav
      className={cn(
        'flex w-full items-center justify-between bg-atmos-700 px-4 py-3 dark:bg-fuselage-800',
        className,
      )}
      {...pros}
    >
      {children}
    </nav>
  );
};
NavbarContainer.displayName = 'NavbarContainer';
