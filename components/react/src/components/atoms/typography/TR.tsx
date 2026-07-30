import { forwardRef, HTMLAttributes } from 'react';

import { cn } from '@utils/styles';

export const TR = forwardRef<
  HTMLTableRowElement,
  HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      'border-fuselage-200 even:bg-semantic-blue-100 dark:border-fuselage-700 dark:even:bg-fuselage-900 m-0 border-t p-0',
      className,
    )}
    {...props}
  />
));
TR.displayName = 'TR';
