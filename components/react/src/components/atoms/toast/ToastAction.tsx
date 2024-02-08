import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Action } from '@radix-ui/react-toast';

import { cn } from '@utils/styles';

export const ToastAction = forwardRef<
  ElementRef<typeof Action>,
  ComponentPropsWithoutRef<typeof Action>
>(({ asChild = false, className, ...props }, ref) => (
  <Action
    asChild={asChild}
    {...props}
    className={cn(
      'inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-fuselage-200 bg-transparent px-3 text-sm font-medium transition-colors hover:bg-fuselage-100 focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive',
      className,
    )}
    ref={ref}
  />
));
ToastAction.displayName = Action.displayName;
