import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

import { Indicator } from '@radix-ui/react-navigation-menu';

import { cn } from '@utils/styles';

export const NavigationMenuIndicator = forwardRef<
  ComponentRef<typeof Indicator>,
  ComponentPropsWithoutRef<typeof Indicator>
>(({ className, ...props }, ref) => (
  <Indicator
    ref={ref}
    className={cn(
      'radix-state-visible:animate-in radix-state-hidden:animate-out radix-state-hidden:fade-out radix-state-visible:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden',
      className,
    )}
    {...props}
  >
    <div
      className={
        'bg-border relative top-[60%] size-2 rotate-45 rounded-tl-sm shadow-md'
      }
    />
  </Indicator>
));
NavigationMenuIndicator.displayName = Indicator.displayName;
