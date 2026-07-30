import { forwardRef, QuoteHTMLAttributes } from 'react';

import { cn } from '@utils/styles';

export const BlockQuote = forwardRef<
  HTMLQuoteElement,
  QuoteHTMLAttributes<HTMLQuoteElement>
>(({ className, ...props }, ref) => (
  <blockquote
    ref={ref}
    className={cn(
      'border-fuselage-200 text-fuselage-550 dark:border-fuselage-700 dark:text-fuselage-450 mt-6 border-l-2 pl-6 italic',
      className,
    )}
    {...props}
  />
));
BlockQuote.displayName = 'BlockQuote';
