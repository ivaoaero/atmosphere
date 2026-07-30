import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

import { Content } from '@radix-ui/react-tooltip';

import { cn } from '@utils/styles';

export const TooltipContent = forwardRef<
  ComponentRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      'bg-popover text-popover-foreground animate-in fade-in-0 zoom-in-95 radix-state-closed:animate-out radix-state-closed:fade-out-0 radix-state-closed:zoom-out-95 radix-side-bottom:slide-in-from-top-2 radix-side-left:slide-in-from-right-2 radix-side-right:slide-in-from-left-2 radix-side-top:slide-in-from-bottom-2 z-50 overflow-hidden rounded-md border px-3 py-1.5 text-sm shadow-md',
      className,
    )}
    {...props}
  />
));
TooltipContent.displayName = Content.displayName;
