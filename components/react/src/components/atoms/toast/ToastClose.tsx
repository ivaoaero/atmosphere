import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Close } from '@radix-ui/react-toast';
import { X } from 'lucide-react';

import { cn } from '@utils/styles';

type CloseProps = ComponentPropsWithoutRef<typeof Close>;

export const ToastClose = forwardRef<
  ElementRef<typeof Close>,
  Omit<CloseProps, 'children'> & Partial<Pick<CloseProps, 'children'>>
>(
  (
    { 'aria-label': ariaLabel = 'Close', className, children, ...props },
    ref,
  ) => (
    <Close
      {...props}
      aria-label={ariaLabel}
      className={cn(
        'absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
        className,
      )}
      ref={ref}
    >
      {children || (
        <span aria-hidden>
          <X className={'size-4'} />
        </span>
      )}
    </Close>
  ),
);
ToastClose.displayName = Close.displayName;
