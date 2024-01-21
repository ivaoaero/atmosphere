import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fuselage-700 dark:focus-visible:ring-fuselage-550 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-atmos-700 text-white shadow hover:opacity-90 dark:bg-semantic-green-500',
        secondary:
          'bg-fuselage-200 text-fuselage-600 shadow-sm hover:bg-fuselage-250 dark:bg-fuselage-800 dark:text-fuselage-250 dark:hover:bg-fuselage-700',
        destructive:
          'bg-semantic-red-600 text-semantic-red-50 shadow-sm hover:bg-semantic-red-700 dark:bg-semantic-red-700 dark:hover:bg-semantic-red-600',
        outline:
          'border border-fuselage-200 bg-transparent text-fuselage-600 shadow-sm hover:bg-fuselage-200 dark:border-fuselage-700 dark:text-fuselage-250 dark:hover:bg-fuselage-700',
        ghost:
          'text-fuselage-550 hover:bg-fuselage-200 hover:text-fuselage-700 dark:text-fuselage-450 dark:hover:bg-fuselage-700 dark:hover:text-fuselage-250',
        link: 'text-atmos-600 underline-offset-4 hover:underline dark:text-semantic-green-400',
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        md: 'h-9 px-4 py-2',
        lg: 'h-10 px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);
