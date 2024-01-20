import { forwardRef, ThHTMLAttributes } from 'react';

import { cn } from '@utils/styles';

export const TH = forwardRef<
  HTMLTableCellElement,
  ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      'border border-fuselage-200 px-4 py-2 text-left font-bold dark:border-fuselage-700 [&[align=center]]:text-center [&[align=right]]:text-right',
      className,
    )}
    {...props}
  />
));
TH.displayName = 'TH';
