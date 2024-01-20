import { cva } from 'class-variance-authority';

export const inlineCodeVariants = cva(
  'relative rounded px-2 py-1 font-mono text-sm ',
  {
    variants: {
      background: {
        default: 'bg-fuselage-200/10 dark:bg-fuselage-800',
        plain: '',
      },
    },
    defaultVariants: {
      background: 'default',
    },
  },
);
