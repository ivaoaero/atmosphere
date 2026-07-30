import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

import { Action } from '@radix-ui/react-toast';

import { cn } from '@utils/styles';

export const ToastAction = forwardRef<
  ComponentRef<typeof Action>,
  ComponentPropsWithoutRef<typeof Action>
>(({ asChild = false, className, ...props }, ref) => (
  <Action
    asChild={asChild}
    {...props}
    className={cn(
      'border-fuselage-200 hover:bg-fuselage-100 focus:ring-ring group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors focus:ring-1 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50',
      className,
    )}
    ref={ref}
  />
));
ToastAction.displayName = Action.displayName;
