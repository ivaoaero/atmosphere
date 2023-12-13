import { ButtonHTMLAttributes, forwardRef } from 'react';

import { VariantProps } from 'class-variance-authority';

import { buttonVariants } from '@components/atoms/button/buttonVariants';

import { cn } from '@utils/styles';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    // TODO: if is loading, insert a spinner
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';
