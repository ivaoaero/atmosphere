import { ReactNode } from 'react';

import { Skeleton } from '@components/atoms/skeleton';

type ListItemActionsProps = {
  title: string;
  titleId: string;
  isLoading?: boolean;
  children?: ReactNode;
  onClick?: () => void;
  href?: string;
};

export const ListItemActions = ({
  titleId,
  isLoading,
  children,
  onClick,
  href,
}: ListItemActionsProps) => {
  const isInteractive = Boolean(onClick || href);
  const hasActions = Boolean(children);

  if (!hasActions) {
    return null;
  }

  if (!isInteractive && isLoading) {
    return (
      <Skeleton
        className="h-9 w-full rounded-md md:w-28"
        aria-label="Loading actions"
      />
    );
  }

  return (
    <div
      id={`${titleId}-actions`}
      className="flex w-full flex-col justify-stretch gap-2 md:w-fit md:flex-row md:items-center md:gap-4"
      aria-label="Actions"
    >
      {children}
    </div>
  );
};
