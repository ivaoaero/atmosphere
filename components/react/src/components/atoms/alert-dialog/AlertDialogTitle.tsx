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
      'font-bold text-fuselage-800 dark:text-fuselage-200',
      className,
    )}
    ref={ref}
  />
));
AlertDialogTitle.displayName = Title.displayName;
