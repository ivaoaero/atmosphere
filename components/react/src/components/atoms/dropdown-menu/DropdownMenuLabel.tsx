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
      'px-2 py-1.5 text-sm font-semibold',
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = Label.displayName;
