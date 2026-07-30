import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Root as RadixRoot } from '@radix-ui/react-switch';

import { cn } from '@utils/styles';

export const SwitchRoot = forwardRef<
  ElementRef<typeof RadixRoot>,
  ComponentPropsWithoutRef<typeof RadixRoot>
>(({ className, ...props }, ref) => (
  <RadixRoot
    className={cn(
      'peer focus-visible:ring-ring focus-visible:ring-offset-background radix-state-checked:bg-primary radix-state-unchecked:bg-input inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50',
      className,
    )}
    {...props}
    ref={ref}
  />
));
SwitchRoot.displayName = RadixRoot.displayName;
