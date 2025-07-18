import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Title } from '@radix-ui/react-dialog';

import { cn } from '@utils/styles';

export const DialogTitle = forwardRef<
  ElementRef<typeof Title>,
  ComponentPropsWithoutRef<typeof Title>
>(({ className, ...props }, ref) => (
  <Title
    ref={ref}
    className={cn(
      'text-lg font-semibold leading-none tracking-tight text-fuselage-800 dark:text-fuselage-50',
      className,
    )}
    {...props}
  />
));
DialogTitle.displayName = Title.displayName;
