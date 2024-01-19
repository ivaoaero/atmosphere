import { forwardRef, HTMLAttributes } from 'react';

import { VariantProps } from 'class-variance-authority';

import { inlineCodeVariants } from '@components/atoms/typography/inlineCodeVariants';

import { cn } from '@utils/styles';

export const InlineCode = forwardRef<
  HTMLElement,
  HTMLAttributes<HTMLElement> & VariantProps<typeof inlineCodeVariants>
>(({ className, background, ...props }, ref) => (
  <code
    ref={ref}
    className={cn(inlineCodeVariants({ background }), className)}
    {...props}
  />
));
InlineCode.displayName = 'InlineCode';
