import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { ItemIndicator, RadioItem } from '@radix-ui/react-dropdown-menu';
import { Circle } from 'lucide-react';

import { cn } from '@utils/styles';

export const DropdownMenuRadioItem = forwardRef<
  ElementRef<typeof RadioItem>,
  ComponentPropsWithoutRef<typeof RadioItem>
>(({ className, children, ...props }, ref) => (
  <RadioItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-fuselage-100 focus:text-fuselage-800 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-fuselage-700 dark:focus:text-fuselage-50',
      className,
    )}
    {...props}
  >
    <span
      className={'absolute left-2 flex size-3.5 items-center justify-center'}
    >
      <ItemIndicator>
        <Circle className={'size-2 fill-current'} />
      </ItemIndicator>
    </span>
    {children}
  </RadioItem>
));
DropdownMenuRadioItem.displayName = RadioItem.displayName;
