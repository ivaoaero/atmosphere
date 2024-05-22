import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Root } from '@radix-ui/react-slider';

import { cn } from '@utils/styles';

export const SliderRoot = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => (
  <Root
    {...props}
    className={cn(
      'relative flex w-full touch-none select-none items-center',
      className,
    )}
    ref={ref}
  />
));
SliderRoot.displayName = Root.displayName;
