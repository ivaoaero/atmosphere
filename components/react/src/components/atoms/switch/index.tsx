import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

import { SwitchRoot } from '@components/atoms/switch/SwitchRoot';
import { SwitchThumb } from '@components/atoms/switch/SwitchThumb';

export const Switch = forwardRef<
  ComponentRef<typeof SwitchRoot>,
  ComponentPropsWithoutRef<typeof SwitchRoot>
>(({ ...props }, ref) => (
  <SwitchRoot {...props} ref={ref}>
    <SwitchThumb />
  </SwitchRoot>
));
Switch.displayName = SwitchRoot.displayName;

export { SwitchRoot, SwitchThumb };
