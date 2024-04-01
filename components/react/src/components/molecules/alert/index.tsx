import { cloneElement, ComponentProps, ReactElement } from 'react';

import {
  AlertDescription,
  AlertRoot,
  AlertTitle,
} from '@components/atoms/alert';

interface AlertProps
  extends Omit<ComponentProps<typeof AlertRoot>, 'children'> {
  icon?: ReactElement;
  title: string;
  description?: string;
}

export const Alert = ({ title, description, icon, ...props }: AlertProps) => (
  <AlertRoot {...props}>
    {icon && cloneElement(icon, { className: 'h-4 w-4' })}
    <AlertTitle>{title}</AlertTitle>
    {description && <AlertDescription>{description}</AlertDescription>}
  </AlertRoot>
);
