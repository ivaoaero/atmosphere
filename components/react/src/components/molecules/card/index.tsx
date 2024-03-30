import { ComponentProps } from 'react';

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
  title: ComponentProps<typeof CardTitle>['children'];
  description?: ComponentProps<typeof CardDescription>['children'];
  content: ComponentProps<typeof CardContent>['children'];
  footer?: ComponentProps<typeof CardFooter>['children'];
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
