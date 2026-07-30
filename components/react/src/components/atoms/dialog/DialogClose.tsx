import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

import { Close } from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

import { cn } from '@utils/styles';

export const DialogTopRightClose = forwardRef<
  ComponentRef<typeof Close>,
  ComponentPropsWithoutRef<typeof Close>
>(({ className, ...props }, ref) => {
  return (
    <Close
      ref={ref}
      className={cn(
        'ring-offset-background focus:ring-ring radix-state-open:bg-accent radix-state-open:text-muted-foreground absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none',
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
