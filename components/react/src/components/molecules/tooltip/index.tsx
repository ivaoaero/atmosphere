import { ComponentPropsWithoutRef, ComponentType, ReactNode } from 'react';

import {
  TooltipContent,
  TooltipRoot,
  TooltipTrigger,
} from '@components/atoms/tooltip';

export interface TooltipProps
  extends Omit<ComponentPropsWithoutRef<typeof TooltipRoot>, 'children'>,
    Pick<
      ComponentPropsWithoutRef<typeof TooltipContent>,
      'side' | 'sideOffset' | 'align' | 'alignOffset'
    > {
  children: ReactNode;
  content: ReactNode;
}

export const Tooltip: ComponentType<TooltipProps> = ({
  children,
  content,
  delayDuration = 300,
  side,
  sideOffset,
  align,
  alignOffset,
  ...props
}) => (
  <TooltipRoot delayDuration={delayDuration} {...props}>
    <TooltipTrigger
      asChild={typeof children === 'object' || typeof children === 'function'}
    >
      {children}
    </TooltipTrigger>
    <TooltipContent
      side={side}
      sideOffset={sideOffset}
      align={align}
      alignOffset={alignOffset}
    >
      {content}
    </TooltipContent>
  </TooltipRoot>
);
Tooltip.displayName = 'Tooltip';
