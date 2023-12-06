import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { cn } from '@utils/styles';

export const Lead = forwardRef<
  HTMLParagraphElement,
  ComponentPropsWithoutRef<'p'>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      'font-head text-xl text-fuselage-300 dark:text-fuselage-200',
      className,
    )}
    {...props}
  />
));
Lead.displayName = 'Lead';
