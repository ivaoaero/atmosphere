import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

import { Range as RadixRange } from '@radix-ui/react-slider';

import { cn } from '@utils/styles';

export const SliderRange = forwardRef<
  ComponentRef<typeof RadixRange>,
  ComponentPropsWithoutRef<typeof RadixRange>
>(({ className, ...props }, ref) => (
  <RadixRange
    className={cn('bg-primary absolute h-full', className)}
    {...props}
    ref={ref}
  />
));
SliderRange.displayName = RadixRange.displayName;
