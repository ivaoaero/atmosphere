import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { cn } from '@utils/styles';

export const Large = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('font-sans text-lg font-semibold', className)}
    {...props}
  />
));
Large.displayName = 'Large';
