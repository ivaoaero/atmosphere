import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

import { ItemIndicator, RadioItem } from '@radix-ui/react-dropdown-menu';
import { Circle } from 'lucide-react';

import { cn } from '@utils/styles';

export const DropdownMenuRadioItem = forwardRef<
  ComponentRef<typeof RadioItem>,
  ComponentPropsWithoutRef<typeof RadioItem>
>(({ className, children, ...props }, ref) => (
  <RadioItem
    ref={ref}
    className={cn(
      'focus:bg-fuselage-100 focus:text-fuselage-800 radix-disabled:pointer-events-none radix-disabled:opacity-50 dark:focus:bg-fuselage-700 dark:focus:text-fuselage-50 relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden transition-colors select-none',
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
