import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { Button } from '@components/atoms/button';
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTopRightClose,
  DialogTrigger,
} from '@components/atoms/dialog';

export interface DialogProps
  extends ComponentPropsWithoutRef<typeof DialogRoot> {
  trigger?: ReactNode;
  title: string;
  description?: string;
  topRightCloseButton?: boolean;
  footer?: ReactNode;
}

export const Dialog = ({
  trigger,
  title,
  description,
  children,
  topRightCloseButton = true,
  footer,
  ...props
}: DialogProps) => {
  return (
    <DialogRoot {...props}>
      {trigger && (
        <DialogTrigger asChild>
          {typeof trigger === 'string' ? (
            <Button variant={'outline'}>{trigger}</Button>
          ) : (
            trigger
          )}
        </DialogTrigger>
      )}
      <DialogContent className={'sm:max-w-md'}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {children}
        {topRightCloseButton && <DialogTopRightClose />}
        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContent>
    </DialogRoot>
  );
};
Dialog.displayName = 'Dialog';
