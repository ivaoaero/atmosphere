import { ComponentPropsWithoutRef } from 'react';

import { CommandDialogRoot } from '@components/atoms/command';
import {
  CommandContent,
  CommandContentProps,
} from '@components/molecules/command/CommandContent';

export interface CommandDialogProps
  extends CommandContentProps,
    Omit<ComponentPropsWithoutRef<typeof CommandDialogRoot>, 'children'> {}
export const CommandDialog = ({
  placeholder,
  emptyResult,
  inputProps,
  groups,
  isLoading,
  loadingText,
  ...props
}: CommandDialogProps) => (
  <CommandDialogRoot {...props}>
    <CommandContent
      placeholder={placeholder}
      emptyResult={emptyResult}
      inputProps={inputProps}
      groups={groups}
      isLoading={isLoading}
      loadingText={loadingText}
    />
  </CommandDialogRoot>
);
CommandDialog.displayName = 'CommandDialog';
