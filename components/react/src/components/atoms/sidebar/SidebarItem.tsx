import {
  AnchorHTMLAttributes,
  ComponentType,
  HTMLAttributes,
  PropsWithRef,
} from 'react';

import clsx from 'clsx';

import { useSidebar } from '@hooks/useSidebar';

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export type SidebarAsLinkProps = PropsWithRef<AnchorProps> &
  Required<Pick<AnchorProps, 'href'>>;

export interface SidebarItemProps extends HTMLAttributes<HTMLAnchorElement> {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  asLink?: ComponentType<SidebarAsLinkProps>;
  isActive?: boolean;
}

export const SidebarItem = ({
  title,
  description,
  icon,
  href,
  asLink,
  isActive,
  ...props
}: SidebarItemProps) => {
  const { isSidebarOpen } = useSidebar();

  const LinkComponent = asLink ?? 'a';

  // Default match active link
  if (isActive === undefined) isActive = window.location.pathname === href;

  return (
    <LinkComponent
      href={href}
      className="flex dark:text-fuselage-400 text-fuselage-300 group"
      {...props}
    >
      <div
        className={clsx(
          'rounded-md p-2 transition-all',
          isActive
            ? 'bg-semantic-green-500 text-white dark:bg-semantic-green-500/10 dark:text-semantic-green-500'
            : 'bg-fuselage-50/40 text-fuselage-300 dark:text-fuselage-400 dark:bg-fuselage-700 group-hover:text-fuselage-400 group-hover:bg-fuselage-50/75 dark:group-hover:bg-fuselage-600 dark:group-hover:text-fuselage-100',
        )}
      >
        {icon}
      </div>

      <div
        className={clsx(
          'transition-all flex flex-col items-start shrink-0 whitespace-nowrap',
          isSidebarOpen ? 'w-48 opacity-100 ml-4' : 'w-0 opacity-0 invisible',
        )}
      >
        <span className="font-semibold font-head dark:text-fuselage-50 text-fuselage-500 leading-tight">
          {title}
        </span>
        <span className="text-sm">{description}</span>
      </div>
    </LinkComponent>
  );
};
SidebarItem.displayName = 'SidebarItem';
