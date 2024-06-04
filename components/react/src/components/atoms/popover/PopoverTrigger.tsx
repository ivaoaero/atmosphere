import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Trigger as RadixTrigger } from '@radix-ui/react-popover';

export const PopoverTrigger = forwardRef<
  ElementRef<typeof RadixTrigger>,
  ComponentPropsWithoutRef<typeof RadixTrigger>
>((props, ref) => <RadixTrigger {...props} ref={ref} />);
PopoverTrigger.displayName = RadixTrigger.displayName;
