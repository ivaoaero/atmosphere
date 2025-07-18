import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Item } from '@radix-ui/react-accordion';

import { cn } from '@utils/styles';

export const AccordionItem = forwardRef<
  ElementRef<typeof Item>,
  ComponentPropsWithoutRef<typeof Item>
>(({ className, ...props }, ref) => (
  <Item
    ref={ref}
    className={cn('border-color-default border-b', className)}
    {...props}
  />
));
AccordionItem.displayName = Item.displayName;
