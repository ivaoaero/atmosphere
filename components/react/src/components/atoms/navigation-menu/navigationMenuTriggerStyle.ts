import { cva } from 'class-variance-authority';

export const navigationMenuTriggerStyle = cva(
  'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/20 hover:text-accent-foreground hover:text-fuselage-800 focus:bg-accent/20 focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-accent/20 data-[active]:text-fuselage-800 dark:hover:text-fuselage-50',
);
