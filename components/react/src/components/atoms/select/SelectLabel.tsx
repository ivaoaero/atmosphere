import * as React from 'react';

import { Label as RadixLabel } from '@radix-ui/react-select';

import { cn } from '@utils/styles';

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof RadixLabel>,
  React.ComponentPropsWithoutRef<typeof RadixLabel>
>(({ className, ...props }, ref) => (
  <RadixLabel
    ref={ref}
    className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)}
    {...props}
  />
));
SelectLabel.displayName = RadixLabel.displayName;

export { SelectLabel };
