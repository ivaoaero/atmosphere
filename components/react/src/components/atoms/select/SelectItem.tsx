import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

import {
  Item as RadixItem,
  ItemIndicator as SelectItemIndicator,
  ItemText as SelectItemText,
} from '@radix-ui/react-select';

import { SelectCheck } from '@components/atoms/select/SelectIcons';

import { cn } from '@utils/styles';

const SelectItem = forwardRef<
  ComponentRef<typeof RadixItem>,
  ComponentPropsWithoutRef<typeof RadixItem>
>(({ className, children, ...props }, ref) => (
  <RadixItem
    ref={ref}
    className={cn(
      'focus:bg-accent focus:text-accent-foreground radix-disabled:pointer-events-none radix-disabled:opacity-50 relative flex w-full cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none',
      className,
    )}
    {...props}
  >
    <span
      className={'absolute left-2 flex size-3.5 items-center justify-center'}
    >
      <SelectItemIndicator>
        <SelectCheck />
      </SelectItemIndicator>
    </span>

    <SelectItemText>{children}</SelectItemText>
  </RadixItem>
));
SelectItem.displayName = RadixItem.displayName;

export { SelectItem, SelectItemIndicator, SelectItemText };
