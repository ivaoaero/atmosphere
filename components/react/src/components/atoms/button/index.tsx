import { ButtonHTMLAttributes, forwardRef } from 'react';

import { Slot } from '@radix-ui/react-slot';
import { VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';

import { buttonVariants } from '@components/atoms/button/buttonVariants';

import { cn } from '@utils/styles';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isLoading = false,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    const isDisabled = disabled || isLoading;

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        ref={ref}
        {...props}
      >
        {children}
        {isLoading ? <Loader2 className="size-4 animate-spin" /> : null}
      </Comp>
    );
  },
);

Button.displayName = 'Button';
