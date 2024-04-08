import { cva } from 'class-variance-authority';

export const IVAOlogoVariants = cva('', {
  variants: {
    color: {
      white: 'text-white',
      atmos: 'text-atmos-500 dark:text-white',
    },
    size: {
      sm: 'w-24',
      md: 'w-28',
      lg: 'w-40',
    },
  },
  defaultVariants: {
    color: 'atmos',
    size: 'md',
  },
});
