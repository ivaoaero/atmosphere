import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Root, Thumb } from '@components/atoms/switch';

export const Switch = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root>
>(({ ...props }, ref) => (
  <Root {...props} ref={ref}>
    <Thumb />
  </Root>
));
Switch.displayName = Root.displayName;
