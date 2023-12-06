import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { cn } from '@utils/styles';

export const Small = forwardRef<HTMLElement, ComponentPropsWithoutRef<'small'>>(
  ({ className, ...props }, ref) => (
    <small
      ref={ref}
      className={cn('text-sm font-medium leading-none', className)}
      {...props}
    />
  ),
);
Small.displayName = 'Small';
