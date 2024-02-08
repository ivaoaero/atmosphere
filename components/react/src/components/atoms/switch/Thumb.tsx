import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Thumb as RadixThumb } from '@radix-ui/react-switch';

import { cn } from '@utils/styles';

export const Thumb = forwardRef<
  ElementRef<typeof RadixThumb>,
  ComponentPropsWithoutRef<typeof RadixThumb>
>(({ className, ...props }, ref) => (
  <RadixThumb
    className={cn(
      'pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0',
      className,
    )}
    {...props}
    ref={ref}
  />
));
Thumb.displayName = RadixThumb.displayName;
