import { forwardRef, ParamHTMLAttributes } from 'react';

import { cn } from '@utils/styles';

export const Lead = forwardRef<
  HTMLParagraphElement,
  ParamHTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      'font-head text-xl text-fuselage-500 dark:text-fuselage-450',
      className,
    )}
    {...props}
  />
));
Lead.displayName = 'Lead';
