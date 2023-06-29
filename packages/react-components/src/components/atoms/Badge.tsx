import { ComponentType, Ref, forwardRef } from 'react';

import { Close } from '@carbon/icons-react';
import { VariantProps, cva } from 'class-variance-authority';
import clsx from 'clsx';

import { classNames } from '@utils/styles';

const badgeVariants = cva(
  'inline-flex w-fit items-center gap-x-1 align-text-top font-semibold',
  {
    variants: {
      variant: {
        flat: 'ring-0',
        filled: 'ring-1 ring-inset',
        leaked:
          '!bg-transparent !text-fuselage-400 ring-1 ring-inset !ring-fuselage-500/10 dark:!text-fuselage-200 dark:!ring-fuselage-300/20',
      },
      color: {
        gray: 'bg-fuselage-50/20 fill-fuselage-300 text-fuselage-300 ring-fuselage-500/10 dark:bg-fuselage-300/10 dark:fill-fuselage-300 dark:text-fuselage-300 dark:ring-fuselage-300/20',
        red: 'bg-red-50 fill-red-700 text-red-700 ring-red-600/10 dark:bg-red-400/10 dark:fill-red-400 dark:text-red-400 dark:ring-red-400/20',
        yellow:
          'bg-yellow-50 fill-yellow-500 text-yellow-700 ring-yellow-600/20 dark:bg-yellow-400/10 dark:fill-yellow-500 dark:text-yellow-500 dark:ring-yellow-400/20',
        orange:
          'bg-orange-50 fill-orange-800 text-orange-700 ring-orange-600/20 dark:bg-orange-400/10 dark:fill-orange-400 dark:text-orange-400 dark:ring-orange-400/20',
        green:
          'bg-green-50 fill-green-500 text-green-700 ring-green-600/20 dark:bg-green-500/10 dark:text-green-500 dark:ring-green-500/20',
        blue: 'bg-blue-50 fill-blue-700 text-blue-700 ring-blue-700/10 dark:bg-blue-400/10 dark:fill-blue-400 dark:text-blue-400 dark:ring-blue-400/30',
        indigo:
          'bg-indigo-50 fill-indigo-700 text-indigo-700 ring-indigo-700/10 dark:bg-indigo-400/10 dark:fill-indigo-400 dark:text-indigo-400 dark:ring-indigo-400/30',
        purple:
          'bg-purple-50 fill-purple-700 text-purple-700 ring-purple-700/10 dark:bg-purple-400/10 dark:fill-purple-400 dark:text-purple-400 dark:ring-purple-400/30',
        pink: 'bg-pink-50 fill-purple-700 text-pink-700 ring-pink-700/10 dark:bg-pink-400/10 dark:fill-pink-400 dark:text-pink-400 dark:ring-pink-400/20',
      },
      size: {
        sm: 'px-1.5 py-0.5 text-xs',
        md: 'px-2 py-1 text-xs',
        lg: 'px-3 py-1.5 text-sm',
      },
    },
    defaultVariants: {
      variant: 'filled',
      size: 'sm',
    },
  },
);

interface BadgeProps extends VariantProps<typeof badgeVariants> {
  text: string;
  hasDot?: boolean;
  pill?: boolean;
  removeCallback?: () => void;
  removeButtonRef?: Ref<HTMLButtonElement>;
  className?: string;
}

interface RemoveButtonProps {
  isPill?: boolean;
  callback: () => void;
}

const Dot: ComponentType = () => {
  return (
    <svg className="h-1.5 w-1.5" viewBox="0 0 6 6" aria-hidden="true">
      <circle cx={3} cy={3} r={3} />
    </svg>
  );
};

const RemoveButton = forwardRef<HTMLButtonElement, RemoveButtonProps>(
  ({ isPill, callback }, ref) => (
    <button
      type="button"
      onClick={callback}
      className={clsx(
        'group relative -mr-0.5 h-3.5 w-3.5 hover:bg-fuselage-300/10 dark:hover:bg-white/5',
        isPill ? 'rounded-full' : 'rounded-sm',
      )}
      ref={ref}
    >
      <span className="sr-only">Remove</span>
      <Close className="h-3.5 w-3.5 scale-95 stroke-fuselage-200/50 transition-colors group-hover:stroke-fuselage-200 dark:stroke-white/20 group-hover:dark:stroke-fuselage-50" />
      <span className="absolute -inset-1" />
    </button>
  ),
);
RemoveButton.displayName = 'BadgeRemoveButton';

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      text,
      color,
      size,
      variant,
      className,
      hasDot,
      pill,
      removeCallback,
      removeButtonRef,
    },
    ref,
  ) => (
    <span
      className={classNames(
        badgeVariants({ variant, color, size }),
        pill ? 'rounded-full' : 'rounded-[4px]',
        className,
      )}
      ref={ref}
    >
      {(hasDot || variant === 'leaked') && <Dot />}
      {text}
      {removeCallback && (
        <RemoveButton
          ref={removeButtonRef}
          callback={removeCallback}
          isPill={pill}
        />
      )}
    </span>
  ),
);
Badge.displayName = 'Badge';
