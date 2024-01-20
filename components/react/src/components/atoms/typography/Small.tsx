import { forwardRef, HTMLAttributes } from 'react';

import { cn } from '@utils/styles';

export const Small = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <small
      ref={ref}
      className={cn('text-sm font-medium leading-none', className)}
      {...props}
    />
  ),
);
Small.displayName = 'Small';
