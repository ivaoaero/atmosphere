import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Content } from '@radix-ui/react-accordion';

import { cn } from '@utils/styles';

export const AccordionContent = forwardRef<
  ElementRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ className, children, ...props }, ref) => (
  <Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
  </Content>
));

AccordionContent.displayName = Content.displayName;
