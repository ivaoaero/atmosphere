import { ComponentProps, ElementRef, forwardRef, ReactNode } from 'react';

import { Button, ButtonProps } from '@components/atoms/button';

import { cn } from '@utils/styles';

interface IconButtonProps extends ComponentProps<typeof Button> {
  children: ReactNode;
  buttonVariant?: ButtonProps['variant'];
}

export const IconButton = forwardRef<
  ElementRef<typeof Button>,
  IconButtonProps
>(({ children, className, buttonVariant = 'primary', ...props }, ref) => (
  <Button
    variant={buttonVariant}
    ref={ref}
    type={'button'}
    className={cn(
      '!flex min-h-9 min-w-9 gap-1 rounded-md p-1 transition-all',
      className,
    )}
    {...props}
  >
    {children}
  </Button>
));
IconButton.displayName = 'IconButton';
