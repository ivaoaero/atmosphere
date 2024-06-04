import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Root as RadixRoot } from '@radix-ui/react-popover';

export const Popover = forwardRef<
  ElementRef<typeof RadixRoot>,
  ComponentPropsWithoutRef<typeof RadixRoot>
>((props) => <RadixRoot {...props} />);
Popover.displayName = RadixRoot.displayName;
