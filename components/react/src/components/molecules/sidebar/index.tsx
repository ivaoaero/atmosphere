import { ComponentType } from 'react';

import { SidebarContainer } from '@components/atoms/sidebar';
import {
  SidebarGroup,
  SidebarGroupProps,
} from '@components/atoms/sidebar/SidebarGroup';
import {
  SidebarItem,
  SidebarItemProps,
} from '@components/atoms/sidebar/SidebarItem';

import { SidebarProvider } from 'src/lib/contexts/SidebarProvider';

export interface SidebarProps extends Pick<SidebarItemProps, 'asLink'> {
  /**
   * If true, the sidebar will be open by default
   * Default: true
   */
  isDefaultOpen?: boolean;
  items: (SidebarItemProps | SidebarGroupProps)[];
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
        {items.map((item) => {
          if ('items' in item) {
            return (
              <SidebarGroup
                key={item.title}
                {...item}
                asLink={asLink}
                isActiveCheck={isActiveCheck}
              />
            );
          } else {
            return (
              <SidebarItem
                key={item.href}
                {...item}
                asLink={asLink}
                isActive={item.isActive ?? isActiveCheck(item.href)}
              />
            );
          }
        })}
      </SidebarContainer>
    </SidebarProvider>
  );
};
