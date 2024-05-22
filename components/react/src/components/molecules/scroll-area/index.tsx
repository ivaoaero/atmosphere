import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import {
  ScrollAreaCorner,
  ScrollAreaRoot,
  ScrollAreaViewport,
  ScrollBar,
} from '@components/atoms/scroll-area';

import { cn } from '@utils/styles';

export const ScrollArea = forwardRef<
  ElementRef<typeof ScrollAreaRoot>,
  ComponentPropsWithoutRef<typeof ScrollAreaRoot>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaRoot
    ref={ref}
    className={cn('relative overflow-hidden', className)}
    {...props}
  >
    <ScrollAreaViewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaViewport>
    <ScrollBar />
    <ScrollAreaCorner />
  </ScrollAreaRoot>
));
ScrollArea.displayName = ScrollAreaRoot.displayName;
