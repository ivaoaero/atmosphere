import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

import { Title } from '@radix-ui/react-alert-dialog';

import { cn } from '@utils/styles';

export const AlertDialogTitle = forwardRef<
  ComponentRef<typeof Title>,
  ComponentPropsWithoutRef<typeof Title>
>(({ className, ...props }, ref) => (
  <Title
    {...props}
    className={cn(
      'text-fuselage-800 dark:text-fuselage-50 text-lg font-semibold',
      className,
    )}
    ref={ref}
  />
));
AlertDialogTitle.displayName = Title.displayName;
