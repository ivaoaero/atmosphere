import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Content } from '@radix-ui/react-alert-dialog';

import { cn } from '@utils/styles';

export const AlertDialogContent = forwardRef<
  ElementRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ className, ...props }, ref) => (
  <Content
    {...props}
    className={cn(
      'fixed top-[50%] left-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg',
      'radix-state-open:animate-in radix-state-closed:animate-out radix-state-closed:fade-out-0 radix-state-open:fade-in-0 radix-state-closed:zoom-out-95 radix-state-open:zoom-in-95 radix-state-closed:slide-out-to-left-1/2 radix-state-closed:slide-out-to-top-[48%] radix-state-open:slide-in-from-left-1/2 radix-state-open:slide-in-from-top-[48%] duration-200',
      'border-fuselage-450/50 dark:border-fuselage-800/50 dark:bg-fuselage-900 bg-white sm:rounded-lg',
      className,
    )}
    ref={ref}
  />
));
AlertDialogContent.displayName = Content.displayName;
