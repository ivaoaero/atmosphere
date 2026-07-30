import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { SubTrigger } from '@radix-ui/react-dropdown-menu';
import { ChevronRight } from 'lucide-react';

import { cn } from '@utils/styles';

export const DropdownMenuSubTrigger = forwardRef<
  ElementRef<typeof SubTrigger>,
  ComponentPropsWithoutRef<typeof SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <SubTrigger
    ref={ref}
    className={cn(
      'focus:bg-fuselage-100 radix-state-open:bg-fuselage-100 dark:focus:bg-fuselage-700 dark:radix-state-open:bg-fuselage-700 flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none',
      inset && 'pl-8',
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className={'ml-auto size-4'} />
  </SubTrigger>
));
DropdownMenuSubTrigger.displayName = SubTrigger.displayName;
