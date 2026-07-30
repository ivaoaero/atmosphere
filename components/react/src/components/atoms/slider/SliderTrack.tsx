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
      'bg-primary/20 relative h-1.5 w-full grow overflow-hidden rounded-full',
      className,
    )}
    ref={ref}
  />
));
SliderTrack.displayName = RadixTrack.displayName;
