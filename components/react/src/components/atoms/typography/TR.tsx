import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { cn } from '@utils/styles';

export const TR = forwardRef<
  HTMLTableRowElement,
  ComponentPropsWithoutRef<'tr'>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      'm-0 border-t border-fuselage-50 p-0 even:bg-semantic-blue-100 dark:border-fuselage-600 dark:even:bg-fuselage-800',
      className,
    )}
    {...props}
  />
));
TR.displayName = 'TR';
