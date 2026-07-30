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
          'hover:bg-accent/20 hover:text-fuselage-800 focus:bg-accent focus:text-accent-foreground dark:hover:text-fuselage-50 flex flex-col gap-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none',
          className,
        )}
        {...props}
      >
        <div className={'text-sm leading-none font-medium'}>{title}</div>
        <p
          className={'text-muted-foreground line-clamp-2 text-sm leading-snug'}
        >
          {children}
        </p>
      </NavigationMenuLink>
    </li>
  );
});
NavigationMenuListItem.displayName = 'NavigationMenuListItem';
