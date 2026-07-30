import { ComponentPropsWithoutRef, ComponentType, ReactNode } from 'react';

import { NavbarContainer } from '@components/atoms/navbar';

import { cn } from '@utils/styles';

import { IVAOLogo } from 'src/main';

interface NavbarProps extends Omit<
  ComponentPropsWithoutRef<typeof NavbarContainer>,
  'title'
> {
  title: ReactNode;
  logoVariant?: 'icon-only';
  diagonalDivider?: boolean;
}

export const Navbar: ComponentType<NavbarProps> = ({
  title,
  children,
  logoVariant,
  diagonalDivider = false,
  ...props
}) => {
  return (
    <NavbarContainer {...props}>
      <div className={'flex items-center gap-3'}>
        {logoVariant === 'icon-only' ? (
          <IVAOLogo color={'white'} onlyIcon />
        ) : (
          <>
            <div className="block md:hidden">
              <IVAOLogo color={'white'} onlyIcon />
            </div>
            <div className="hidden md:block">
              <IVAOLogo color={'white'} />
            </div>
          </>
        )}
        <div
          className={cn(
            'bg-ocean-400 dark:bg-fuselage-400 h-8 w-0.5',
            diagonalDivider && 'rotate-12',
          )}
        />
        <h1 className={'text-lg font-semibold text-white'}>{title}</h1>
      </div>

      <div className={'flex items-center gap-1'}>{children}</div>
    </NavbarContainer>
  );
};
Navbar.displayName = 'Navbar';
