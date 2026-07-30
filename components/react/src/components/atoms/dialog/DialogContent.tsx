import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

import { Content, Portal } from '@radix-ui/react-dialog';

import { DialogOverlay } from '@components/atoms/dialog/DialogOverlay';

import { cn } from '@utils/styles';

export const DialogContent = forwardRef<
  ComponentRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ className, children, ...props }, ref) => (
  <Portal>
    <DialogOverlay />
    <Content
      ref={ref}
      className={cn(
        'bg-background radix-state-open:animate-in radix-state-closed:animate-out radix-state-closed:fade-out-0 radix-state-open:fade-in-0 radix-state-closed:zoom-out-95 radix-state-open:zoom-in-95 radix-state-closed:slide-out-to-left-1/2 radix-state-closed:slide-out-to-top-[48%] radix-state-open:slide-in-from-left-1/2 radix-state-open:slide-in-from-top-[48%] fixed top-[50%] left-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 sm:rounded-lg',
        className,
      )}
      {...props}
    >
      {children}
    </Content>
  </Portal>
));
DialogContent.displayName = Content.displayName;
