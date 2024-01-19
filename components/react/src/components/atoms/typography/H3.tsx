import { forwardRef, HTMLAttributes } from 'react';

import { cn } from '@utils/styles';

export const H3 = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('scroll-m-20 font-head text-2xl font-semibold', className)}
    {...props}
  />
));
H3.displayName = 'H3';
