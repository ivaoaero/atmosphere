import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

import { Item } from '@radix-ui/react-dropdown-menu';

import { cn } from '@utils/styles';

export const DropdownMenuItem = forwardRef<
  ComponentRef<typeof Item>,
  ComponentPropsWithoutRef<typeof Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <Item
    ref={ref}
    className={cn(
      'focus:bg-fuselage-100 focus:text-fuselage-800 radix-disabled:pointer-events-none radix-disabled:opacity-50 dark:focus:bg-fuselage-700 dark:focus:text-fuselage-50 relative flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden transition-colors select-none',
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = Item.displayName;
