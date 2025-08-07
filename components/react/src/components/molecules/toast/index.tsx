import { ComponentType, ReactNode } from 'react';

import {
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
} from '@components/atoms/toast';

export interface ToastProps {
  title: string;
  description?: string;
  duration?: number;
  toastProps?: ToastProps;
  actionAltText: string;
  action?: ReactNode;
}
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
