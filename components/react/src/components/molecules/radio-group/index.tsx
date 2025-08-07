import {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
} from 'react';

import { Label } from '@components/atoms/label';
import { RadioGroupItem, RadioGroupRoot } from '@components/atoms/radio-group';

export interface RadioGroupItemProps
  extends ComponentProps<typeof RadioGroupItem> {
  label: string;
}

export interface RadioGroupProps
  extends Omit<ComponentPropsWithoutRef<typeof RadioGroupRoot>, 'children'> {
  items: RadioGroupItemProps[];
}

export const RadioGroup = forwardRef<
  ElementRef<typeof RadioGroupRoot>,
  RadioGroupProps
>(({ items, ...props }, ref) => {
  return (
    <RadioGroupRoot ref={ref} {...props}>
      {items.map(({ value, label, ...props }) => (
        <div key={value} className="flex items-center space-x-2">
          <RadioGroupItem id={value} value={value} {...props} />
          <Label htmlFor={value}>{label}</Label>
        </div>
      ))}
    </RadioGroupRoot>
  );
});
RadioGroup.displayName = 'RadioGroup';
