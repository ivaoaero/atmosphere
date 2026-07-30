import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

import { Root as RadixRoot } from '@radix-ui/react-checkbox';

import { cn } from '@utils/styles';

export const CheckboxRoot = forwardRef<
  ComponentRef<typeof RadixRoot>,
  ComponentPropsWithoutRef<typeof RadixRoot>
>(({ className, ...props }, ref) => (
  <RadixRoot
    ref={ref}
    className={cn(
      'peer border-primary ring-offset-background focus-visible:ring-ring radix-state-checked:bg-primary radix-state-checked:text-primary-foreground dark:border-primary flex size-4 shrink-0 rounded-sm border focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50',
      className,
    )}
    {...props}
  />
));
CheckboxRoot.displayName = RadixRoot.displayName;
