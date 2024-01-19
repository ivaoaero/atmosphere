import { forwardRef, OlHTMLAttributes } from 'react';

import { cn } from '@utils/styles';

export const OL = forwardRef<
  HTMLOListElement,
  OlHTMLAttributes<HTMLOListElement>
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn('my-6 ml-6 list-decimal [&>li]:mt-2', className)}
    {...props}
  />
));
OL.displayName = 'OL';
