import { forwardRef, HTMLAttributes } from 'react';

import { cn } from '@utils/styles';

export const UL = forwardRef<
  HTMLUListElement,
  HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)}
    {...props}
  />
));
UL.displayName = 'UL';
