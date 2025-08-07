import { HTMLAttributes } from 'react';

import { cn } from '@utils/styles';

export const SheetFooter = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'mt-4 flex flex-col-reverse items-center justify-center border-t border-fuselage-200 pt-4 dark:border-fuselage-700 sm:flex-row sm:justify-end sm:space-x-2',
      className,
    )}
    {...props}
  />
);
SheetFooter.displayName = 'SheetFooter';
