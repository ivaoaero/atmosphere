import { ComponentPropsWithoutRef, ComponentType } from 'react';

import { cn } from '@utils/styles';

export const NavbarContainer: ComponentType<
  ComponentPropsWithoutRef<'nav'>
> = ({ className, children, ...props }) => {
  return (
    <nav
      className={cn(
        'bg-atmos-700 dark:bg-fuselage-800 flex w-full items-center justify-between px-4 py-3',
        className,
      )}
      {...props}
    >
      {children}
    </nav>
  );
};
NavbarContainer.displayName = 'NavbarContainer';
