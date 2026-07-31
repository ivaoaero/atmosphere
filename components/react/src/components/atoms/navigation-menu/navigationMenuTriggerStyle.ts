import { cva } from 'class-variance-authority';

import { cn } from '@utils/styles.ts';

export const navigationMenuTriggerStyle = cva(
  cn(
    'group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors focus:outline disabled:pointer-events-none data-[active]:font-bold',
  ),
  {
    variants: {
      darkMode: {
        true: cn(
          'text-fuselage-100',
          'outline-fuselage-700',
          'disabled:text-fuselage-300',
          'hover:bg-fuselage-700/60 radix-state-open:bg-fuselage-700/60',
          'data-[active]:text-white',
        ),
        false: cn(
          'text-fuselage-800',
          'outline-fuselage-250',
          'disabled:text-fuselage-500',
          'hover:bg-fuselage-250/20 radix-state-open:bg-fuselage-250/20',
          'data-[active]:text-black',
        ),
        undefined: cn(
          'outline-accent',
          'disabled:text-fuselage-300 dark:disabled:text-fuselage-500',
          'hover:bg-accent/20 dark:hover:bg-accent/60 radix-state-open:bg-accent/20 dark:radix-state-open:bg-accent/60',
          'data-[active]:text-black dark:data-[active]:text-white',
        ),
      },
    },
    defaultVariants: {
      darkMode: 'undefined',
    },
  },
);
