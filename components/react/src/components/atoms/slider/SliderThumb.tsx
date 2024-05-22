import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Thumb as RadixThumb } from '@radix-ui/react-slider';

import { cn } from '@utils/styles';

export const SliderThumb = forwardRef<
  ElementRef<typeof RadixThumb>,
  ComponentPropsWithoutRef<typeof RadixThumb>
>(({ className, ...props }, ref) => (
  <RadixThumb
    className={cn(
      'block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
      className,
    )}
    {...props}
    ref={ref}
  />
));
SliderThumb.displayName = RadixThumb.displayName;
