import { ComponentProps, useEffect, useMemo, useState } from 'react';

import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationRoot,
} from '@components/atoms/pagination';

export interface PaginationProps extends ComponentProps<typeof PaginationRoot> {
  totalPages: number;
  onPageChange: (pageIdx: number) => void;
  /**
   * Default active page index in unmanaged mode
   */
  defaultActivePageIdx?: number;
  /**
   * Active page index in managed mode
   */
  activePageIdx?: number;
  /**
   * Number of pages to display in the pagination
   * @default 3
   */
  displayedPages?: number;
}

export const Pagination = ({
  totalPages,
  onPageChange,
  defaultActivePageIdx = 0,
  activePageIdx = undefined,
  displayedPages = 3,
  ...props
}: PaginationProps) => {
  const [activePageIdxState, setActivePage] = useState(
    activePageIdx ?? defaultActivePageIdx,
  );

  useEffect(() => {
    // Managed component
    if (activePageIdx !== undefined) setActivePage(activePageIdx);
  }, [activePageIdx]);

  const handlePageChange = (page: number) => {
    onPageChange(page);
    // Unmanaged component
    if (activePageIdx === undefined) setActivePage(page);
  };

  const displayedPagesArray = useMemo(() => {
    const startPage = Math.max(
      Math.min(
        activePageIdxState - Math.floor(displayedPages / 2),
        totalPages - displayedPages,
      ),
      0,
    );
    return Array.from({ length: displayedPages }, (_, i) => startPage + i);
  }, [activePageIdxState, totalPages, displayedPages]);

  return (
    <PaginationRoot {...props}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            disabled={activePageIdxState === 0}
            onClick={() => handlePageChange(activePageIdxState - 1)}
          />
        </PaginationItem>
        {activePageIdxState > 1 && (
          <PaginationItem>
            <PaginationEllipsis onClick={() => handlePageChange(0)} />
          </PaginationItem>
        )}
        {displayedPagesArray.map((i) => (
          <PaginationItem key={i}>
            <PaginationLink
              isActive={i === activePageIdxState}
              onClick={() => handlePageChange(i)}
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        {activePageIdxState < totalPages - 2 && (
          <PaginationItem>
            <PaginationEllipsis
              onClick={() => handlePageChange(totalPages - 1)}
            />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationNext
            disabled={activePageIdxState === totalPages - 1}
            onClick={() => handlePageChange(activePageIdxState + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationRoot>
  );
};
