import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Portal as RadixPortal } from '@radix-ui/react-popover';

export const PopoverPortal = forwardRef<
  ElementRef<typeof RadixPortal>,
  ComponentPropsWithoutRef<typeof RadixPortal>
>((props) => <RadixPortal {...props} />);
PopoverPortal.displayName = RadixPortal.displayName;
