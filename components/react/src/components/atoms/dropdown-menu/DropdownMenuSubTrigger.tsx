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
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-fuselage-100 data-[state=open]:bg-fuselage-100 dark:focus:focus:bg-fuselage-700 data-[state=open]:dark:bg-fuselage-700',
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
