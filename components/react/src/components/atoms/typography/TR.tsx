import { forwardRef, HTMLAttributes } from 'react';

import { cn } from '@utils/styles';

export const TR = forwardRef<
  HTMLTableRowElement,
  HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      'm-0 border-t border-fuselage-200 p-0 even:bg-semantic-blue-100 dark:border-fuselage-700 dark:even:bg-fuselage-900',
      className,
    )}
    {...props}
  />
));
TR.displayName = 'TR';
