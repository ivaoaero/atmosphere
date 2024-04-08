import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Indicator } from '@radix-ui/react-navigation-menu';

import { cn } from '@utils/styles';

export const NavigationMenuIndicator = forwardRef<
  ElementRef<typeof Indicator>,
  ComponentPropsWithoutRef<typeof Indicator>
>(({ className, ...props }, ref) => (
  <Indicator
    ref={ref}
    className={cn(
      'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
      className,
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </Indicator>
));
NavigationMenuIndicator.displayName = Indicator.displayName;
