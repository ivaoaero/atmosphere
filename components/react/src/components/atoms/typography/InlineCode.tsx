import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { cn } from '@utils/styles';

export const InlineCode = forwardRef<
  HTMLElement,
  ComponentPropsWithoutRef<'code'>
>(({ className, ...props }, ref) => (
  <code
    ref={ref}
    className={cn(
      'relative rounded bg-fuselage-50/50 px-2 py-1 font-mono text-sm dark:bg-fuselage-700',
      className,
    )}
    {...props}
  />
));
InlineCode.displayName = 'InlineCode';
