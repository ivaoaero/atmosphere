import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Root } from '@radix-ui/react-toast';
import { VariantProps } from 'class-variance-authority';

import { toastVariants } from '@components/atoms/toast/toastVariants';

import { cn } from '@utils/styles';

export const ToastRoot = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root> & VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => (
  <Root
    className={cn(
      // 'relative rounded-md p-3 flex flex-col xs:flex-row items-stretch xs:items-center justify-between gap-6 shadow-sm',
      // 'radix-state-open:animate-toast-slide-in-bottom md:radix-state-open:animate-toast-slide-in-right',
      // 'radix-state-closed:animate-toast-hide',
      // 'radix-swipe-direction-right:radix-swipe-end:animate-toast-swipe-out-x',
      // 'radix-swipe-direction-right:translate-x-radix-toast-swipe-move-x',
      // 'radix-swipe-direction-down:radix-swipe-end:animate-toast-swipe-out-y',
      // 'radix-swipe-direction-down:translate-y-radix-toast-swipe-move-y',
      // 'radix-swipe-cancel:translate-x-0 radix-swipe-cancel:duration-200 radix-swipe-cancel:ease-[ease]',
      toastVariants({ variant }),
      className,
    )}
    {...props}
    ref={ref}
  />
));
ToastRoot.displayName = Root.displayName;
