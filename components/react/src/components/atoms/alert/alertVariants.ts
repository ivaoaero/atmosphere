import { cva } from 'class-variance-authority';

export const alertVariants = cva(
  '[&>svg]:text-foreground relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:top-4 [&>svg]:left-4 [&>svg+div]:translate-y-[-3px] [&>svg~*]:pl-7',
  {
    variants: {
      variant: {
        default:
          'border-fuselage-300 bg-background text-foreground dark:border-fuselage-600 dark:[&>h5]:text-fuselage-50',
        success:
          'text-semantic-green-700 dark:text-semantic-green-300 dark:[&>h5]:text-semantic-green-500 [&>svg]:text-semantic-green-500 border-green-600 dark:border-green-500',
        destructive:
          'border-destructive text-semantic-red-600 dark:border-destructive dark:text-destructive-foreground dark:[&>h5]:text-destructive [&>svg]:text-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);
