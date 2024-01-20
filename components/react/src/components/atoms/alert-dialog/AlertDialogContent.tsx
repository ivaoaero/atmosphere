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
      'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg',
      'duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
      'rounded-md md:w-full bg-white dark:bg-fuselage-900 border-fuselage-450/50 dark:border-fuselage-800/50',
      className,
    )}
    ref={ref}
  />
));
AlertDialogContent.displayName = Content.displayName;
