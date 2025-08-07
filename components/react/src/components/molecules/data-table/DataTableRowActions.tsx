import { Ellipsis } from 'lucide-react';

import { Button } from '@components/atoms/button';
import {
  DropdownMenuContent,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from '@components/atoms/dropdown-menu';
import {
  DropdownMenuItems,
  DropdownMenuItemsProps,
} from '@components/molecules/dropdown-menu';

export interface DataTableRowActionsProps {
  actions: DropdownMenuItemsProps;
}

export function DataTableRowActions({ actions }: DataTableRowActionsProps) {
  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger asChild>
        <Button
          variant={'ghost'}
          className="flex size-8 p-0 data-[state=open]:bg-muted"
        >
          <Ellipsis className="size-4" />
          <span className="sr-only">Open actions</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItems items={actions} />
      </DropdownMenuContent>
    </DropdownMenuRoot>
  );
}
