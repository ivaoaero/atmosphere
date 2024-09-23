import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Close } from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

import { cn } from '@utils/styles';

export const DialogTopRightClose = forwardRef<
  ElementRef<typeof Close>,
  ComponentPropsWithoutRef<typeof Close>
>(({ className, ...props }, ref) => {
  return (
    <Close
      ref={ref}
      className={cn(
        'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground',
        className,
      )}
      {...props}
    >
      <X className={'size-4'} />
      <span className={'sr-only'}>Close</span>
    </Close>
  );
});
DialogTopRightClose.displayName = 'DialogTopRightClose';
