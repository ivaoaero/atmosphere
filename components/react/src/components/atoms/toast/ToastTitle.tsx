import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Title } from '@radix-ui/react-toast';

import { cn } from '@utils/styles';

export const ToastTitle = forwardRef<
  ElementRef<typeof Title>,
  ComponentPropsWithoutRef<typeof Title>
>(({ className, ...props }, ref) => (
  <Title
    className={cn(
      // 'font-bold text-fuselage-800 dark:text-fuselage-250',
      'text-sm font-semibold [&+div]:text-xs',
      className,
    )}
    {...props}
    ref={ref}
  />
));
ToastTitle.displayName = Title.displayName;
