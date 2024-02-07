import { ComponentType, forwardRef, Ref } from 'react';

import { Close } from '@carbon/icons-react';
import { VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

import { badgeVariants } from '@components/atoms/badge/badgeVariants';

import { cn } from '@utils/styles';

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
    <svg className={'h-1.5 w-1.5'} viewBox={'0 0 6 6'} aria-hidden={'true'}>
      <circle cx={3} cy={3} r={3} />
    </svg>
  );
};

const RemoveButton = forwardRef<HTMLButtonElement, RemoveButtonProps>(
  ({ isPill, callback }, ref) => (
    <button
      type={'button'}
      onClick={callback}
      className={clsx(
        'group relative -mr-0.5 h-3.5 w-3.5 hover:bg-fuselage-500/10 dark:hover:bg-white/5',
        isPill ? 'rounded-full' : 'rounded-sm',
      )}
      ref={ref}
    >
      <span className={'sr-only'}>Remove</span>
      <Close
        className={
          'h-3.5 w-3.5 scale-95 stroke-fuselage-450/50 transition-colors group-hover:stroke-fuselage-450 dark:stroke-white/20 group-hover:dark:stroke-fuselage-200'
        }
      />
      <span className={'absolute -inset-1'} />
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
      className={cn(
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
