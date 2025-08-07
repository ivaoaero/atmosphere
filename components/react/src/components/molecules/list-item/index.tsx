import { ComponentType, HTMLAttributes, ReactNode } from 'react';

import { ListItemContent, ListItemRoot } from '@components/atoms/list-item';

interface BaseListItemProps
  extends Omit<HTMLAttributes<HTMLLIElement>, 'onClick'> {
  title: string;
  description?: string;
  isLoading?: boolean;
  children?: ReactNode;
  imageAlt?: string;
  iconAriaLabel?: string;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
}

type InteractionProps =
  | { onClick: () => void; href?: never }
  | { href: string; onClick?: never }
  | { onClick?: never; href?: never };

type VisualProps =
  | { Icon: ComponentType; imageSrc?: never }
  | { imageSrc: string; Icon?: never }
  | { Icon?: never; imageSrc?: never };

export type ListItemProps = BaseListItemProps & InteractionProps & VisualProps;

export const ListItem = ({
  title,
  children,
  description,
  imageSrc,
  iconAriaLabel,
  imageAlt,
  headingLevel = 3,
  isLoading,
  Icon,
  ...props
}: ListItemProps) => {
  return (
    <ListItemRoot {...props}>
      <ListItemContent
        title={title}
        description={description}
        imageSrc={imageSrc}
        iconAriaLabel={iconAriaLabel}
        imageAlt={imageAlt}
        headingLevel={headingLevel}
        isLoading={isLoading}
        Icon={Icon}
        onClick={props.onClick}
        href={props.href}
      >
        {children}
      </ListItemContent>
    </ListItemRoot>
  );
};
