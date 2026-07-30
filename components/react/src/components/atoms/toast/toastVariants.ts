import { cva } from 'class-variance-authority';

export const toastVariants = cva(
  'group radix-swipe-cancel:translate-x-0 radix-swipe-end:translate-x-radix-toast-swipe-end-x radix-swipe-move:translate-x-radix-toast-swipe-move-x radix-swipe-move:transition-none radix-state-open:animate-in radix-state-closed:animate-out radix-swipe-end:animate-out radix-state-closed:fade-out-80 radix-state-closed:slide-out-to-right-full radix-state-open:slide-in-from-top-full sm:radix-state-open:slide-in-from-bottom-full pointer-events-auto relative flex w-full items-center justify-between gap-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground border',
        destructive:
          'group border-destructive bg-destructive text-destructive-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);
