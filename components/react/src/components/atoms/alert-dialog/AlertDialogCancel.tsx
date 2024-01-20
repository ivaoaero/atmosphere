import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Cancel } from '@radix-ui/react-alert-dialog';

import { cn } from '@utils/styles';

export const AlertDialogCancel = forwardRef<
  ElementRef<typeof Cancel>,
  ComponentPropsWithoutRef<typeof Cancel>
>(({ asChild = true, className, ...props }, ref) => (
  <Cancel
    {...props}
    asChild={asChild}
    className={cn('mt-2 sm:mt-0', className)}
    ref={ref}
  />
));
AlertDialogCancel.displayName = Cancel.displayName;
