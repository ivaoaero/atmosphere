import { ComponentPropsWithoutRef, Key, ReactNode } from 'react';

import { CommandGroup, CommandItem } from '@components/atoms/command';

export interface CommandItemProps
  extends Omit<
    ComponentPropsWithoutRef<typeof CommandItem>,
    'children' | 'value'
  > {
  value: ReactNode;
  key: Key;
}

export interface CommandGroupProps
  extends Omit<ComponentPropsWithoutRef<typeof CommandGroup>, 'children'> {
  items: CommandItemProps[];
}

export const CommandGroupContent = ({
  items,
  ...groupProps
}: CommandGroupProps) => {
  return (
    <CommandGroup {...groupProps}>
      {items.map(({ value, key, ...itemProps }) => (
        <CommandItem key={key} {...itemProps}>
          {value}
        </CommandItem>
      ))}
    </CommandGroup>
  );
};
