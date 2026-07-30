import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

import { Description } from '@radix-ui/react-dialog';

import { cn } from '@utils/styles';

export const DialogDescription = forwardRef<
  ComponentRef<typeof Description>,
  ComponentPropsWithoutRef<typeof Description>
>(({ className, ...props }, ref) => (
  <Description
    ref={ref}
    className={cn(
      'text-fuselage-500 dark:text-fuselage-450 text-sm',
      className,
    )}
    {...props}
  />
));
DialogDescription.displayName = Description.displayName;
