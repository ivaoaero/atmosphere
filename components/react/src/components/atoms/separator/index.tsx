import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Root } from '@radix-ui/react-separator';

import { cn } from '@utils/styles';

export const Separator = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root>
>(
  (
    { className, orientation = 'horizontal', decorative = true, ...props },
    ref,
  ) => (
    <Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 bg-border',
        orientation === 'horizontal'
          ? 'my-3 h-[1px] w-full'
          : 'mx-3 h-full w-[1px]',
        className,
      )}
      {...props}
    />
  ),
);
Separator.displayName = Root.displayName;
