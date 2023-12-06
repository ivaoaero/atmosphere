import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { cn } from '@utils/styles';

export const BlockQuote = forwardRef<
  HTMLQuoteElement,
  ComponentPropsWithoutRef<'blockquote'>
>(({ className, ...props }, ref) => (
  <blockquote
    ref={ref}
    className={cn(
      'mt-6 border-l-2 border-fuselage-50 pl-6 italic text-fuselage-400 dark:border-fuselage-600 dark:text-fuselage-200',
      className,
    )}
    {...props}
  />
));
BlockQuote.displayName = 'BlockQuote';
