import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

import { Title } from '@radix-ui/react-dialog';

import { cn } from '@utils/styles';

export const DialogTitle = forwardRef<
  ComponentRef<typeof Title>,
  ComponentPropsWithoutRef<typeof Title>
>(({ className, ...props }, ref) => (
  <Title
    ref={ref}
    className={cn(
      'text-fuselage-800 dark:text-fuselage-50 text-lg leading-none font-semibold tracking-tight',
      className,
    )}
    {...props}
  />
));
DialogTitle.displayName = Title.displayName;
