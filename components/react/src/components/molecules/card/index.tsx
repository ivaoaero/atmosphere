import { ComponentProps, ReactNode } from 'react';

import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardRoot,
  CardTitle,
} from '@components/atoms/card';

interface CardProps
  extends Omit<
    ComponentProps<typeof CardRoot>,
    'children' | 'title' | 'content'
  > {
  title: ReactNode;
  description?: ReactNode;
  content: ReactNode;
  footer?: ReactNode;
}

export const Card = ({
  title,
  description,
  content,
  footer,
  ...props
}: CardProps) => (
  <CardRoot {...props}>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      {description && <CardDescription>{description}</CardDescription>}
    </CardHeader>
    <CardContent>{content}</CardContent>
    {footer && <CardFooter>{footer}</CardFooter>}
  </CardRoot>
);
