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
    <NavbarContainer>
      <div className="flex items-center gap-3">
        <IVAOLogo color="white" />
        <div className="dark:bg-fuselage-200 bg-atmos-50 h-6 w-0.5" />
        <span className="text-lg font-semibold text-white">{title}</span>
      </div>

      <div className="flex items-center gap-1">{children}</div>
    </NavbarContainer>
  );
};
Navbar.displayName = 'Navbar';
