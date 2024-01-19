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
      'fixed inset-0 z-50 bg-fuselage-950/75',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className,
    )}
    ref={ref}
  />
));
AlertDialogOverlay.displayName = Overlay.displayName;
