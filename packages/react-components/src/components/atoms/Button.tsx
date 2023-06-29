import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react';

import { VariantProps, cva } from 'class-variance-authority';

import { classNames } from '@utils/styles';

const buttonVariants = cva(
  'flex w-fit cursor-pointer items-center justify-center gap-1 rounded text-center font-semibold transition-all disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-semantic-green-500 text-white hover:bg-semantic-green-600 dark:bg-semantic-green-600 dark:hover:bg-semantic-green-700',
        secondary:
          'bg-atmos-700 text-white hover:bg-atmos-600 dark:bg-atmos-700 hover:dark:bg-atmos-800',
        danger:
          'bg-semantic-red-500 text-white hover:bg-semantic-red-600 dark:bg-semantic-red-600 dark:hover:bg-semantic-red-700',
        info: 'bg-semantic-blue-500 text-black hover:bg-semantic-blue-600 dark:bg-semantic-blue-600 dark:text-white dark:hover:bg-semantic-blue-700',
        muted:
          'border border-fuselage-50/50 bg-fuselage-50/10 text-fuselage-150 hover:bg-fuselage-50/25 hover:text-fuselage-200 dark:border-fuselage-600/50 dark:bg-fuselage-700 dark:text-fuselage-300 hover:dark:bg-fuselage-600 hover:dark:text-fuselage-200',
      },
      size: {
        sm: 'px-2 py-1 text-xs',
        md: 'px-3 py-2 text-sm',
        lg: 'px-4 py-2 text-sm',
      },
    },
    compoundVariants: [
      {
        variant: 'muted',
        size: 'sm',
        className: 'px-[7px] py-[3px]',
      },
      {
        variant: 'muted',
        size: 'md',
        className: 'px-[11px] py-[7px]',
      },
      {
        variant: 'muted',
        size: 'lg',
        className: 'px-[15px] py-[7px]',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  text: string;
  icon?: ReactNode;
  isFullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ text, icon, size, variant, isFullWidth, className, ...props }, ref) => (
    <button
      type="button"
      className={classNames(
        buttonVariants({ variant, size }),
        isFullWidth ? 'w-full' : 'w-fit',
        className,
      )}
      ref={ref}
      {...props}
    >
      {icon}
      <span>{text}</span>
    </button>
  ),
);
Button.displayName = 'Button';
