import { cva } from 'class-variance-authority';

export const sheetVariants = cva(
  'border-color-default bg-background radix-state-closed:duration-300 radix-state-open:duration-500 radix-state-open:animate-in radix-state-closed:animate-out fixed z-50 gap-4 border-l p-6 shadow-lg transition ease-in-out',
  {
    variants: {
      side: {
        top: 'radix-state-closed:slide-out-to-top radix-state-open:slide-in-from-top inset-x-0 top-0 border-b',
        bottom:
          'radix-state-closed:slide-out-to-bottom radix-state-open:slide-in-from-bottom inset-x-0 bottom-0 border-t',
        left: 'radix-state-closed:slide-out-to-left radix-state-open:slide-in-from-left inset-y-0 left-0 flex size-full flex-col border-r sm:max-w-sm md:w-3/4',
        right:
          'radix-state-closed:slide-out-to-right radix-state-open:slide-in-from-right inset-y-0 right-0 flex size-full flex-col border-l sm:max-w-sm md:w-3/4',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  },
);
