import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Track as RadixTrack } from '@radix-ui/react-slider';

import { cn } from '@utils/styles';

export const SliderTrack = forwardRef<
  ElementRef<typeof RadixTrack>,
  ComponentPropsWithoutRef<typeof RadixTrack>
>(({ className, ...props }, ref) => (
  <RadixTrack
    {...props}
    className={cn(
      'relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20',
      className,
    )}
    ref={ref}
  />
));
SliderTrack.displayName = RadixTrack.displayName;
