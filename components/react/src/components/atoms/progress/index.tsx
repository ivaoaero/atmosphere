import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Indicator, Root } from '@radix-ui/react-progress';

import { cn } from '@utils/styles';

export const Progress = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root>
>(({ className, value, max, ...props }, ref) => (
  <Root
    ref={ref}
    className={cn(
      'bg-secondary relative h-4 w-full overflow-hidden rounded-full',
      className,
    )}
    value={value}
    max={max}
    {...props}
  >
    <Indicator
      className={'bg-primary size-full flex-1 transition-all'}
      style={{
        transform: `translateX(-${100 - ((value ?? 0) / Math.max(1, max ?? 100)) * 100}%)`,
      }}
    />
  </Root>
));
Progress.displayName = Root.displayName;
