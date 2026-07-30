import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Content } from '@radix-ui/react-accordion';

import { cn } from '@utils/styles';

export const AccordionContent = forwardRef<
  ElementRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ className, children, ...props }, ref) => (
  <Content
    ref={ref}
    className="radix-state-closed:animate-accordion-up radix-state-open:animate-accordion-down overflow-hidden text-sm transition-all"
    {...props}
  >
    <div className={cn('pt-0 pb-4', className)}>{children}</div>
  </Content>
));

AccordionContent.displayName = Content.displayName;
