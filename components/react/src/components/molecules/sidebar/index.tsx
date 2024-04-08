import { ComponentType } from 'react';

import { SidebarContainer } from '@components/atoms/sidebar';
import {
  SidebarItem,
  SidebarItemProps,
} from '@components/atoms/sidebar/SidebarItem';

import { SidebarProvider } from 'src/lib/contexts/SidebarContext';

export interface SidebarProps extends Pick<SidebarItemProps, 'asLink'> {
  /**
   * If true, the sidebar will be open by default
   * Default: true
   */
  isDefaultOpen?: boolean;
  items: SidebarItemProps[];
  /**
   * Override the default active check to determine if the link is active
   * @param href Link rendered in the sidebar
   * @returns true if the link is active
   */
  isActiveCheck?: (href: string) => boolean;
}

export const Sidebar: ComponentType<SidebarProps> = ({
  isDefaultOpen,
  asLink,
  items,
  isActiveCheck = (href: string) => window.location.pathname === href,
}) => {
  return (
    <SidebarProvider isDefaultOpen={isDefaultOpen}>
      <SidebarContainer>
        {items.map((item) => (
          <SidebarItem
            key={item.title}
            asLink={asLink}
            isActive={isActiveCheck(item.href)}
            {...item}
          />
        ))}
      </SidebarContainer>
    </SidebarProvider>
  );
};
