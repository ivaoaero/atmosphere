import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Root } from '@radix-ui/react-navigation-menu';

import { NavigationMenuViewport } from '@components/atoms/navigation-menu/NavigationMenuViewport';

import { cn } from '@utils/styles';

export const NavigationMenuRoot = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root>
>(({ className, children, ...props }, ref) => (
  <Root
    ref={ref}
    className={cn(
      'relative z-10 flex max-w-max flex-1 items-center justify-center',
      className,
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </Root>
));
NavigationMenuRoot.displayName = Root.displayName;
