import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

import { Root } from '@radix-ui/react-toast';
import { VariantProps } from 'class-variance-authority';

import { toastVariants } from '@components/atoms/toast/toastVariants';

import { cn } from '@utils/styles';

export const ToastRoot = forwardRef<
  ComponentRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root> & VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => (
  <Root
    className={cn(toastVariants({ variant }), className)}
    {...props}
    ref={ref}
  />
));
ToastRoot.displayName = Root.displayName;
