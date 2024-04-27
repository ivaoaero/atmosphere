import { Button, ButtonProps } from '@components/atoms/button';

export type PaginationLinkProps = {
  isActive?: boolean;
} & ButtonProps;

export const PaginationLink = ({
  className,
  isActive,
  size = 'icon',
  ...props
}: PaginationLinkProps) => {
  return (
    <Button
      aria-current={isActive ? 'page' : undefined}
      variant={isActive ? 'outline' : 'ghost'}
      size={size}
      className={className}
      {...props}
    />
  );
};
PaginationLink.displayName = 'PaginationLink';
