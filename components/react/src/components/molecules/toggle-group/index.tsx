import { ComponentProps, ElementRef, forwardRef, ReactNode } from 'react';

import {
  ToggleGroupItem,
  ToggleGroupRoot,
} from '@components/atoms/toggle-group';
import { ToggleGroupRootProps } from '@components/atoms/toggle-group/ToggleGroupRoot';

export interface ToggleGroupItemProps
  extends Omit<ComponentProps<typeof ToggleGroupItem>, 'children'> {
  label: ReactNode;
}

export interface ToggleGroupProps
  extends Omit<ToggleGroupRootProps, 'children'> {
  items: ToggleGroupItemProps[];
}

export const ToggleGroup = forwardRef<
  ElementRef<typeof ToggleGroupRoot>,
  ToggleGroupProps
>(({ items, ...props }, ref) => (
  <ToggleGroupRoot ref={ref} {...props}>
    {items.map(({ label, ...item }) => (
      <ToggleGroupItem key={item.value} {...item}>
        {label}
      </ToggleGroupItem>
    ))}
  </ToggleGroupRoot>
));

ToggleGroup.displayName = 'ToggleGroup';
