import { forwardRef, HTMLAttributes } from 'react';

import type { VariantProps } from 'class-variance-authority';

import { alertVariants } from '@components/atoms/alert/alertVariants';

import { cn } from '@utils/styles';

export const AlertRoot = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role={'alert'}
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
AlertRoot.displayName = 'AlertRoot';
