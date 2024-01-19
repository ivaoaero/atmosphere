import { ComponentProps, MouseEventHandler } from 'react';

import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@components/atoms/alert-dialog';
import { Button } from '@components/atoms/button';

interface AlertDialogProps
  extends Pick<
    ComponentProps<typeof AlertDialogRoot>,
    'defaultOpen' | 'open' | 'onOpenChange'
  > {
  title: string;
  description?: string;
  triggerText: string;
  triggerButtonProps?: ComponentProps<typeof Button>;
  confirmText?: string;
  confirmButtonProps?: ComponentProps<typeof Button>;
  cancelText?: string;
  cancelButtonProps?: ComponentProps<typeof Button>;
  onConfirm?: MouseEventHandler<HTMLButtonElement>;
  onCancel?: MouseEventHandler<HTMLButtonElement>;
}
export const AlertDialog = ({
  title,
  description,
  triggerText,
  triggerButtonProps,
  confirmText = 'Confirm',
  confirmButtonProps,
  cancelText = 'Cancel',
  cancelButtonProps,
  onConfirm,
  onCancel,
  ...props
}: AlertDialogProps) => (
  <AlertDialogRoot {...props}>
    <AlertDialogTrigger>
      <Button variant={'outline'} {...triggerButtonProps}>
        {triggerText}
      </Button>
    </AlertDialogTrigger>
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogTitle>{title}</AlertDialogTitle>
        {description && (
          <AlertDialogDescription>{description}</AlertDialogDescription>
        )}
        <div className={'mt-4 flex justify-end space-x-2'}>
          <AlertDialogCancel>
            <Button
              variant={'outline'}
              onClick={onCancel}
              {...cancelButtonProps}
            >
              {cancelText}
            </Button>
          </AlertDialogCancel>
          <AlertDialogAction>
            <Button onClick={onConfirm} {...confirmButtonProps}>
              {confirmText}
            </Button>
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialogPortal>
  </AlertDialogRoot>
);
