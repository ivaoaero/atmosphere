import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Indicator as RadixIndicator } from '@radix-ui/react-checkbox';

import { CheckboxCheck } from '@components/atoms/checkbox/CheckboxCheck';
import { CheckboxIndeterminate } from '@components/atoms/checkbox/CheckboxIndeterminate';

import { cn } from '@utils/styles';

interface CheckboxIndicatorProps
  extends ComponentPropsWithoutRef<typeof RadixIndicator> {
  checked?: boolean | 'indeterminate';
}

export const CheckboxIndicator = forwardRef<
  ElementRef<typeof RadixIndicator>,
  CheckboxIndicatorProps
>(({ className, children, ...props }, ref) => {
  const Check =
    props.checked === 'indeterminate' ? CheckboxIndeterminate : CheckboxCheck;
  return (
    <RadixIndicator
      ref={ref}
      className={cn('flex items-center justify-center text-current', className)}
      {...props}
    >
      {children ?? <Check />}
    </RadixIndicator>
  );
});
CheckboxIndicator.displayName = RadixIndicator.displayName;
