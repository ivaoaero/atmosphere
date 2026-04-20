import { ComponentType } from 'react';

import { Skeleton } from '@components/atoms/skeleton';
import { TableCell, TableRow } from '@components/atoms/table';

interface DataTableEmptyRowProps {
  columns: string[];
}

export const DataTableEmptyRow: ComponentType<DataTableEmptyRowProps> = ({
  columns,
}) => (
  <TableRow>
    {columns.map((id) => (
      <TableCell key={id}>
        <Skeleton className={'h-6 w-full rounded-md'} />
      </TableCell>
    ))}
  </TableRow>
);
