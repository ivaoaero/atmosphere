import { cva } from 'class-variance-authority';

import { cn } from '@utils/styles.ts';

export const sidebarIconVariants = cva(
  cn(
    'flex size-9 items-center justify-center rounded-md p-2 transition-all',
    'group-hover:text-fuselage-50 group-hover:bg-atmos-800 dark:group-hover:bg-atmos-700 dark:group-hover:text-ocean-50',
  ),
  {
    variants: {
      isActive: {
        true: 'bg-atmos-700 dark:bg-atmos-500 text-fuselage-50 dark:text-ocean-50',
        false:
          'bg-fuselage-100 text-fuselage-500 dark:bg-fuselage-700 dark:text-fuselage-500',
      },
    },
    defaultVariants: {
      isActive: false,
    },
  },
);
