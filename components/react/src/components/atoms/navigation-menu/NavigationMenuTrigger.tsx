import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Trigger } from '@radix-ui/react-navigation-menu';
import { ChevronDown } from 'lucide-react';

import { navigationMenuTriggerStyle } from '@components/atoms/navigation-menu/navigationMenuTriggerStyle';

import { cn } from '@utils/styles';

export const NavigationMenuTrigger = forwardRef<
  ElementRef<typeof Trigger>,
  ComponentPropsWithoutRef<typeof Trigger>
>(({ className, children, ...props }, ref) => (
  <Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), 'group', className)}
    {...props}
  >
    {children}{' '}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </Trigger>
));
NavigationMenuTrigger.displayName = Trigger.displayName;
