import { HTMLAttributes } from 'react';

import { Column } from '@tanstack/react-table';
import { ArrowDownIcon, ArrowDownUp, ArrowUpIcon, EyeOff } from 'lucide-react';

import { Button } from '@components/atoms/button';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@components/atoms/dropdown-menu';

import { cn } from '@utils/styles';

export interface DataTableColumnHeaderProps<
  TData,
  TValue,
> extends HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export const DataTableColumnHeader = <TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) => {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <DropdownMenuRoot>
        <DropdownMenuTrigger asChild>
          <Button
            variant={'ghost'}
            size="sm"
            className="radix-state-open:bg-accent -ml-3 h-8"
          >
            <span>{title}</span>
            {column.getIsSorted() === 'desc' ? (
              <ArrowDownIcon className="ml-2 size-4" />
            ) : column.getIsSorted() === 'asc' ? (
              <ArrowUpIcon className="ml-2 size-4" />
            ) : (
              <ArrowDownUp className="ml-2 size-4" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
            <ArrowUpIcon className="text-muted-foreground/70 mr-2 size-3.5" />
            Asc
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
            <ArrowDownIcon className="text-muted-foreground/70 mr-2 size-3.5" />
            Desc
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
            <EyeOff className="text-muted-foreground/70 mr-2 size-3.5" />
            Hide
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuRoot>
    </div>
  );
};
