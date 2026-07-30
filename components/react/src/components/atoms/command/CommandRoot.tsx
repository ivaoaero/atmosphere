import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Command as CommandPrimitive } from 'cmdk';

import { cn } from '@utils/styles';

export const CommandRoot = forwardRef<
  ElementRef<typeof CommandPrimitive>,
  ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      'bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md',
      className,
    )}
    {...props}
  />
));
CommandRoot.displayName = CommandPrimitive.displayName;
