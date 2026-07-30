import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

import { Content } from '@radix-ui/react-navigation-menu';

import { cn } from '@utils/styles';

export const NavigationMenuContent = forwardRef<
  ComponentRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ className, ...props }, ref) => (
  <Content
    ref={ref}
    className={cn(
      'radix-motion-from-end:animate-in radix-motion-from-start:animate-in radix-motion-to-end:animate-out radix-motion-to-start:animate-out radix-motion-from-end:fade-in radix-motion-from-start:fade-in radix-motion-to-end:fade-out radix-motion-to-start:fade-out radix-motion-from-end:slide-in-from-right-52 radix-motion-from-start:slide-in-from-left-52 radix-motion-to-end:slide-out-to-right-52 radix-motion-to-start:slide-out-to-left-52 top-0 left-0 w-full md:absolute md:w-auto',
      className,
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = Content.displayName;
