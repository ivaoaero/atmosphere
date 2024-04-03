import { ComponentProps, ComponentType } from 'react';

import {
  AlertDescription,
  AlertRoot,
  AlertTitle,
} from '@components/atoms/alert';

export interface AlertProps
  extends Omit<ComponentProps<typeof AlertRoot>, 'children'> {
  Icon?: ComponentType<{ className?: string }>;
  title: string;
  description?: string;
}

export const Alert = ({ title, description, Icon, ...props }: AlertProps) => (
  <AlertRoot {...props}>
    {Icon && <Icon className="h-4 w-4" />}
    <AlertTitle>{title}</AlertTitle>
    {description && <AlertDescription>{description}</AlertDescription>}
  </AlertRoot>
);
