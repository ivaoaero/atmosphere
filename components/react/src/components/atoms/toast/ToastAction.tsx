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
      'border-fuselage-200 hover:bg-fuselage-100 focus:ring-ring group-[.success]:hover:bg-semantic-green-400/70 group-[.success]:hover:text-fuselage-700 group-[.success]:focus:ring-semantic-green-500 group-[.error]:border-semantic-red-200/70 group-[.error]:hover:border-semantic-red-200 group-[.error]:hover:bg-semantic-red-200 group-[.error]:hover:text-fuselage-700 group-[.error]:focus:ring-semantic-red-500 group-[.warning]:border-semantic-yellow-500/40 group-[.warning]:hover:border-semantic-yellow-200/80 group-[.warning]:hover:bg-semantic-yellow-200/80 group-[.warning]:hover:text-semantic-yellow-900 group-[.warning]:focus:ring-semantic-yellow-500 inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors group-[.success]:border-green-400/60 focus:ring-1 focus:outline-none disabled:pointer-events-none disabled:opacity-50',
      className,
    )}
    ref={ref}
  />
));
ToastAction.displayName = Action.displayName;
