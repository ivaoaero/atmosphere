import { type DialogProps } from '@radix-ui/react-dialog';

import { CommandRoot } from '@components/atoms/command/CommandRoot';
import { DialogContent, DialogRoot } from '@components/atoms/dialog';

interface CommandDialogProps extends DialogProps {}

export const CommandDialogRoot = ({
  children,
  ...props
}: CommandDialogProps) => {
  return (
    <DialogRoot {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <CommandRoot className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </CommandRoot>
      </DialogContent>
    </DialogRoot>
  );
};
CommandDialogRoot.displayName = 'CommandDialogRoot';
