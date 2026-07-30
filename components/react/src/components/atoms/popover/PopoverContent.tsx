import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

import { Content as RadixContent } from '@radix-ui/react-popover';

import { PopoverPortal } from '@components/atoms/popover';

import { cn } from '@utils/styles';

export const PopoverContent = forwardRef<
  ComponentRef<typeof RadixContent>,
  ComponentPropsWithoutRef<typeof RadixContent>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <PopoverPortal>
    <RadixContent
      ref={ref}
      className={cn(
        'bg-popover text-popover-foreground radix-state-open:animate-in radix-state-closed:animate-out radix-state-closed:fade-out-0 radix-state-open:fade-in-0 radix-state-closed:zoom-out-95 radix-state-open:zoom-in-95 radix-side-bottom:slide-in-from-top-2 radix-side-left:slide-in-from-right-2 radix-side-right:slide-in-from-left-2 radix-side-top:slide-in-from-bottom-2 z-50 w-72 rounded-md border p-4 shadow-md outline-hidden',
        className,
      )}
      align={align}
      sideOffset={sideOffset}
      {...props}
    />
  </PopoverPortal>
));
PopoverContent.displayName = RadixContent.displayName;
