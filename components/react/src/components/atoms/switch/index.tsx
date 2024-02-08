import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Root } from '@components/atoms/switch/Root';
import { Thumb } from '@components/atoms/switch/Thumb';

export const Switch = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root>
>(({ ...props }, ref) => (
  <Root {...props} ref={ref}>
    <Thumb />
  </Root>
));
Switch.displayName = Root.displayName;

export { Root as SwitchRoot, Thumb as SwitchThumb };
