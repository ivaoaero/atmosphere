import { ComponentProps, ComponentType, ReactNode } from 'react';

import {
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
} from '@components/atoms/toast';

export type ToastProps = {
  title: string;
  description?: string;
  duration?: number;
  toastProps?: ComponentProps<typeof ToastRoot>;
} & (
  | {
      actionAltText: string;
      action: ReactNode;
    }
  | {
      actionAltText?: never;
      action?: never;
    }
);

export const Toast: ComponentType<ToastProps> = ({
  title,
  description,
  duration = 5000,
  toastProps,
  actionAltText,
  action,
}) => (
  <ToastRoot duration={duration} {...toastProps}>
    <div className={'grid gap-1'}>
      <ToastTitle>{title}</ToastTitle>
      {description && <ToastDescription>{description}</ToastDescription>}
    </div>

    {action && <ToastAction altText={actionAltText}>{action}</ToastAction>}
    <ToastClose />
  </ToastRoot>
);
