import { ComponentProps } from 'react';

import { cn } from '@utils/styles';

export const PaginationRoot = ({
  className,
  ...props
}: ComponentProps<'nav'>) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}
  />
);
PaginationRoot.displayName = 'PaginationRoot';
