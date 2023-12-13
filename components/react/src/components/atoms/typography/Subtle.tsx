import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { cn } from '@utils/styles';

export const Subtle = forwardRef<
  HTMLParagraphElement,
  ComponentPropsWithoutRef<'p'>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      'text-sm text-fuselage-200 dark:text-fuselage-300',
      className,
    )}
    {...props}
  />
));
Subtle.displayName = 'Subtle';
