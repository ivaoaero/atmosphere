import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

import { Title } from '@radix-ui/react-dialog';

import { cn } from '@utils/styles';

export const SheetTitle = forwardRef<
  ComponentRef<typeof Title>,
  ComponentPropsWithoutRef<typeof Title>
>(({ className, ...props }, ref) => (
  <Title
    ref={ref}
    className={cn('text-foreground text-lg font-semibold', className)}
    {...props}
  />
));
SheetTitle.displayName = Title.displayName;
