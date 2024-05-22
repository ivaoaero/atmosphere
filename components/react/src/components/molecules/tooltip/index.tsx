import { ComponentPropsWithoutRef, ComponentType, ReactNode } from 'react';

import {
  TooltipContent,
  TooltipRoot,
  TooltipTrigger,
} from '@components/atoms/tooltip';

export interface TooltipProps
  extends Omit<ComponentPropsWithoutRef<typeof TooltipRoot>, 'children'> {
  children: ReactNode;
  content: ReactNode;
}

export const Tooltip: ComponentType<TooltipProps> = ({
  children,
  content,
  ...props
}) => (
  <TooltipRoot {...props}>
    <TooltipTrigger
      asChild={typeof children === 'object' || typeof children === 'function'}
    >
      {children}
    </TooltipTrigger>
    <TooltipContent>{content}</TooltipContent>
  </TooltipRoot>
);
Tooltip.displayName = 'Tooltip';
