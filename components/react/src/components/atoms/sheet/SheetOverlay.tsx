import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

import { Overlay } from '@radix-ui/react-dialog';

import { cn } from '@utils/styles';

export const SheetOverlay = forwardRef<
  ComponentRef<typeof Overlay>,
  ComponentPropsWithoutRef<typeof Overlay>
>(({ className, ...props }, ref) => (
  <Overlay
    className={cn(
      'radix-state-open:animate-in radix-state-closed:animate-out radix-state-closed:fade-out-0 radix-state-open:fade-in-0 fixed inset-0 z-50 bg-black/80',
      className,
    )}
    {...props}
    ref={ref}
  />
));

SheetOverlay.displayName = Overlay.displayName;
