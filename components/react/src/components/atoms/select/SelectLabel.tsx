import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Label as RadixLabel } from '@radix-ui/react-select';

import { cn } from '@utils/styles';

const SelectLabel = forwardRef<
  ElementRef<typeof RadixLabel>,
  ComponentPropsWithoutRef<typeof RadixLabel>
>(({ className, ...props }, ref) => (
  <RadixLabel
    ref={ref}
    className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)}
    {...props}
  />
));
SelectLabel.displayName = RadixLabel.displayName;

export { SelectLabel };
