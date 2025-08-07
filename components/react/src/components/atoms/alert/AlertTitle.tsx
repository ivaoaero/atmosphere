import { forwardRef, HTMLAttributes } from 'react';

import { cn } from '@utils/styles';

export const AlertTitle = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(
      'font-medium leading-none tracking-tight text-inherit',
      className,
    )}
    {...props}
  />
));
AlertTitle.displayName = 'AlertTitle';
