import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

import { Description } from '@radix-ui/react-dialog';

import { cn } from '@utils/styles';

export const SheetDescription = forwardRef<
  ComponentRef<typeof Description>,
  ComponentPropsWithoutRef<typeof Description>
>(({ className, ...props }, ref) => (
  <Description
    ref={ref}
    className={cn('text-muted-foreground text-sm', className)}
    {...props}
  />
));
SheetDescription.displayName = Description.displayName;
