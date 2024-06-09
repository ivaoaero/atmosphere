import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  ReactNode,
} from 'react';

import {
  CollapsibleContent,
  CollapsibleRoot,
  CollapsibleTrigger,
} from '@components/atoms/collapsible';

export interface CollapsibleProps
  extends ComponentPropsWithoutRef<typeof CollapsibleRoot> {
  trigger: ReactNode;
}

export const Collapsible = forwardRef<
  ElementRef<typeof CollapsibleRoot>,
  CollapsibleProps
>(({ children, trigger, ...props }, ref) => {
  return (
    <CollapsibleRoot ref={ref} {...props}>
      <CollapsibleTrigger>{trigger}</CollapsibleTrigger>
      <CollapsibleContent>{children}</CollapsibleContent>
    </CollapsibleRoot>
  );
});
Collapsible.displayName = 'Collapsible';
