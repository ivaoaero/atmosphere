import { ComponentProps, ComponentType, ReactNode } from 'react';

import { VariantProps } from 'class-variance-authority';

import {
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
} from '@components/atoms/toast';
import { toastVariants } from '@components/atoms/toast/toastVariants';

type ToastVariant = NonNullable<VariantProps<typeof toastVariants>['variant']>;

export type ToastProps = {
  title: string;
  description?: string;
  duration?: number;
  variant?: ToastVariant;
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
  variant = 'default',
  toastProps,
  actionAltText,
  action,
}) => (
  <ToastRoot duration={duration} variant={variant} {...toastProps}>
    <div className={'grid gap-1'}>
      <ToastTitle>{title}</ToastTitle>
      {description && <ToastDescription>{description}</ToastDescription>}
    </div>

    {action && <ToastAction altText={actionAltText}>{action}</ToastAction>}
    <ToastClose />
  </ToastRoot>
);
