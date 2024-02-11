import * as React from 'react';

import { Check } from 'lucide-react';

const CheckboxCheck = React.forwardRef<
  React.ElementRef<typeof Check>,
  React.ComponentPropsWithoutRef<typeof Check>
>(({ ...props }, ref) => <Check ref={ref} className="h-4 w-4" {...props} />);
CheckboxCheck.displayName = 'CheckboxCheck';

export { CheckboxCheck };
