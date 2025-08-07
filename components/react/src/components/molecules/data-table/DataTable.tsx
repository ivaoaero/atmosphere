import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  TableOptions,
  useReactTable,
} from '@tanstack/react-table';

import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
} from '@components/atoms/table';
import { DataTablePagination } from '@components/molecules/data-table/DataTablePagination';
import {
  DataTableToolbar,
  DataTableToolbarProps,
} from '@components/molecules/data-table/DataTableToolbar';

// Use the same props as the tanstack component
export interface DataTableProps<TData>
  extends TableOptions<TData>,
    Omit<DataTableToolbarProps<TData>, 'table'> {
  displayPagination?: boolean;
  /**
   * If true, the data will be paginated, sorted, and filtered on the client side.
   */
  isClientSideData?: boolean;
}

export const DataTable = <TData,>({
  displayPagination = true,
  isClientSideData = false,
  displayViewOptions = true,
  ToolbarContent,
  ...props
}: DataTableProps<TData>) => {
  const table = useReactTable({
    // @ts-expect-error Will be overridden by props if provided
    getCoreRowModel: getCoreRowModel(),
    // Default models for client side data. Not needed for server side data.
    ...(isClientSideData && {
      getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
    }),
    ...props,
  });

  return (
    <div className={'space-y-4'}>
      <DataTableToolbar
        table={table}
        ToolbarContent={ToolbarContent}
        displayViewOptions={displayViewOptions}
      />
      <div className={'rounded-md border'}>
        <TableRoot>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={props.columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </TableRoot>
      </div>
      {displayPagination && <DataTablePagination table={table} />}
    </div>
  );
};
DataTable.displayName = 'DataTable';
