import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

import { Check } from 'lucide-react';

import { cn } from '@utils/styles';

export const CheckboxCheck = forwardRef<
  ComponentRef<typeof Check>,
  ComponentPropsWithoutRef<typeof Check>
>(({ className, ...props }, ref) => (
  <Check ref={ref} className={cn('h-4 w-4', className)} {...props} />
));
CheckboxCheck.displayName = 'CheckboxCheck';
