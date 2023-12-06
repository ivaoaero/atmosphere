import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fuselage-600 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-fuselage-400',
  {
    variants: {
      variant: {
        primary:
          'bg-atmos-700 text-white shadow hover:opacity-90 dark:bg-semantic-green-500',
        secondary:
          'bg-fuselage-50 text-fuselage-500 shadow-sm hover:bg-fuselage-100 dark:bg-fuselage-700 dark:text-fuselage-100 dark:hover:bg-fuselage-600',
        destructive:
          'bg-semantic-red-600 text-semantic-red-50 shadow-sm hover:bg-semantic-red-700 dark:bg-semantic-red-700 dark:hover:bg-semantic-red-600',
        outline:
          'border border-fuselage-50 bg-transparent text-fuselage-500 shadow-sm hover:bg-fuselage-50 dark:border-fuselage-600 dark:text-fuselage-100 dark:hover:bg-fuselage-600',
        ghost:
          'text-fuselage-400 hover:bg-fuselage-50 hover:text-fuselage-600 dark:text-fuselage-200 dark:hover:bg-fuselage-600 dark:hover:text-fuselage-100',
        link: 'text-fuselage-500 underline-offset-4 hover:underline dark:text-fuselage-100',
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
