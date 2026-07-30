import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

import { Viewport } from '@radix-ui/react-navigation-menu';

import { cn } from '@utils/styles';

export const NavigationMenuViewport = forwardRef<
  ComponentRef<typeof Viewport>,
  ComponentPropsWithoutRef<typeof Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn('absolute top-full left-0 flex justify-center')}>
    <Viewport
      className={cn(
        'origin-top-center h-radix-navigation-menu-viewport bg-popover text-popover-foreground radix-state-open:animate-in radix-state-closed:animate-out radix-state-closed:zoom-out-95 radix-state-open:zoom-in-90 md:w-radix-navigation-menu-viewport relative mt-1.5 w-full overflow-hidden rounded-md border shadow-lg',
        className,
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName = Viewport.displayName;
