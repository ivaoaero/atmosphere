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
    type={'button'}
    className={cn(
      'flex items-center gap-1 rounded-md p-1.5 text-ocean-100 transition-all hover:bg-ocean-600 hover:text-ocean-50 dark:text-fuselage-300 dark:hover:bg-fuselage-700 dark:hover:text-fuselage-100',
      className,
    )}
    {...props}
  >
    {children}
  </Button>
));
IconButton.displayName = 'IconButton';
