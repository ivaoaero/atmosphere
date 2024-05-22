import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Root } from '@radix-ui/react-toggle';

import type { VariantProps } from 'class-variance-authority';

import { toggleVariants } from '@components/atoms/toggle/toggleVariants';

import { cn } from '@utils/styles';

export const Toggle = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
));

Toggle.displayName = Root.displayName;
