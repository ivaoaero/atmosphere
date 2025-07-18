import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { List } from '@radix-ui/react-tabs';

import { cn } from '@utils/styles';

export const TabsList = forwardRef<
  ElementRef<typeof List>,
  ComponentPropsWithoutRef<typeof List>
>(({ className, ...props }, ref) => (
  <List
    ref={ref}
    className={cn(
      'inline-flex h-10 items-center justify-center rounded-md bg-fuselage-100 p-1 text-fuselage-700 dark:bg-fuselage-700 dark:text-fuselage-200',
      className,
    )}
    {...props}
  />
));
TabsList.displayName = List.displayName;
