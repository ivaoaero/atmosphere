import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

import { Root } from '@radix-ui/react-slider';

import { cn } from '@utils/styles';

export const SliderRoot = forwardRef<
  ComponentRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => (
  <Root
    {...props}
    className={cn(
      'relative flex w-full touch-none items-center select-none',
      className,
    )}
    ref={ref}
  />
));
SliderRoot.displayName = Root.displayName;
