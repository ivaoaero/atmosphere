import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Check } from 'lucide-react';

import { cn } from '@utils/styles';

const CheckboxCheck = forwardRef<
  ElementRef<typeof Check>,
  ComponentPropsWithoutRef<typeof Check>
>(({ className, ...props }, ref) => (
  <Check ref={ref} className={cn('h-4 w-4', className)} {...props} />
));
CheckboxCheck.displayName = 'CheckboxCheck';

export { CheckboxCheck };
