import {
  createElement,
  ElementType,
  HTMLAttributes,
  KeyboardEvent,
  ReactNode,
  useId,
} from 'react';

import { Skeleton } from '@components/atoms/skeleton';

export interface ListItemProps extends HTMLAttributes<HTMLLIElement> {
  title: string;
  description?: string;
  isLoading?: boolean;
  children?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  icon?: ElementType;
  iconAriaLabel?: string;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  onClick?: () => void;
  href?: string;
}

export const ListItem = ({
  title,
  children,
  description,
  imageSrc,
  icon,
  iconAriaLabel,
  imageAlt,
  headingLevel = 3,
  onClick,
  href,
  isLoading,
  'aria-label': ariaLabel,
  ...props
}: ListItemProps) => {
  const titleId = useId();
  const descriptionId = useId();

  const HeadingComponent = `h${headingLevel}` as keyof JSX.IntrinsicElements;
  const isInteractive = Boolean(onClick || href);
  const hasActions = Boolean(children);

  const listItemProps = {
    className: `flex list-none flex-col justify-between gap-2 rounded-md border border-fuselage-100 bg-fuselage-100 p-2 dark:border-fuselage-900 dark:bg-fuselage-900 md:min-h-20 md:flex-row md:items-center md:p-3 ${isInteractive ? 'cursor-pointer hover:bg-fuselage-50 dark:hover:bg-fuselage-800 focus-within:ring-2 focus:ring-fuselage-400 dark:focus:ring-fuselage-200 focus-within:ring-fuselage-400 dark:focus-within:ring-fuselage-200 focus-within:ring-offset-2' : ''}`,
    'aria-label': ariaLabel,
    ...(isInteractive && {
      role: 'button',
      tabIndex: 0,
      onClick,
      onKeyDown: (e: KeyboardEvent) => {
        if ((e.key === 'Enter' || e.key === ' ') && onClick) {
          e.preventDefault();
          onClick();
        }
      },
    }),
    ...props,
  };

  const content = (
    <>
      <div className="flex items-center gap-6">
        {isLoading && (
          <Skeleton className="size-10 md:size-12" aria-label="Loading image" />
        )}
        {icon && !isLoading && (
          <div
            className="flex size-10 items-center justify-center rounded-md bg-fuselage-150 dark:bg-fuselage-700 md:size-12"
            aria-hidden={!iconAriaLabel}
            {...(iconAriaLabel && { 'aria-label': iconAriaLabel })}
          >
            {createElement(icon, {
              className:
                'size-4 md:size-6 text-fuselage-600 dark:text-fuselage-500',
              'aria-hidden': !iconAriaLabel,
            })}
          </div>
        )}
        {imageSrc && !icon && !isLoading && (
          <img
            src={imageSrc}
            alt={imageAlt || title}
            className="size-10 rounded-md md:size-12"
            loading="lazy"
          />
        )}
        <div>
          {isLoading && (
            <Skeleton
              className="h-5 w-32 rounded-md md:w-48"
              aria-label="Loading title"
            />
          )}
          {!isLoading && (
            <HeadingComponent
              id={titleId}
              className="text-lg font-medium text-fuselage-600 dark:text-fuselage-100 md:text-xl md:font-bold"
            >
              {title}
            </HeadingComponent>
          )}

          {isLoading && (
            <Skeleton
              className="mt-1 h-4 w-36 rounded-md md:w-40"
              aria-label="Loading description"
            />
          )}
          {description && !isLoading && (
            <p
              id={descriptionId}
              className="text-sm text-fuselage-500 dark:text-fuselage-400 md:text-base"
            >
              {description}
            </p>
          )}
        </div>
      </div>
      {hasActions && !isInteractive && isLoading && (
        <Skeleton
          className="h-9 w-full rounded-md md:w-28"
          aria-label="Loading actions"
        />
      )}
      {hasActions && !isInteractive && !isLoading && (
        <div
          id={`${titleId}-actions`}
          className="flex w-full flex-col justify-stretch gap-2 md:w-fit md:flex-row md:items-center md:gap-4"
          aria-label="Actions"
        >
          {children}
        </div>
      )}
    </>
  );

  if (href && !onClick) {
    return (
      <li className="list-none">
        <a href={href} className={listItemProps.className}>
          {content}
        </a>
      </li>
    );
  }

  return <li {...listItemProps}>{content}</li>;
};
