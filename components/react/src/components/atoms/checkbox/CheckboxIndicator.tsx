import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Indicator as RadixIndicator } from '@radix-ui/react-checkbox';

import { cn } from '@utils/styles';

const CheckboxIndicator = forwardRef<
  ElementRef<typeof RadixIndicator>,
  ComponentPropsWithoutRef<typeof RadixIndicator>
>(({ className, ...props }, ref) => (
  <RadixIndicator
    ref={ref}
    className={cn('flex items-center justify-center text-current', className)}
    {...props}
  />
));
CheckboxIndicator.displayName = RadixIndicator.displayName;

export { CheckboxIndicator };
