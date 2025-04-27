import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Viewport } from '@radix-ui/react-toast';

import { cn } from '@utils/styles';

export const ToastViewport = forwardRef<
  ElementRef<typeof Viewport>,
  ComponentPropsWithoutRef<typeof Viewport>
>(({ className, ...props }, ref) => (
  <Viewport
    className={cn(
      'fixed top-0 z-[100] flex max-h-screen w-full list-none flex-col-reverse gap-3 p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
      className,
    )}
    {...props}
    ref={ref}
  />
));
ToastViewport.displayName = Viewport.displayName;
