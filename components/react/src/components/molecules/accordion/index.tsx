import { ComponentProps, ReactNode } from 'react';

import {
  AccordionContent,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from '@components/atoms/accordion';

export interface AccordionItemProps
  extends ComponentProps<typeof AccordionItem> {
  trigger: ReactNode;
}

export type AccordionProps = ComponentProps<typeof AccordionRoot> & {
  items: AccordionItemProps[];
};

export const Accordion = ({ items, ...props }: AccordionProps) => {
  return (
    <AccordionRoot {...props}>
      {items.map(({ trigger, children, ...itemProps }) => (
        <AccordionItem key={itemProps.value} {...itemProps}>
          <AccordionTrigger>{trigger}</AccordionTrigger>
          <AccordionContent>{children}</AccordionContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  );
};
Accordion.displayName = 'Accordion';
