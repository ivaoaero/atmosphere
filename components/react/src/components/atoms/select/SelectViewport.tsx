import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import {
  Content as RadixContent,
  Viewport as RadixViewport,
} from '@radix-ui/react-select';

import { cn } from '@utils/styles';

const SelectViewport = forwardRef<
  ElementRef<typeof RadixViewport>,
  ComponentPropsWithoutRef<typeof RadixViewport> &
    Pick<ComponentPropsWithoutRef<typeof RadixContent>, 'position'>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <RadixViewport
    ref={ref}
    {...props}
    className={cn(
      'p-1',
      position === 'popper' &&
        'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
      className,
    )}
  >
    {children}
  </RadixViewport>
));
SelectViewport.displayName = RadixViewport.displayName;

export { SelectViewport };
