import {
  AnchorHTMLAttributes,
  ComponentType,
  HTMLAttributes,
  PropsWithRef,
} from 'react';

import { cn } from '@utils/styles';
import { useSidebar } from '@hooks/useSidebar';

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export type SidebarAsLinkProps = PropsWithRef<AnchorProps> &
  Required<Pick<AnchorProps, 'href'>>;

export interface SidebarItemProps extends HTMLAttributes<HTMLAnchorElement> {
  title: string;
  description: string;
  Icon: ComponentType;
  href: string;
  asLink?: ComponentType<SidebarAsLinkProps>;
  isActive?: boolean;
}

export const SidebarItem = ({
  title,
  description,
  Icon,
  href,
  asLink,
  isActive,
  className,
  ...props
}: SidebarItemProps) => {
  const { isSidebarOpen } = useSidebar();

  const LinkComponent = asLink ?? 'a';

  // Default match active link
  if (isActive === undefined) isActive = window.location.pathname === href;

  return (
    <LinkComponent
      href={href}
      className={cn(
        'group flex text-fuselage-300 dark:text-fuselage-400',
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          'rounded-md p-2 transition-all',
          isActive
            ? 'bg-semantic-green-500 text-white dark:bg-semantic-green-500/10 dark:text-semantic-green-500'
            : 'bg-fuselage-50/40 text-fuselage-300 group-hover:bg-fuselage-50/75 group-hover:text-fuselage-400 dark:bg-fuselage-700 dark:text-fuselage-400 dark:group-hover:bg-fuselage-600 dark:group-hover:text-fuselage-100',
        )}
      >
        <Icon />
      </div>

      <div
        className={cn(
          'flex shrink-0 flex-col items-start whitespace-nowrap transition-all',
          isSidebarOpen ? 'ml-4 w-48 opacity-100' : 'invisible w-0 opacity-0',
        )}
      >
        <span
          className={
            'font-head font-semibold leading-tight text-fuselage-500 dark:text-fuselage-50'
          }
        >
          {title}
        </span>
        <span className={'text-sm'}>{description}</span>
      </div>
    </LinkComponent>
  );
};
SidebarItem.displayName = 'SidebarItem';
