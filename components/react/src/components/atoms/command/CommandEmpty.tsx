import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

import { Command as CommandPrimitive } from 'cmdk';

import { cn } from '@utils/styles';

export const CommandEmpty = forwardRef<
  ComponentRef<typeof CommandPrimitive.Empty>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className={cn('py-6 text-center text-sm', className)}
    {...props}
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;
