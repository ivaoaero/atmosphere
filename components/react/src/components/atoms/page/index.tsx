import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { Root } from '@radix-ui/react-slot';

import { cn } from '@utils/styles';

export interface PageContainerProps extends ComponentPropsWithoutRef<'div'> {
  asChild?: boolean;
}

export const PageContainer = forwardRef<HTMLDivElement, PageContainerProps>(
  ({ asChild = false, className, ...props }, ref) => {
    const Component = asChild ? Root : 'div';
    return (
      <Component
        ref={ref}
        className={cn(
          'mx-auto w-full max-w-360 px-4 sm:px-10 xl:px-40',
          className,
        )}
        {...props}
      />
    );
  },
);
PageContainer.displayName = 'PageContainer';
