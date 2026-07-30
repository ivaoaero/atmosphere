import { ElementRef, forwardRef, HTMLAttributes } from 'react';

import { cn } from '@utils/styles';

export const AlertDialogFooter = forwardRef<
  ElementRef<'div'>,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    {...props}
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-2',
      className,
    )}
    ref={ref}
  />
));
AlertDialogFooter.displayName = 'AlertDialogFooter';
