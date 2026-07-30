import { cva } from 'class-variance-authority';

export const toggleVariants = cva(
  'ring-offset-background hover:bg-muted hover:text-muted-foreground focus-visible:ring-ring radix-state-on:bg-accent radix-state-on:text-accent-foreground inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline:
          'border-input hover:bg-accent hover:text-accent-foreground border bg-transparent',
      },
      size: {
        default: 'h-10 px-3',
        sm: 'h-9 px-2.5',
        lg: 'h-11 px-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);
