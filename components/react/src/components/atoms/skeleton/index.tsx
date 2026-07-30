import { HTMLAttributes } from 'react';

import { cn } from '@utils/styles';

export const Skeleton = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'bg-muted dark:bg-muted-foreground animate-pulse rounded-md',
        className,
      )}
      {...props}
    />
  );
};
