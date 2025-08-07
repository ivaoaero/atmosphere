import { ComponentProps, ReactNode } from 'react';

import {
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
} from '@components/atoms/table';

export interface TableColumnProps
  extends Omit<ComponentProps<typeof TableHead>, 'children'> {
  label: ReactNode;
}

export interface TableCellProps
  extends Omit<ComponentProps<typeof TableCell>, 'children'> {
  value: ReactNode;
}

export interface TableRowProps
  extends Omit<ComponentProps<typeof TableRow>, 'children'> {
  columns: TableCellProps[];
}

export interface TableProps
  extends Omit<ComponentProps<typeof TableRoot>, 'children'> {
  caption?: string;
  columns: TableColumnProps[];
  rows: TableRowProps[];
}

export const Table = ({ caption, columns, rows, ...props }: TableProps) => {
  return (
    <TableRoot {...props}>
      {caption && <TableCaption>{caption}</TableCaption>}
      <TableHeader>
        <TableRow>
          {columns.map(({ key: columnKey, label, ...props }, colIdx) => (
            <TableHead key={columnKey ?? `col-${colIdx}`} {...props}>
              {label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map(({ columns, key: rowKey, ...props }) => (
          <TableRow key={rowKey} {...props}>
            {columns.map(({ key: cellKey, value, ...props }, cellIdx) => (
              <TableCell key={cellKey ?? `${rowKey}-${cellIdx}`} {...props}>
                {value}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </TableRoot>
  );
};
Table.displayName = 'Table';
