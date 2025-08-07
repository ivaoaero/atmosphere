import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Root } from '@radix-ui/react-radio-group';

import { cn } from '@utils/styles';

export const RadioGroupRoot = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => {
  return <Root className={cn('grid gap-2', className)} {...props} ref={ref} />;
});
RadioGroupRoot.displayName = Root.displayName;
