import { ComponentType } from 'react';

import { Table } from '@tanstack/react-table';

import { DataTableViewOptions } from '@components/molecules/data-table/DataTableViewOptions';

export interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  ToolbarContent?: ComponentType<{ table: Table<TData> }>;
  displayViewOptions?: boolean;
}

export function DataTableToolbar<TData>({
  table,
  ToolbarContent,
  displayViewOptions: enableViewOptions = true,
}: DataTableToolbarProps<TData>) {
  if (!enableViewOptions && !ToolbarContent) return <></>;
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {ToolbarContent && <ToolbarContent table={table} />}
      </div>
      {enableViewOptions && <DataTableViewOptions table={table} />}
    </div>
  );
}
