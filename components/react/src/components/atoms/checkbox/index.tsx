import * as React from 'react';

import { CheckboxCheck } from './CheckboxCheck';
import { CheckboxIndicator } from './CheckboxIndicator';
import { CheckboxRoot } from './CheckboxRoot';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxRoot>,
  React.ComponentPropsWithoutRef<typeof CheckboxRoot>
>(({ ...props }, ref) => (
  <CheckboxRoot ref={ref} {...props}>
    <CheckboxIndicator>
      <CheckboxCheck />
    </CheckboxIndicator>
  </CheckboxRoot>
));
Checkbox.displayName = CheckboxRoot.displayName;

export { Checkbox, CheckboxRoot, CheckboxIndicator, CheckboxCheck };
