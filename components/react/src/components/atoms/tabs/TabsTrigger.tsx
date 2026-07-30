import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Trigger } from '@radix-ui/react-tabs';

import { cn } from '@utils/styles';

export const TabsTrigger = forwardRef<
  ElementRef<typeof Trigger>,
  ComponentPropsWithoutRef<typeof Trigger>
>(({ className, ...props }, ref) => (
  <Trigger
    ref={ref}
    className={cn(
      'ring-offset-background focus-visible:ring-ring radix-state-active:bg-primary radix-state-active:text-primary-foreground radix-state-active:shadow-xs inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50',
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = Trigger.displayName;
