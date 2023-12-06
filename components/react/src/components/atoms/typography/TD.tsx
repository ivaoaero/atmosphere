import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { cn } from '@utils/styles';

export const TD = forwardRef<
  HTMLTableCellElement,
  ComponentPropsWithoutRef<'td'>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      'border border-fuselage-50 px-4 py-2 text-left dark:border-fuselage-600 [&[align=center]]:text-center [&[align=right]]:text-right',
      className,
    )}
    {...props}
  />
));
TD.displayName = 'TD';
