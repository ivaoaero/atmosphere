import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Cancel } from '@radix-ui/react-alert-dialog';

export const AlertDialogCancel = forwardRef<
  ElementRef<typeof Cancel>,
  ComponentPropsWithoutRef<typeof Cancel>
>(({ asChild = true, ...props }, ref) => (
  <Cancel {...props} asChild={asChild} ref={ref} />
));
AlertDialogCancel.displayName = Cancel.displayName;
