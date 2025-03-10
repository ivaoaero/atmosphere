import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Title } from '@radix-ui/react-dialog';

import { cn } from '@utils/styles';

export const SheetTitle = forwardRef<
  ElementRef<typeof Title>,
  ComponentPropsWithoutRef<typeof Title>
>(({ className, ...props }, ref) => (
  <Title
    ref={ref}
    className={cn('text-lg font-semibold text-foreground', className)}
    {...props}
  />
));
SheetTitle.displayName = Title.displayName;
