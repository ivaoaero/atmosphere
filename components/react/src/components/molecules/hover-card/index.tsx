import { ComponentProps, ReactNode } from 'react';

import {
  HoverCardContent,
  HoverCardRoot,
  HoverCardTrigger,
} from '@components/atoms/hover-card';

export interface HoverCardProps extends ComponentProps<typeof HoverCardRoot> {
  trigger: ReactNode;
  triggerAsChild?: boolean;
}

export const HoverCard = ({
  trigger,
  triggerAsChild,
  children,
  ...props
}: HoverCardProps) => {
  return (
    <HoverCardRoot {...props}>
      <HoverCardTrigger asChild={triggerAsChild}>{trigger}</HoverCardTrigger>
      <HoverCardContent>{children}</HoverCardContent>
    </HoverCardRoot>
  );
};
