import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Description } from '@radix-ui/react-alert-dialog';

import { cn } from '@utils/styles';

export const AlertDialogDescription = forwardRef<
  ElementRef<typeof Description>,
  ComponentPropsWithoutRef<typeof Description>
>(({ className, ...props }, ref) => (
  <Description
    {...props}
    className={cn(
      'text-fuselage-500 dark:text-fuselage-450 text-sm',
      className,
    )}
    ref={ref}
  />
));
AlertDialogDescription.displayName = Description.displayName;
