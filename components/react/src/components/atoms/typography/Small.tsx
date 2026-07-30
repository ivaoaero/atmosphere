import { forwardRef, HTMLAttributes } from 'react';

import { cn } from '@utils/styles';

export const Small = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <small
      ref={ref}
      className={cn('text-sm leading-none font-medium', className)}
      {...props}
    />
  ),
);
Small.displayName = 'Small';
