import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Item } from '@radix-ui/react-dropdown-menu';

import { cn } from '@utils/styles';

export const DropdownMenuItem = forwardRef<
  ElementRef<typeof Item>,
  ComponentPropsWithoutRef<typeof Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <Item
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-fuselage-100 focus:text-fuselage-800 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-fuselage-700 dark:focus:text-fuselage-50',
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = Item.displayName;
