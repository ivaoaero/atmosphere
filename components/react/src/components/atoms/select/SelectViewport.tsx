import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

import {
  Content as RadixContent,
  Viewport as RadixViewport,
} from '@radix-ui/react-select';

import { cn } from '@utils/styles';

const SelectViewport = forwardRef<
  ComponentRef<typeof RadixViewport>,
  ComponentPropsWithoutRef<typeof RadixViewport> &
    Pick<ComponentPropsWithoutRef<typeof RadixContent>, 'position'>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <RadixViewport
    ref={ref}
    {...props}
    className={cn(
      'p-1',
      position === 'popper' &&
        'h-radix-select-trigger w-full min-w-(--radix-select-trigger-width)',
      className,
    )}
  >
    {children}
  </RadixViewport>
));
SelectViewport.displayName = RadixViewport.displayName;

export { SelectViewport };
