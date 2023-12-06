import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { cn } from '@utils/styles';

export const TH = forwardRef<
  HTMLTableCellElement,
  ComponentPropsWithoutRef<'th'>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      'border border-fuselage-50 px-4 py-2 text-left font-bold dark:border-fuselage-600 [&[align=center]]:text-center [&[align=right]]:text-right',
      className,
    )}
    {...props}
  />
));
TH.displayName = 'TH';
