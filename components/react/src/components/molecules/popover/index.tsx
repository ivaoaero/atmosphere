import { FC, ReactNode } from 'react';

import {
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from '@components/atoms/popover';

export interface PopoverProps {
  trigger: ReactNode;
  children: ReactNode;
}

export const Popover: FC<PopoverProps> = ({ trigger, children }) => {
  return (
    <PopoverRoot>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent>{children}</PopoverContent>
    </PopoverRoot>
  );
};
