import { ComponentRef, forwardRef, HTMLAttributes } from 'react';

import { cn } from '@utils/styles';

export const AlertDialogHeader = forwardRef<
  ComponentRef<'div'>,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    {...props}
    className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
    ref={ref}
  />
));
AlertDialogHeader.displayName = 'AlertDialogHeader';
