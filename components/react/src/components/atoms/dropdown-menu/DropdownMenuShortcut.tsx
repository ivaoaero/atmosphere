import { HTMLAttributes } from 'react';

import { cn } from '@utils/styles';

export const DropdownMenuShortcut = ({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        'ml-auto p-0 text-xs tracking-widest opacity-60',
        className,
      )}
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';
