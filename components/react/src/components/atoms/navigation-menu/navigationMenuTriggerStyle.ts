import { cva } from 'class-variance-authority';

import { cn } from '@utils/styles.ts';

export const navigationMenuTriggerStyle = cva(
  cn(
    'group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors',
    'outline-accent focus:outline',
    'disabled:text-fuselage-300 dark:disabled:text-fuselage-500 disabled:pointer-events-none',
    'hover:bg-accent/20 dark:hover:bg-accent/60 radix-state-open:bg-accent/20 dark:radix-state-open:bg-accent/60 bg-transparent',
    'data-[active]:font-bold data-[active]:text-black dark:data-[active]:text-white',
  ),
);
