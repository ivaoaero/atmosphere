import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

import { Check, ChevronDown, ChevronUp } from 'lucide-react';

const SelectChevronDown = forwardRef<
  ComponentRef<typeof ChevronDown>,
  ComponentPropsWithoutRef<typeof ChevronDown>
>(({ ...props }, ref) => (
  <ChevronDown ref={ref} {...props} className={'size-4 opacity-50'} />
));
SelectChevronDown.displayName = 'SelectChevronDown';

const SelectChevronUp = forwardRef<
  ComponentRef<typeof ChevronUp>,
  ComponentPropsWithoutRef<typeof ChevronUp>
>(({ ...props }, ref) => (
  <ChevronUp ref={ref} {...props} className={'size-4 opacity-50'} />
));
SelectChevronUp.displayName = 'SelectChevronUp';

const SelectCheck = forwardRef<
  ComponentRef<typeof Check>,
  ComponentPropsWithoutRef<typeof Check>
>(({ ...props }, ref) => <Check ref={ref} {...props} className={'size-4'} />);
SelectCheck.displayName = 'SelectCheck';

export { SelectChevronDown, SelectChevronUp, SelectCheck };
