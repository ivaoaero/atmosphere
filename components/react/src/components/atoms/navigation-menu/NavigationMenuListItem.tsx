import {
  ComponentType,
  ElementRef,
  forwardRef,
  PropsWithChildren,
  PropsWithRef,
} from 'react';

import { NavigationMenuLink } from '@radix-ui/react-navigation-menu';

import { cn } from '@utils/styles';

type NavigationMenuAsLink = ComponentType<
  PropsWithRef<
    PropsWithChildren<{
      className?: string;
      href: string;
    }>
  >
>;
export interface NavigationMenuListItemProps {
  asLink?: NavigationMenuAsLink;
  title: string;
  href: string;
  className?: string;
}

export const NavigationMenuListItem = forwardRef<
  ElementRef<NavigationMenuAsLink>,
  PropsWithChildren<NavigationMenuListItemProps>
>(({ className, title, children, asLink, href, ...props }, ref) => {
  const LinkComponent = asLink || 'a';
  return (
    <li>
      <NavigationMenuLink asChild>
        <LinkComponent
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          href={href}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </LinkComponent>
      </NavigationMenuLink>
    </li>
  );
});
NavigationMenuListItem.displayName = 'NavigationMenuListItem';
