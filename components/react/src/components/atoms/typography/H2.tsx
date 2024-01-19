import { forwardRef, HTMLAttributes } from 'react';

import { cn } from '@utils/styles';

export const H2 = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      'mt-10 scroll-m-20 pb-3 font-head text-3xl font-bold transition-colors first:mt-0 dark:border-fuselage-700',
      className,
    )}
    {...props}
  />
));
H2.displayName = 'H2';
