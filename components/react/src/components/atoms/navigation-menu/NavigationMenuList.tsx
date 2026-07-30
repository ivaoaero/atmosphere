import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

import { List } from '@radix-ui/react-navigation-menu';

import { cn } from '@utils/styles';

export const NavigationMenuList = forwardRef<
  ComponentRef<typeof List>,
  ComponentPropsWithoutRef<typeof List>
>(({ className, ...props }, ref) => (
  <List
    ref={ref}
    className={cn(
      'group flex flex-1 list-none items-center justify-center gap-1',
      className,
    )}
    {...props}
  />
));
NavigationMenuList.displayName = List.displayName;
