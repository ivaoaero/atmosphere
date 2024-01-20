import { forwardRef, HTMLProps } from 'react';

import { cn } from '@utils/styles';

export const P = forwardRef<
  HTMLParagraphElement,
  HTMLProps<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
    {...props}
  />
));
P.displayName = 'P';
