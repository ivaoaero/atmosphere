import { ComponentProps, ReactNode } from 'react';

import { Button } from '@components/atoms/button';
import {
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@components/atoms/dropdown-menu';

interface DropdownMenuButtonItemProps
  extends Omit<ComponentProps<typeof DropdownMenuItem>, 'children'> {
  label: ReactNode;
  shortcut?: string;
  icon?: React.ReactNode;
  subItems?: DropdownMenuButtonItemProps[];
}

interface DropdownMenuCheckboxItemProps
  extends Omit<ComponentProps<typeof DropdownMenuCheckboxItem>, 'children'> {
  label: string;
}

interface DropdownMenuCheckboxItemsProps {
  type: 'checkbox';
  items: DropdownMenuCheckboxItemProps[];
}

interface DropdownMenuRadionItemProps
  extends Omit<ComponentProps<typeof DropdownMenuRadioItem>, 'children'> {
  label?: string;
}

interface DropdownMenuRadioItemsProps
  extends Omit<ComponentProps<typeof DropdownMenuRadioGroup>, 'children'> {
  type: 'radio';
  items: DropdownMenuRadionItemProps[];
}

type DropdownMenuItemsType =
  | DropdownMenuButtonItemProps[]
  | DropdownMenuCheckboxItemsProps
  | DropdownMenuRadioItemsProps
  | DropdownMenuItemsType[];

interface DropdownMenuProps
  extends Omit<ComponentProps<typeof DropdownMenuRoot>, 'children'> {
  trigger: React.ReactNode;
  label?: string;
  items: DropdownMenuItemsType;
}

const instanceOfButtonItem = (
  items: DropdownMenuItemsType,
): items is DropdownMenuButtonItemProps[] =>
  Array.isArray(items) &&
  items.every((item) => typeof item === 'object' && 'label' in item);

const instanceOfGroupedItemsArray = (
  items: DropdownMenuItemsType,
): items is DropdownMenuItemsType[] =>
  Array.isArray(items) &&
  items.every(
    (item: unknown) =>
      instanceOfButtonItem(item as DropdownMenuItemsType) ||
      instanceOfCheckboxItems(item as DropdownMenuItemsType) ||
      instanceOfRadioItems(item as DropdownMenuItemsType),
  );

const instanceOfCheckboxItems = (
  items: DropdownMenuItemsType,
): items is DropdownMenuCheckboxItemsProps =>
  typeof items === 'object' &&
  'type' in items &&
  items.type === 'checkbox' &&
  'items' in items &&
  Array.isArray(items.items) &&
  items.items.every((item) => 'label' in item);

const instanceOfRadioItems = (
  items: DropdownMenuItemsType,
): items is DropdownMenuRadioItemsProps =>
  typeof items === 'object' &&
  'type' in items &&
  items.type === 'radio' &&
  'items' in items &&
  Array.isArray(items.items) &&
  items.items.every((item) => 'value' in item);

const DropdownMenuItems = ({
  items,
}: {
  items: DropdownMenuItemsType;
}): ReactNode => {
  if (instanceOfButtonItem(items))
    return items.map(({ icon, label, shortcut, subItems, ...props }, index) =>
      subItems ? (
        <DropdownMenuSub key={index}>
          <DropdownMenuSubTrigger>
            {icon}
            {typeof label === 'string' ? <span>{label}</span> : label}
            {shortcut && <DropdownMenuLabel>{shortcut}</DropdownMenuLabel>}
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItems items={subItems} />
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      ) : (
        <DropdownMenuItem key={index} {...props}>
          {icon}
          <span>{label}</span>
          {shortcut && <DropdownMenuLabel>{shortcut}</DropdownMenuLabel>}
        </DropdownMenuItem>
      ),
    );
  if (instanceOfGroupedItemsArray(items))
    return items.map((group, index) => (
      <>
        <DropdownMenuGroup key={index}>
          <DropdownMenuItems items={group} />
        </DropdownMenuGroup>
        {index < items.length - 1 && <DropdownMenuSeparator />}
      </>
    ));
  if (instanceOfCheckboxItems(items))
    return items.items.map(({ label, ...props }, index) => (
      <DropdownMenuCheckboxItem key={index} {...props}>
        {label}
      </DropdownMenuCheckboxItem>
    ));
  if (instanceOfRadioItems(items)) {
    const { items: radioItems, ...props } = items;
    return (
      <DropdownMenuRadioGroup {...props}>
        {radioItems.map((item, index) => (
          <DropdownMenuRadioItem key={index} {...item}>
            {item.label ?? item.value}
          </DropdownMenuRadioItem>
        ))}
      </DropdownMenuRadioGroup>
    );
  }
  console.error('Invalid items', items);
  throw new Error('Invalid items');
};

export const DropdownMenu = ({
  trigger,
  label,
  items,
  ...props
}: DropdownMenuProps) => (
  <DropdownMenuRoot {...props}>
    <DropdownMenuTrigger asChild>
      {typeof trigger === 'string' ? (
        <Button variant="outline">{trigger}</Button>
      ) : (
        trigger
      )}
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      {label && (
        <>
          <DropdownMenuLabel>{label}</DropdownMenuLabel>
          <DropdownMenuSeparator />
        </>
      )}
      <DropdownMenuItems items={items} />
    </DropdownMenuContent>
  </DropdownMenuRoot>
);
