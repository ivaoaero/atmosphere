import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Root as RadixRoot } from '@radix-ui/react-checkbox';

import { cn } from '@utils/styles';

export const CheckboxRoot = forwardRef<
  ElementRef<typeof RadixRoot>,
  ComponentPropsWithoutRef<typeof RadixRoot>
>(({ className, ...props }, ref) => (
  <RadixRoot
    ref={ref}
    className={cn(
      'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
      className,
    )}
    {...props}
  />
));
CheckboxRoot.displayName = RadixRoot.displayName;
