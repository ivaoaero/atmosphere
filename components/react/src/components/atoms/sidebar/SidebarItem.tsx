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
          'flex size-10 items-center justify-center rounded-md p-2 transition-all',
          isActive
            ? 'bg-atmos-700 text-atmos-50 group-hover:bg-atmos-600 group-hover:text-atmos-100 dark:bg-atmos-500 dark:text-atmos-50'
            : 'bg-fuselage-100 text-fuselage-500 group-hover:bg-fuselage-200/50 group-hover:text-fuselage-600 dark:bg-fuselage-700 dark:text-fuselage-500 dark:group-hover:bg-fuselage-600 dark:group-hover:text-fuselage-100',
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
          className={cn(
            'font-head font-semibold leading-tight',
            isActive
              ? 'font-bold text-fuselage-800 dark:text-fuselage-50'
              : 'font-semibold text-fuselage-600 dark:text-fuselage-100',
          )}
        >
          {title}
        </span>
        <span
          className={cn(
            'text-sm',
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
