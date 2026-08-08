import { cva } from 'class-variance-authority';

export const toastVariants = cva(
  'group radix-swipe-cancel:translate-x-0 radix-swipe-end:translate-x-radix-toast-swipe-end-x radix-swipe-move:translate-x-radix-toast-swipe-move-x radix-swipe-move:transition-none radix-state-open:animate-in radix-state-closed:animate-out radix-swipe-end:animate-out radix-state-closed:fade-out-80 radix-state-closed:slide-out-to-right-full radix-state-open:slide-in-from-top-full sm:radix-state-open:slide-in-from-bottom-full pointer-events-auto relative flex w-full items-center justify-between gap-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all',
  {
    variants: {
      variant: {
        default: 'default bg-background text-foreground border',
        success:
          'success border-semantic-green-200 bg-semantic-green-50 text-semantic-green-900',
        destructive:
          'destructive border-semantic-red-100 bg-semantic-red-50 text-semantic-red-900',
        warning:
          'warning border-semantic-yellow-100 bg-semantic-yellow-50 text-semantic-yellow-900',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export const toastActionVariants = cva(
  'border-fuselage-200 hover:bg-fuselage-100 focus:ring-ring inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors focus:ring-1 focus:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: '',
        success:
          'group-[.success]:hover:bg-semantic-green-400/70 group-[.success]:hover:text-fuselage-700 group-[.success]:focus:ring-semantic-green-500 group-[.success]:border-green-400/60',
        destructive:
          'group-[.destructive]:border-semantic-red-200/70 group-[.destructive]:hover:border-semantic-red-200 group-[.destructive]:hover:bg-semantic-red-200 group-[.destructive]:hover:text-fuselage-700 group-[.destructive]:focus:ring-semantic-red-500',
        warning:
          'group-[.warning]:border-semantic-yellow-500/40 group-[.warning]:hover:border-semantic-yellow-200/80 group-[.warning]:hover:bg-semantic-yellow-200/80 group-[.warning]:hover:text-semantic-yellow-900 group-[.warning]:focus:ring-semantic-yellow-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);
