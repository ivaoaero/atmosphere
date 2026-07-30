import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

import { Content as RadixContent } from '@radix-ui/react-select';

import {
  SelectScrollDownButton,
  SelectScrollUpButton,
} from '@components/atoms/select/SelectScrollButtons';
import { SelectViewport } from '@components/atoms/select/SelectViewport';

import { cn } from '@utils/styles';

export const SelectContent = forwardRef<
  ComponentRef<typeof RadixContent>,
  ComponentPropsWithoutRef<typeof RadixContent>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <RadixContent
    ref={ref}
    className={cn(
      'bg-popover text-popover-foreground radix-state-open:animate-in radix-state-closed:animate-out radix-state-closed:fade-out-0 radix-state-open:fade-in-0 radix-state-closed:zoom-out-95 radix-state-open:zoom-in-95 radix-side-bottom:slide-in-from-top-2 radix-side-left:slide-in-from-right-2 radix-side-right:slide-in-from-left-2 radix-side-top:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border shadow-md',
      position === 'popper' &&
        'radix-side-bottom:translate-y-1 radix-side-left:-translate-x-1 radix-side-right:translate-x-1 radix-side-top:-translate-y-1',
      className,
    )}
    position={position}
    {...props}
  >
    <SelectScrollUpButton />
    <SelectViewport position={position}>{children}</SelectViewport>
    <SelectScrollDownButton />
  </RadixContent>
));
SelectContent.displayName = RadixContent.displayName;
