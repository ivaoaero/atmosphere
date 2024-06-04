import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Anchor as RadixAnchor } from '@radix-ui/react-popover';

export const PopoverAnchor = forwardRef<
  ElementRef<typeof RadixAnchor>,
  ComponentPropsWithoutRef<typeof RadixAnchor>
>((props) => <RadixAnchor {...props} />);
PopoverAnchor.displayName = RadixAnchor.displayName;
