import { ComponentProps, ElementRef, forwardRef, ReactNode } from 'react';

import { Button } from '@components/atoms/button';

import { cn } from '@utils/styles';

interface IconButtonProps extends ComponentProps<typeof Button> {
  children: ReactNode;
}

export const IconButton = forwardRef<
  ElementRef<typeof Button>,
  IconButtonProps
>(({ children, className, ...props }, ref) => (
  <Button
    ref={ref}
    type="button"
    className={cn(
      'dark:text-fuselage-300 text-ocean-100 hover:text-ocean-50 hover:bg-ocean-600 flex gap-1 items-center dark:hover:bg-fuselage-700 dark:hover:text-fuselage-100 rounded-md p-1.5 transition-all',
      className,
    )}
    {...props}
  >
    {children}
  </Button>
));
IconButton.displayName = 'IconButton';
