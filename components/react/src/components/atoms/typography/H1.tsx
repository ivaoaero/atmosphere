import { forwardRef, HTMLAttributes } from 'react';

import { cn } from '@utils/styles';

export const H1 = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn(
      'scroll-m-20 font-head text-4xl font-extrabold lg:text-5xl',
      className,
    )}
    {...props}
  />
));
H1.displayName = 'H1';
