import { ComponentType } from 'react';

import { Skeleton } from '@components/atoms/skeleton';

export interface ListItemMediaProps {
  title: string;

  isLoading?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  Icon?: ComponentType;
  iconAriaLabel?: string;
}

export const ListItemMedia = ({
  Icon,
  imageSrc,
  imageAlt,
  isLoading,
  iconAriaLabel,
  title,
}: ListItemMediaProps) => {
  if (isLoading) {
    return (
      <Skeleton className="size-10 md:size-12" aria-label="Loading image" />
    );
  }

  if (Icon) {
    return (
      <div
        className="flex size-10 items-center justify-center rounded-md bg-fuselage-150 dark:bg-fuselage-700 md:size-12"
        aria-hidden={!iconAriaLabel}
        {...(iconAriaLabel && { 'aria-label': iconAriaLabel })}
      >
        <Icon />
      </div>
    );
  }

  return (
    <img
      src={imageSrc}
      alt={imageAlt || title}
      className="size-10 rounded-md md:size-12"
      loading="lazy"
    />
  );
};
