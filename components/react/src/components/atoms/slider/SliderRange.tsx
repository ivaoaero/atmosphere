import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Range as RadixRange } from '@radix-ui/react-slider';

import { cn } from '@utils/styles';

export const SliderRange = forwardRef<
  ElementRef<typeof RadixRange>,
  ComponentPropsWithoutRef<typeof RadixRange>
>(({ className, ...props }, ref) => (
  <RadixRange
    className={cn('absolute h-full bg-primary', className)}
    {...props}
    ref={ref}
  />
));
SliderRange.displayName = RadixRange.displayName;
