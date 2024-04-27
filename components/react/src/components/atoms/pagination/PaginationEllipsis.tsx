import { ComponentProps } from 'react';

import { MoreHorizontal } from 'lucide-react';

import { PaginationLink } from '@components/atoms/pagination/PaginationLink';

export const PaginationEllipsis = ({
  className,
  ...props
}: ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    className={className}
    size="icon"
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </PaginationLink>
);
PaginationEllipsis.displayName = 'PaginationEllipsis';
