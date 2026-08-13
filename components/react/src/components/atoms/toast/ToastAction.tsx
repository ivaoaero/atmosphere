import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

import { Action } from '@radix-ui/react-toast';
import { VariantProps } from 'class-variance-authority';

import { cn } from '@utils/styles';

import { toastActionVariants } from './toastVariants';

export const ToastAction = forwardRef<
  ComponentRef<typeof Action>,
  ComponentPropsWithoutRef<typeof Action> &
    VariantProps<typeof toastActionVariants>
>(({ asChild = false, variant, className, ...props }, ref) => (
  <Action
    asChild={asChild}
    {...props}
    className={cn(toastActionVariants({ variant }), className)}
    ref={ref}
  />
));
ToastAction.displayName = Action.displayName;
