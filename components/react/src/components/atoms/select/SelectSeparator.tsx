import * as React from 'react';

import { Separator as RadixSeparator } from '@radix-ui/react-select';

import { cn } from '@utils/styles';

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof RadixSeparator>,
  React.ComponentPropsWithoutRef<typeof RadixSeparator>
>(({ className, ...props }, ref) => (
  <RadixSeparator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
));
SelectSeparator.displayName = RadixSeparator.displayName;

export { SelectSeparator };
