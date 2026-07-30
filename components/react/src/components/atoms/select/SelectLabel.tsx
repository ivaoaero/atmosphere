import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

import { Label as RadixLabel } from '@radix-ui/react-select';

import { cn } from '@utils/styles';

const SelectLabel = forwardRef<
  ComponentRef<typeof RadixLabel>,
  ComponentPropsWithoutRef<typeof RadixLabel>
>(({ className, ...props }, ref) => (
  <RadixLabel
    ref={ref}
    className={cn('py-1.5 pr-2 pl-8 text-sm font-semibold', className)}
    {...props}
  />
));
SelectLabel.displayName = RadixLabel.displayName;

export { SelectLabel };
