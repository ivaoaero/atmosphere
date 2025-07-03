import { cva } from 'class-variance-authority';

export const IVAOLogoVariants = cva('', {
  variants: {
    color: {
      white: 'text-white',
      atmos: 'text-atmos-700 dark:text-white',
    },
    size: {
      sm: 'h-8',
      md: 'h-9',
      lg: 'h-14',
    },
  },
  defaultVariants: {
    color: 'atmos',
    size: 'md',
  },
});
