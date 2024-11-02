import { ComponentPropsWithoutRef, Key, ReactNode } from 'react';

import {
  CommandEmpty,
  CommandInput,
  CommandList,
  CommandSeparator,
} from '@components/atoms/command';
import {
  CommandGroupContent,
  CommandGroupProps,
} from '@components/molecules/command/CommandGroupContent';

export interface CommandSeparatorProps {
  isSeparator: boolean;
}

type CommandGroupOrSeparator = (CommandGroupProps | CommandSeparatorProps) & {
  key: Key;
};

export interface CommandContentProps {
  placeholder: string;
  emptyResult: ReactNode;
  inputProps: ComponentPropsWithoutRef<typeof CommandInput>;
  groups: CommandGroupOrSeparator[];
  isLoading?: boolean;
  loadingNode?: ReactNode;
}

const isGroupSeparator = (
  group: CommandGroupProps | CommandSeparatorProps,
): group is CommandSeparatorProps => 'isSeparator' in group;

export const CommandContent = ({
  placeholder,
  emptyResult,
  inputProps,
  groups,
  isLoading,
  loadingNode,
}: CommandContentProps) => {
  return (
    <>
      <CommandInput placeholder={placeholder} {...inputProps} />
      <CommandList>
        {isLoading ? (
          <CommandEmpty>{loadingNode}</CommandEmpty>
        ) : (
          <CommandEmpty>{emptyResult}</CommandEmpty>
        )}
        {groups.map(({ key, ...group }) =>
          isGroupSeparator(group) ? (
            <CommandSeparator key={key} />
          ) : (
            <CommandGroupContent key={key} {...group} />
          ),
        )}
      </CommandList>
    </>
  );
};
