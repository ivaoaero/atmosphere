import { forwardRef, HTMLAttributes } from 'react';

import { cn } from '@utils/styles';

export const CardRoot = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-lg border bg-card text-card-foreground shadow-sm',
      className,
    )}
    {...props}
  />
));
CardRoot.displayName = 'CardRoot';
