import { ComponentProps } from 'react';

import {
  AlertDescription,
  AlertRoot,
  AlertTitle,
} from '@components/atoms/alert';

interface AlertProps
  extends Omit<ComponentProps<typeof AlertRoot>, 'children'> {
  icon?: React.ReactNode;
  title: string;
  description?: string;
}

export const Alert = ({ title, description, icon, ...props }: AlertProps) => (
  <AlertRoot {...props}>
    {icon}
    <AlertTitle>{title}</AlertTitle>
    {description && <AlertDescription>{description}</AlertDescription>}
  </AlertRoot>
);
