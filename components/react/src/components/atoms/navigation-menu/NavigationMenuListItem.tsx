import { ElementRef, forwardRef } from 'react';

import {
  NavigationMenuLink,
  NavigationMenuLinkProps,
} from '@components/atoms/navigation-menu/NavigationMenuLink';

import { cn } from '@utils/styles';

export const NavigationMenuListItem = forwardRef<
  ElementRef<typeof NavigationMenuLink>,
  NavigationMenuLinkProps
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink
        ref={ref}
        className={cn(
          'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/20 hover:text-fuselage-800 focus:bg-accent focus:text-accent-foreground dark:hover:text-fuselage-50',
          className,
        )}
        {...props}
      >
        <div className={'text-sm font-medium leading-none'}>{title}</div>
        <p
          className={'line-clamp-2 text-sm leading-snug text-muted-foreground'}
        >
          {children}
        </p>
      </NavigationMenuLink>
    </li>
  );
});
NavigationMenuListItem.displayName = 'NavigationMenuListItem';
