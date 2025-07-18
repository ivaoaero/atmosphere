import { forwardRef, HTMLAttributes } from 'react';

import { cn } from '@utils/styles';

export const TableRow = forwardRef<
  HTMLTableRowElement,
  HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      'border-b transition-colors hover:bg-muted/10 data-[state=selected]:bg-muted/30 dark:border-fuselage-700 dark:hover:bg-muted/30 dark:data-[state=selected]:bg-muted',
      className,
    )}
    {...props}
  />
));
TableRow.displayName = 'TableRow';
