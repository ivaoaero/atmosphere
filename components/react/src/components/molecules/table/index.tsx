import { ComponentProps, Key, ReactNode } from 'react';

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
  extends Omit<ComponentProps<typeof TableHead>, 'children' | 'key'> {
  label: ReactNode;
  key: Key;
}

export interface TableCellProps
  extends Omit<ComponentProps<typeof TableCell>, 'children'> {
  value: ReactNode;
}

export interface TableRowProps
  extends Omit<ComponentProps<typeof TableRow>, 'children' | 'key'> {
  columns: TableCellProps[];
  key: Key;
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
          {columns.map(({ key, label, ...props }) => (
            <TableHead key={key} {...props}>
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
