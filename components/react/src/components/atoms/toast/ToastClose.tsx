import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

import { Close } from '@radix-ui/react-toast';
import { X } from 'lucide-react';

import { cn } from '@utils/styles';

type CloseProps = ComponentPropsWithoutRef<typeof Close>;

export const ToastClose = forwardRef<
  ComponentRef<typeof Close>,
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
        'text-foreground/50 hover:text-foreground group-[.destructive]:text-semantic-red-300 group-[.destructive]:hover:text-semantic-red-50 absolute top-1 right-1 rounded-md p-1 opacity-0 transition-opacity group-hover:opacity-100 focus:opacity-100 focus:ring-1 focus:outline-hidden group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
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
