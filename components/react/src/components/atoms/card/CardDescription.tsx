import { forwardRef, HTMLAttributes } from 'react';

import { cn } from '@utils/styles';

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      'text-sm text-fuselage-600 dark:text-fuselage-200',
      className,
    )}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';
