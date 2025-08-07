import { forwardRef, QuoteHTMLAttributes } from 'react';

import { cn } from '@utils/styles';

export const BlockQuote = forwardRef<
  HTMLQuoteElement,
  QuoteHTMLAttributes<HTMLQuoteElement>
>(({ className, ...props }, ref) => (
  <blockquote
    ref={ref}
    className={cn(
      'mt-6 border-l-2 border-fuselage-200 pl-6 italic text-fuselage-550 dark:border-fuselage-700 dark:text-fuselage-450',
      className,
    )}
    {...props}
  />
));
BlockQuote.displayName = 'BlockQuote';
