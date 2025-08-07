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
      'relative h-4 w-full overflow-hidden rounded-full bg-secondary',
      className,
    )}
    value={value}
    max={max}
    {...props}
  >
    <Indicator
      className={'size-full flex-1 bg-primary transition-all'}
      style={{
        transform: `translateX(-${100 - ((value ?? 0) / Math.max(1, max ?? 100)) * 100}%)`,
      }}
    />
  </Root>
));
Progress.displayName = Root.displayName;
