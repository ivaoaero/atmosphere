import { ComponentProps, ReactNode } from 'react';

import {
  HoverCardContent,
  HoverCardRoot,
  HoverCardTrigger,
} from '@components/atoms/hover-card';

export interface HoverCardProps
  extends ComponentProps<typeof HoverCardRoot>,
    Pick<
      ComponentProps<typeof HoverCardContent>,
      'side' | 'sideOffset' | 'align' | 'alignOffset'
    > {
  trigger: ReactNode;
  triggerAsChild?: boolean;
}

export const HoverCard = ({
  trigger,
  triggerAsChild,
  children,
  side,
  sideOffset,
  align,
  alignOffset,
  ...props
}: HoverCardProps) => {
  return (
    <HoverCardRoot {...props}>
      <HoverCardTrigger asChild={triggerAsChild}>{trigger}</HoverCardTrigger>
      <HoverCardContent
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
      >
        {children}
      </HoverCardContent>
    </HoverCardRoot>
  );
};
