import { ElementRef, forwardRef, HTMLAttributes } from 'react';

import { cn } from '@utils/styles';

export const AlertDialogHeader = forwardRef<
  ElementRef<'div'>,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    {...props}
    className={cn(
      'flex flex-col space-y-2 text-center sm:text-left',
      className,
    )}
    ref={ref}
  />
));
AlertDialogHeader.displayName = 'AlertDialogHeader';
