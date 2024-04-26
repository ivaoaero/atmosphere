import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Description } from '@radix-ui/react-dialog';

import { cn } from '@utils/styles';

export const DialogDescription = forwardRef<
  ElementRef<typeof Description>,
  ComponentPropsWithoutRef<typeof Description>
>(({ className, ...props }, ref) => (
  <Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
DialogDescription.displayName = Description.displayName;
