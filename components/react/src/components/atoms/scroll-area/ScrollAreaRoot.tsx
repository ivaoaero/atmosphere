import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Root } from '@radix-ui/react-scroll-area';

import { cn } from '@utils/styles';

export const ScrollAreaRoot = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root>
>(({ className, children, ...props }, ref) => (
  <Root
    ref={ref}
    className={cn('relative overflow-hidden', className)}
    {...props}
  >
    {children}
  </Root>
));
ScrollAreaRoot.displayName = Root.displayName;
