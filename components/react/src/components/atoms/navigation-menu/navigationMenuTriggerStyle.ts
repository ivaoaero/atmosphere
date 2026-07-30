import { cva } from 'class-variance-authority';

export const navigationMenuTriggerStyle = cva(
  'group bg-background hover:bg-accent/20 hover:text-accent-foreground hover:text-fuselage-800 focus:bg-accent/20 focus:text-accent-foreground radix-state-open:bg-accent/20 radix-[active]:text-fuselage-800 dark:hover:text-fuselage-50 inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors focus:outline-hidden disabled:pointer-events-none disabled:opacity-50',
);
