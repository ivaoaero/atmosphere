import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Viewport } from '@radix-ui/react-toast';

import { cn } from '@utils/styles';

export const ToastViewport = forwardRef<
  ElementRef<typeof Viewport>,
  ComponentPropsWithoutRef<typeof Viewport>
>(({ className, ...props }, ref) => (
  <Viewport
    className={cn(
      // 'fixed bottom-0 right-0 flex flex-col p-6 gap-3 w-full list-none z-[999] outline-none md:max-w-xl',
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
      className,
    )}
    {...props}
    ref={ref}
  />
));
ToastViewport.displayName = Viewport.displayName;
