import { ComponentPropsWithoutRef, ComponentType, ReactNode } from 'react';

import {
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from '@components/atoms/popover';

export type PopoverProps = {
  trigger: ReactNode;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<typeof PopoverRoot>, 'children'> &
  Pick<
    ComponentPropsWithoutRef<typeof PopoverContent>,
    'side' | 'sideOffset' | 'align' | 'alignOffset'
  >;

export const Popover: ComponentType<PopoverProps> = ({
  trigger,
  children,
  side,
  sideOffset,
  align,
  alignOffset,
  ...props
}) => {
  return (
    <PopoverRoot {...props}>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
      >
        {children}
      </PopoverContent>
    </PopoverRoot>
  );
};
