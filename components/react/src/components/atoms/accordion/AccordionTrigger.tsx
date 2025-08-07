import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Header, Trigger } from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

import { cn } from '@utils/styles';

export const AccordionTrigger = forwardRef<
  ElementRef<typeof Trigger>,
  ComponentPropsWithoutRef<typeof Trigger>
>(({ className, children, ...props }, ref) => (
  <Header className="flex">
    <Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between py-4 text-lg font-medium text-fuselage-800 transition-all hover:underline dark:text-primary [&[data-state=open]>svg]:rotate-180',
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="size-4 shrink-0 transition-transform duration-200" />
    </Trigger>
  </Header>
));
AccordionTrigger.displayName = Trigger.displayName;
