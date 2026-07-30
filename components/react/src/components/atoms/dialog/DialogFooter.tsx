import { HTMLAttributes } from 'react';

import { cn } from '@utils/styles';

export const DialogFooter = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-2',
      className,
    )}
    {...props}
  />
);
DialogFooter.displayName = 'DialogFooter';
