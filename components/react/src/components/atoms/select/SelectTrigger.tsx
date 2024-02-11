import * as React from 'react';

import {
  Icon as RadixIcon,
  Trigger as RadixTrigger,
} from '@radix-ui/react-select';

import { cn } from '@utils/styles';

import { SelectChevronDown } from './SelectIcons';

const SelectIcon = RadixIcon;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof RadixTrigger>,
  React.ComponentPropsWithoutRef<typeof RadixTrigger>
>(({ className, children, ...props }, ref) => (
  <RadixTrigger
    ref={ref}
    className={cn(
      'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
      className,
    )}
    {...props}
  >
    {children}
    <SelectIcon asChild>
      <SelectChevronDown />
    </SelectIcon>
  </RadixTrigger>
));
SelectTrigger.displayName = RadixTrigger.displayName;

export { SelectTrigger, SelectIcon };
