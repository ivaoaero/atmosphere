import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { CheckboxCheck } from './CheckboxCheck';
import { CheckboxIndicator } from './CheckboxIndicator';
import { CheckboxRoot } from './CheckboxRoot';

const Checkbox = forwardRef<
  ElementRef<typeof CheckboxRoot>,
  ComponentPropsWithoutRef<typeof CheckboxRoot>
>(({ ...props }, ref) => (
  <CheckboxRoot ref={ref} {...props}>
    <CheckboxIndicator checked={props.checked} />
  </CheckboxRoot>
));
Checkbox.displayName = CheckboxRoot.displayName;

export { Checkbox, CheckboxRoot, CheckboxIndicator, CheckboxCheck };
