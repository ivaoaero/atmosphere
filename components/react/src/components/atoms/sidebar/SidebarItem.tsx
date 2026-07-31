import { AnchorHTMLAttributes, ComponentType, HTMLAttributes } from 'react';

import { SidebarIcon } from '@components/atoms/sidebar/SidebarIcon.tsx';
import { sidebarItemStyle } from '@components/atoms/sidebar/sidebarItemStyle.ts';

import { cn } from '@utils/styles';
import { useSidebar } from '@hooks/useSidebar';

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export type SidebarAsLinkProps = AnchorProps &
  Required<Pick<AnchorProps, 'href'>>;

export interface SidebarItemProps extends HTMLAttributes<HTMLAnchorElement> {
  title: string;
  description: string;
  Icon: ComponentType;
  href: string;
  asLink?: ComponentType<SidebarAsLinkProps>;
  isActive?: boolean;
  isGroupOpen?: boolean;
}

export const SidebarItem = ({
  title,
  description,
  Icon,
  href,
  asLink,
  isActive,
  className,
  isGroupOpen,
  ...props
}: SidebarItemProps) => {
  const { isSidebarOpen } = useSidebar();

  const LinkComponent = asLink ?? 'a';

  // Default match active link
  if (isActive === undefined) isActive = window.location.pathname === href;
  return (
    <LinkComponent
      href={href}
      className={cn(sidebarItemStyle, className)}
      {...props}
    >
      <SidebarIcon Icon={Icon} isActive={isActive} />

      <div
        className={cn(
          'ml-4 flex flex-col items-start whitespace-nowrap transition-all',
          isGroupOpen && 'w-fit',
          !isSidebarOpen && 'hidden',
        )}
      >
        <span
          className={cn(
            'font-head text-base leading-tight font-semibold text-wrap',
            isActive
              ? 'text-fuselage-800 dark:text-fuselage-50 font-extrabold'
              : 'text-fuselage-600 dark:text-fuselage-100 font-semibold',
          )}
        >
          {title}
        </span>
        <span
          className={cn(
            'text-sm text-wrap',
            isActive
              ? 'text-fuselage-700 dark:text-fuselage-100'
              : 'text-fuselage-400 dark:text-fuselage-400',
          )}
        >
          {description}
        </span>
      </div>
    </LinkComponent>
  );
};
SidebarItem.displayName = 'SidebarItem';
