import { Button, ButtonProps } from '@components/atoms/button';

export type PaginationLinkProps = {
  isActive?: boolean;
  size?: ButtonProps['size'];
} & Omit<ButtonProps, 'variant' | 'size' | 'aria-current'>;

export const PaginationLink = ({
  className,
  isActive,
  size,
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
