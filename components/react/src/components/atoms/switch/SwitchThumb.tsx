import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Thumb as RadixThumb } from '@radix-ui/react-switch';

import { cn } from '@utils/styles';

export const SwitchThumb = forwardRef<
  ElementRef<typeof RadixThumb>,
  ComponentPropsWithoutRef<typeof RadixThumb>
>(({ className, ...props }, ref) => (
  <RadixThumb
    className={cn(
      'bg-background radix-state-checked:translate-x-4 radix-state-unchecked:translate-x-0 pointer-events-none block h-4 w-4 rounded-full shadow-lg ring-0 transition-transform',
      className,
    )}
    {...props}
    ref={ref}
  />
));
SwitchThumb.displayName = RadixThumb.displayName;
