import { forwardRef, HTMLAttributes } from 'react';

import { cn } from '@utils/styles';

export const CardRoot = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'bg-card text-card-foreground rounded-lg border shadow-xs',
      className,
    )}
    {...props}
  />
));
CardRoot.displayName = 'CardRoot';
