import { forwardRef, TdHTMLAttributes } from 'react';

import { cn } from '@utils/styles';

export const TD = forwardRef<
  HTMLTableCellElement,
  TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      'border-fuselage-200 dark:border-fuselage-700 border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
      className,
    )}
    {...props}
  />
));
TD.displayName = 'TD';
