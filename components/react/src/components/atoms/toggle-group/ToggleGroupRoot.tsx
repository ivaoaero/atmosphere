import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Root } from '@radix-ui/react-toggle-group';
import { VariantProps } from 'class-variance-authority';

import { ToggleGroupContext } from '@components/atoms/toggle-group/ToggleGroupContext';
import { toggleVariants } from '@components/atoms/toggle/toggleVariants';

import { cn } from '@utils/styles';

export type ToggleGroupRootProps = ComponentPropsWithoutRef<typeof Root> &
  VariantProps<typeof toggleVariants>;

export const ToggleGroupRoot = forwardRef<
  ElementRef<typeof Root>,
  ToggleGroupRootProps
>(({ className, variant, size, children, ...props }, ref) => (
  <Root
    ref={ref}
    className={cn('flex items-center justify-center gap-1', className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </Root>
));

ToggleGroupRoot.displayName = Root.displayName;
