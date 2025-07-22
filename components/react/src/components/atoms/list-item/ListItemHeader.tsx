import { useId } from 'react';

import { Skeleton } from '@components/atoms/skeleton';

type ListItemHeaderProps = {
  title: string;
  titleId: string;
  description?: string;
  isLoading?: boolean;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
};

export const ListItemHeader = ({
  title,
  titleId,
  description,
  isLoading = false,
  headingLevel = 3,
}: ListItemHeaderProps) => {
  const descriptionId = useId();

  const HeadingComponent = `h${headingLevel}` as keyof JSX.IntrinsicElements;

  if (isLoading) {
    return (
      <>
        <Skeleton
          className="h-5 w-32 rounded-md md:w-48"
          aria-label="Loading title"
        />
        <Skeleton
          className="mt-1 h-4 w-36 rounded-md md:w-40"
          aria-label="Loading description"
        />
      </>
    );
  }

  return (
    <>
      <HeadingComponent
        id={titleId}
        className="text-lg font-medium text-fuselage-600 dark:text-fuselage-100 md:text-xl md:font-bold"
      >
        {title}
      </HeadingComponent>

      {description ? (
        <p
          id={descriptionId}
          className="text-sm text-fuselage-500 dark:text-fuselage-400 md:text-base"
        >
          {description}
        </p>
      ) : null}
    </>
  );
};
