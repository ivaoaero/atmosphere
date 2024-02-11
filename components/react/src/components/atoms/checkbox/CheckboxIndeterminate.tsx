import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Minus } from 'lucide-react';

import { cn } from '@utils/styles';

export const CheckboxIndeterminate = forwardRef<
  ElementRef<typeof Minus>,
  ComponentPropsWithoutRef<typeof Minus>
>(({ className, ...props }, ref) => (
  <Minus ref={ref} className={cn('h-4 w-4', className)} {...props} />
));
CheckboxIndeterminate.displayName = 'CheckboxIndeterminate';
