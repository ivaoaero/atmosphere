import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Title } from '@radix-ui/react-alert-dialog';

import { cn } from '@utils/styles';

export const AlertDialogTitle = forwardRef<
  ElementRef<typeof Title>,
  ComponentPropsWithoutRef<typeof Title>
>(({ className, ...props }, ref) => (
  <Title
    {...props}
    className={cn(
      'text-lg font-semibold text-fuselage-800 dark:text-fuselage-50',
      className,
    )}
    ref={ref}
  />
));
AlertDialogTitle.displayName = Title.displayName;
