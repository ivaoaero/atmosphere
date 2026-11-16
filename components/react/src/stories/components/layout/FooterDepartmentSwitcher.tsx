import { ChevronDown } from 'lucide-react';

import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from '@components/atoms/dropdown-menu';

export const FooterDepartmentSwitcher = () => (
  <DropdownMenuRoot>
    <DropdownMenuTrigger className="flex items-center gap-2 outline-none">
      Training
      <ChevronDown className="size-4" />
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start">
      <DropdownMenuItem>Training</DropdownMenuItem>
      <DropdownMenuItem>Events</DropdownMenuItem>
      <DropdownMenuItem>Flight Operations</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenuRoot>
);
