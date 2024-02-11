import * as React from 'react';

import { Indicator as RadixIndicator } from '@radix-ui/react-checkbox';

import { cn } from '@utils/styles';

const CheckboxIndicator = React.forwardRef<
  React.ElementRef<typeof RadixIndicator>,
  React.ComponentPropsWithoutRef<typeof RadixIndicator>
>(({ ...props }, ref) => (
  <RadixIndicator
    ref={ref}
    className={cn('flex items-center justify-center text-current')}
    {...props}
  />
));
CheckboxIndicator.displayName = RadixIndicator.displayName;

export { CheckboxIndicator };
