import { HTMLAttributes } from 'react';

import { cn } from '@utils/styles';

export const SheetFooter = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'border-fuselage-200 dark:border-fuselage-700 mt-4 flex flex-col-reverse items-center justify-center border-t pt-4 sm:flex-row sm:justify-end sm:gap-2',
      className,
    )}
    {...props}
  />
);
SheetFooter.displayName = 'SheetFooter';
