import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Viewport } from '@radix-ui/react-scroll-area';

import { cn } from '@utils/styles';

export const ScrollAreaViewport = forwardRef<
  ElementRef<typeof Viewport>,
  ComponentPropsWithoutRef<typeof Viewport>
>(({ className, children, ...props }, ref) => (
  <Viewport
    ref={ref}
    className={cn('h-full w-full rounded-[inherit]', className)}
    {...props}
  >
    {children}
  </Viewport>
));
ScrollAreaViewport.displayName = Viewport.displayName;
