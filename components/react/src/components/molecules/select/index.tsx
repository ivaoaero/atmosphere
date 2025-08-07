import { ComponentProps, ComponentType, FunctionComponent } from 'react';

import { SelectContentProps } from '@radix-ui/react-select';

import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from '@components/atoms/select';

export interface SelectItemProps
  extends Omit<ComponentProps<typeof SelectItem>, 'asChild' | 'children'> {
  label?: string;
}

export interface SelectProps
  extends Omit<ComponentProps<typeof SelectRoot>, 'children'>,
    Pick<ComponentProps<typeof SelectValue>, 'placeholder' | 'className'>,
    // Omit the `dir` and `defaultValue` props from `SelectContentProps` to avoid collisions
    // Omit the `children` prop from `SelectContentProps` to avoid collisions and developer confusion
    Omit<SelectContentProps, 'dir' | 'defaultValue' | 'children'> {
  items: SelectItemProps[] | { [key: string]: SelectItemProps[] };
}

interface SelectItemGroupProps {
  items: SelectItemProps[];
}

export const SelectItemGroup: FunctionComponent<SelectItemGroupProps> = ({
  items,
}: SelectItemGroupProps) => {
  return items.map((item) => {
    return (
      <SelectItem key={item.value} {...item}>
        {item.label ?? item.value}
      </SelectItem>
    );
  });
};

export const Select: ComponentType<SelectProps> = ({
  className,
  items,
  placeholder = 'Select an option',
  ...props
}: SelectProps) => {
  return (
    <SelectRoot {...props}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectPortal>
        <SelectContent>
          <SelectViewport {...props}>
            {Array.isArray(items) ? (
              <SelectItemGroup items={items} />
            ) : (
              Object.entries<SelectItemProps[]>(items).map(
                ([key, groupItems]) => (
                  <SelectGroup key={key}>
                    <SelectLabel>{key}</SelectLabel>
                    <SelectItemGroup items={groupItems} />
                  </SelectGroup>
                ),
              )
            )}
          </SelectViewport>
        </SelectContent>
      </SelectPortal>
    </SelectRoot>
  );
};
