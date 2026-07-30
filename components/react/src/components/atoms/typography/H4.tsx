import { forwardRef, HTMLAttributes } from 'react';

import { cn } from '@utils/styles';

export const H4 = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h4
    ref={ref}
    className={cn('font-head scroll-m-20 text-xl font-semibold', className)}
    {...props}
  />
));
H4.displayName = 'H4';
