import { ComponentProps, PropsWithChildren } from 'react';

import {
  Action,
  Cancel,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
} from '@radix-ui/react-alert-dialog';
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
  <Root defaultOpen={false}>
    <Trigger asChild>{children}</Trigger>
    <Portal>
      <Overlay className={'fixed inset-0 z-20 bg-fuselage-900/75'} />
      <Content
        className={clsx(
          'fixed z-50',
          'w-[95vw] max-w-md rounded-md p-6 md:w-full',
          'top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]',
          'bg-white dark:bg-fuselage-700',
          'border border-fuselage-50/50 dark:border-fuselage-600/50',
        )}
      >
        <Title className={'font-bold text-fuselage-700 dark:text-fuselage-50'}>
          {title}
        </Title>
        <Description
          className={
            'mt-2 text-sm font-normal text-fuselage-700 dark:text-fuselage-200'
          }
        >
          {description}
        </Description>
        <div className={'mt-4 flex justify-end space-x-2'}>
          <Cancel asChild>
            <Button variant={'destructive'} {...cancelButtonProps}>
              {cancelText}
            </Button>
          </Cancel>
          <Action asChild>
            <Button variant={'primary'} {...confirmButtonProps}>
              {confirmText}
            </Button>
          </Action>
        </div>
      </Content>
    </Portal>
  </Root>
);
AlertDialog.displayName = 'AlertDialog';
