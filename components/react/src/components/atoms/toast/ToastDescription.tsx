import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

import { Description } from '@radix-ui/react-toast';

import { cn } from '@utils/styles';

export const ToastDescription = forwardRef<
  ComponentRef<typeof Description>,
  ComponentPropsWithoutRef<typeof Description>
>(({ className, ...props }, ref) => (
  <Description
    className={cn('text-sm opacity-90', className)}
    {...props}
    ref={ref}
  />
));
ToastDescription.displayName = Description.displayName;
