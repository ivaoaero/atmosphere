import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { CheckboxItem, ItemIndicator } from '@radix-ui/react-dropdown-menu';
import { Check } from 'lucide-react';

import { cn } from '@utils/styles';

export const DropdownMenuCheckboxItem = forwardRef<
  ElementRef<typeof CheckboxItem>,
  ComponentPropsWithoutRef<typeof CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <CheckboxItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-fuselage-100 focus:text-fuselage-800 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-fuselage-700 dark:focus:text-fuselage-50',
      className,
    )}
    checked={checked}
    {...props}
  >
    <span
      className={'absolute left-2 flex size-3.5 items-center justify-center'}
    >
      <ItemIndicator>
        <Check className={'size-4'} />
      </ItemIndicator>
    </span>
    {children}
  </CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = CheckboxItem.displayName;
