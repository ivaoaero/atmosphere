import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Action } from '@radix-ui/react-alert-dialog';

export const AlertDialogAction = forwardRef<
  ElementRef<typeof Action>,
  ComponentPropsWithoutRef<typeof Action>
>(({ asChild = true, ...props }, ref) => (
  <Action {...props} asChild={asChild} ref={ref} />
));
AlertDialogAction.displayName = Action.displayName;
