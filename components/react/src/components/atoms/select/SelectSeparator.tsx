import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

import { Separator as RadixSeparator } from '@radix-ui/react-select';

import { cn } from '@utils/styles';

const SelectSeparator = forwardRef<
  ComponentRef<typeof RadixSeparator>,
  ComponentPropsWithoutRef<typeof RadixSeparator>
>(({ className, ...props }, ref) => (
  <RadixSeparator
    ref={ref}
    className={cn('bg-muted -mx-1 my-1 h-px', className)}
    {...props}
  />
));
SelectSeparator.displayName = RadixSeparator.displayName;

export { SelectSeparator };
