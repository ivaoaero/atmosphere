import { forwardRef, ThHTMLAttributes } from 'react';

import { cn } from '@utils/styles';

export const TH = forwardRef<
  HTMLTableCellElement,
  ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      'border-fuselage-200 dark:border-fuselage-700 border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
      className,
    )}
    {...props}
  />
));
TH.displayName = 'TH';
