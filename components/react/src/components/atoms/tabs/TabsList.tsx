import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

import { List } from '@radix-ui/react-tabs';

import { cn } from '@utils/styles';

export const TabsList = forwardRef<
  ComponentRef<typeof List>,
  ComponentPropsWithoutRef<typeof List>
>(({ className, ...props }, ref) => (
  <List
    ref={ref}
    className={cn(
      'bg-fuselage-100 text-fuselage-700 dark:bg-fuselage-700 dark:text-fuselage-200 inline-flex h-10 items-center justify-center rounded-md p-1',
      className,
    )}
    {...props}
  />
));
TabsList.displayName = List.displayName;
