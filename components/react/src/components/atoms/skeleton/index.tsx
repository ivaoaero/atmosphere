import { HTMLAttributes } from 'react';

import { cn } from '@utils/styles';

export const Skeleton = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-muted dark:bg-muted-foreground',
        className,
      )}
      {...props}
    />
  );
};
