import { ComponentProps, PropsWithChildren } from 'react';

import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { clsx } from 'clsx';

import { Button } from '../button';

interface AlertDialogProps {
  title: string;
  description?: string;
  confirmText?: string;
  confirmButtonProps?: ComponentProps<typeof Button>;
  cancelText?: string;
  cancelButtonProps?: ComponentProps<typeof Button>;
}

export const AlertDialog = ({
  children,
  title,
  description,
  confirmText = 'Confirm',
  confirmButtonProps,
  cancelText = 'Cancel',
  cancelButtonProps,
}: PropsWithChildren<AlertDialogProps>) => (
  <AlertDialogPrimitive.Root defaultOpen={false}>
    <AlertDialogPrimitive.Trigger asChild>
      {children}
    </AlertDialogPrimitive.Trigger>
    <AlertDialogPrimitive.Portal>
      <AlertDialogPrimitive.Overlay className={'fixed inset-0 z-20 bg-fuselage-900/75'} />
      <AlertDialogPrimitive.Content
        className={clsx(
          'fixed z-50',
          'w-[95vw] max-w-md rounded-md p-6 md:w-full',
          'top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]',
          'bg-white dark:bg-fuselage-700',
          'border border-fuselage-50/50 dark:border-fuselage-600/50',
        )}
      >
        <AlertDialogPrimitive.Title className={'font-bold text-fuselage-700 dark:text-fuselage-50'}>
          {title}
        </AlertDialogPrimitive.Title>
        <AlertDialogPrimitive.Description className={'mt-2 text-sm font-normal text-fuselage-700 dark:text-fuselage-200'}>
          {description}
        </AlertDialogPrimitive.Description>
        <div className={'mt-4 flex justify-end space-x-2'}>
          <AlertDialogPrimitive.Cancel asChild>
            <Button variant={'destructive'} {...cancelButtonProps}>
              {cancelText}
            </Button>
          </AlertDialogPrimitive.Cancel>
          <AlertDialogPrimitive.Action asChild>
            <Button variant={'primary'} {...confirmButtonProps}>
              {confirmText}
            </Button>
          </AlertDialogPrimitive.Action>
        </div>
      </AlertDialogPrimitive.Content>
    </AlertDialogPrimitive.Portal>
  </AlertDialogPrimitive.Root>
);
AlertDialog.displayName = 'AlertDialog';
