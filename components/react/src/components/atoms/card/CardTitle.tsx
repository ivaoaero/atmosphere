import { forwardRef, HTMLAttributes } from 'react';

import { cn } from '@utils/styles';

export const CardTitle = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-fuselage-800 dark:text-fuselage-50 text-2xl leading-none font-semibold tracking-tight',
      className,
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';
