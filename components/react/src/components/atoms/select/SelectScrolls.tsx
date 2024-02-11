import * as React from 'react';

import {
  ScrollDownButton as RadixScrollDownButton,
  ScrollUpButton as RadixScrollUpButton,
} from '@radix-ui/react-select';

import { cn } from '@utils/styles';

import { SelectChevronDown, SelectChevronUp } from './SelectIcons';

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof RadixScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof RadixScrollUpButton>
>(({ className, ...props }, ref) => (
  <RadixScrollUpButton
    ref={ref}
    className={cn(
      'flex cursor-default items-center justify-center py-1',
      className,
    )}
    {...props}
  >
    <SelectChevronUp />
  </RadixScrollUpButton>
));
SelectScrollUpButton.displayName = RadixScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof RadixScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof RadixScrollDownButton>
>(({ className, ...props }, ref) => (
  <RadixScrollDownButton
    ref={ref}
    className={cn(
      'flex cursor-default items-center justify-center py-1',
      className,
    )}
    {...props}
  >
    <SelectChevronDown />
  </RadixScrollDownButton>
));
SelectScrollDownButton.displayName = RadixScrollDownButton.displayName;

export { SelectScrollUpButton, SelectScrollDownButton };
