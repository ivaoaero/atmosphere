import { ComponentType, HTMLAttributes, ReactNode, useId } from 'react';

import { ListItemActions } from '@components/atoms/list-item/ListItemActions';
import { ListItemMedia } from '@components/atoms/list-item/ListItemMedia';

import { ListItemHeader } from './ListItemHeader';

export interface ListItemProps extends HTMLAttributes<HTMLLIElement> {
  title: string;
  description?: string;
  isLoading?: boolean;
  children?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  Icon?: ComponentType;
  iconAriaLabel?: string;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  onClick?: () => void;
  href?: string;
}

export const ListItemContent = ({
  title,
  children,
  description,
  imageSrc,
  iconAriaLabel,
  imageAlt,
  headingLevel = 3,
  onClick,
  href,
  isLoading,
  Icon,
}: ListItemProps) => {
  const titleId = useId();

  return (
    <>
      <div className="flex items-center gap-6">
        <ListItemMedia
          title={title}
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          Icon={Icon}
          iconAriaLabel={iconAriaLabel}
          isLoading={isLoading}
        />
        <div>
          <ListItemHeader
            title={title}
            titleId={titleId}
            description={description}
            isLoading={isLoading}
            headingLevel={headingLevel}
          />
        </div>
      </div>
      <ListItemActions
        title={title}
        titleId={titleId}
        isLoading={isLoading}
        onClick={onClick}
        href={href}
      >
        {children}
      </ListItemActions>
    </>
  );
};
