import * as React from 'react';

import { Check, ChevronDown, ChevronUp } from 'lucide-react';

const SelectChevronDown = React.forwardRef<
  React.ElementRef<typeof ChevronDown>,
  React.ComponentPropsWithoutRef<typeof ChevronDown>
>(({ ...props }, ref) => (
  <ChevronDown ref={ref} {...props} className="h-4 w-4 opacity-50" />
));
SelectChevronDown.displayName = 'SelectChevronDown';

const SelectChevronUp = React.forwardRef<
  React.ElementRef<typeof ChevronUp>,
  React.ComponentPropsWithoutRef<typeof ChevronUp>
>(({ ...props }, ref) => (
  <ChevronUp ref={ref} {...props} className="h-4 w-4 opacity-50" />
));
SelectChevronUp.displayName = 'SelectChevronUp';

const SelectCheck = React.forwardRef<
  React.ElementRef<typeof Check>,
  React.ComponentPropsWithoutRef<typeof Check>
>(({ ...props }, ref) => <Check ref={ref} {...props} className="h-4 w-4" />);
SelectCheck.displayName = 'SelectCheck';

export { SelectChevronDown, SelectChevronUp, SelectCheck };
