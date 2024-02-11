import * as React from 'react';

import {
  Item as RadixItem,
  ItemIndicator as RadixItemIndicator,
  ItemText as RadixItemText,
} from '@radix-ui/react-select';

import { cn } from '@utils/styles';

import { SelectCheck } from './SelectIcons';

const SelectItemIndicator = RadixItemIndicator;
const SelectItemText = RadixItemText;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof RadixItem>,
  React.ComponentPropsWithoutRef<typeof RadixItem>
>(({ className, children, ...props }, ref) => (
  <RadixItem
    ref={ref}
    className={cn(
      'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectItemIndicator>
        <SelectCheck />
      </SelectItemIndicator>
    </span>

    <SelectItemText>{children}</SelectItemText>
  </RadixItem>
));
SelectItem.displayName = RadixItem.displayName;

export { SelectItem, SelectItemIndicator, SelectItemText };
