import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Root } from '@radix-ui/react-label';

import { cn } from '@utils/styles';

export interface LabelProps extends ComponentPropsWithoutRef<typeof Root> {}

export const Label = forwardRef<ElementRef<typeof Root>, LabelProps>(
  ({ className, ...props }, ref) => (
    <Root
      ref={ref}
      className={cn(
        'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className,
      )}
      {...props}
    />
  ),
);
Label.displayName = 'Label';
