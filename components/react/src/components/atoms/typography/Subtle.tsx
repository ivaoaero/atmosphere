import { forwardRef, HTMLAttributes } from 'react';

import { cn } from '@utils/styles';

export const Subtle = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      'text-fuselage-450 dark:text-fuselage-500 text-sm',
      className,
    )}
    {...props}
  />
));
Subtle.displayName = 'Subtle';
