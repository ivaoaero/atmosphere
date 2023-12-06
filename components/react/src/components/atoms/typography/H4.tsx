import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { cn } from '@utils/styles';

export const H4 = forwardRef<
  HTMLHeadingElement,
  ComponentPropsWithoutRef<'h4'>
>(({ className, ...props }, ref) => (
  <h4
    ref={ref}
    className={cn('scroll-m-20 font-head text-xl font-semibold', className)}
    {...props}
  />
));
H4.displayName = 'H4';
