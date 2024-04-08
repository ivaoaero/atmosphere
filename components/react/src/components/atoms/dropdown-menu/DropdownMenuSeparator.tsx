import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Separator } from '@radix-ui/react-dropdown-menu';

import { cn } from '@utils/styles';

export const DropdownMenuSeparator = forwardRef<
  ElementRef<typeof Separator>,
  ComponentPropsWithoutRef<typeof Separator>
>(({ className, ...props }, ref) => (
  <Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = Separator.displayName;
