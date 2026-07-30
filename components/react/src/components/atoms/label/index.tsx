import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

import { Root } from '@radix-ui/react-label';

import { cn } from '@utils/styles';

export type LabelProps = ComponentPropsWithoutRef<typeof Root>;

export const Label = forwardRef<ComponentRef<typeof Root>, LabelProps>(
  ({ className, ...props }, ref) => (
    <Root
      ref={ref}
      className={cn(
        'text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className,
      )}
      {...props}
    />
  ),
);
Label.displayName = 'Label';
