import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import {
  ScrollDownButton as RadixScrollDownButton,
  ScrollUpButton as RadixScrollUpButton,
} from '@radix-ui/react-select';

import {
  SelectChevronDown,
  SelectChevronUp,
} from '@components/atoms/select/SelectIcons';

import { cn } from '@utils/styles';

const SelectScrollUpButton = forwardRef<
  ElementRef<typeof RadixScrollUpButton>,
  ComponentPropsWithoutRef<typeof RadixScrollUpButton>
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

const SelectScrollDownButton = forwardRef<
  ElementRef<typeof RadixScrollDownButton>,
  ComponentPropsWithoutRef<typeof RadixScrollDownButton>
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
