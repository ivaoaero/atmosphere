import { ComponentType, PropsWithChildren } from 'react';

import { NavbarContainer } from '@components/atoms/navbar';

import { IVAOLogo } from 'src/main';

interface NavbarProps {
  title: string;
}

export const Navbar: ComponentType<PropsWithChildren<NavbarProps>> = ({
  title,
  children,
}) => {
  return (
    <NavbarContainer className="dark">
      <div className={'flex items-center gap-3'}>
        <div className="block md:hidden">
          <IVAOLogo color={'white'} onlyIcon />
        </div>
        <div className="hidden md:block">
          <IVAOLogo color={'white'} />
        </div>
        <div className={'h-6 w-px bg-ocean-400 dark:bg-fuselage-400'} />
        <h1 className={'text-lg font-semibold text-white'}>{title}</h1>
      </div>

      <div className={'flex items-center gap-1'}>{children}</div>
    </NavbarContainer>
  );
};
Navbar.displayName = 'Navbar';
