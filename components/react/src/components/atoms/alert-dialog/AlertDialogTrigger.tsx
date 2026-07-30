import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

import { Trigger } from '@radix-ui/react-alert-dialog';

export const AlertDialogTrigger = forwardRef<
  ComponentRef<typeof Trigger>,
  ComponentPropsWithoutRef<typeof Trigger>
>(({ asChild = true, ...props }, ref) => (
  <Trigger {...props} asChild={asChild} ref={ref} />
));
AlertDialogTrigger.displayName = Trigger.displayName;
