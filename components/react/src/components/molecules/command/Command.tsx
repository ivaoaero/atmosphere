import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { CommandRoot } from '@components/atoms/command';
import {
  CommandContent,
  CommandContentProps,
} from '@components/molecules/command/CommandContent';

export interface CommandProps
  extends CommandContentProps,
    Omit<ComponentPropsWithoutRef<typeof CommandRoot>, 'children'> {}

export const Command = forwardRef<ElementRef<typeof CommandRoot>, CommandProps>(
  (
    {
      placeholder,
      emptyResult,
      inputProps,
      groups,
      isLoading,
      loadingNode = 'Loading...',
      ...props
    },
    ref,
  ) => (
    <CommandRoot ref={ref} {...props}>
      <CommandContent
        placeholder={placeholder}
        emptyResult={emptyResult}
        inputProps={inputProps}
        groups={groups}
        isLoading={isLoading}
        loadingNode={loadingNode}
      />
    </CommandRoot>
  ),
);
Command.displayName = 'Command';
