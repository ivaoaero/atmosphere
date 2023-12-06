import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { cn } from '@utils/styles';

export const H2 = forwardRef<
  HTMLHeadingElement,
  ComponentPropsWithoutRef<'h2'>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      'mt-10 scroll-m-20 border-b border-fuselage-50 pb-3 font-head text-3xl font-bold transition-colors first:mt-0 dark:border-fuselage-600',
      className,
    )}
    {...props}
  />
));
H2.displayName = 'H2';
