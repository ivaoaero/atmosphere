import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Label } from '@radix-ui/react-dropdown-menu';

import { cn } from '@utils/styles';

export const DropdownMenuLabel = forwardRef<
  ElementRef<typeof Label>,
  ComponentPropsWithoutRef<typeof Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <Label
    ref={ref}
    className={cn(
      'p-0 px-2 text-sm font-semibold text-fuselage-800 dark:text-fuselage-50',
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = Label.displayName;
