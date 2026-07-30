import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Overlay } from '@radix-ui/react-alert-dialog';

import { cn } from '@utils/styles';

export const AlertDialogOverlay = forwardRef<
  ElementRef<typeof Overlay>,
  ComponentPropsWithoutRef<typeof Overlay>
>(({ className, ...props }, ref) => (
  <Overlay
    {...props}
    className={cn(
      'bg-fuselage-950/80 fixed inset-0 z-50',
      'radix-state-open:animate-in radix-state-closed:animate-out',
      'radix-state-closed:fade-out-0 radix-state-open:fade-in-0',
      className,
    )}
    ref={ref}
  />
));
AlertDialogOverlay.displayName = Overlay.displayName;
