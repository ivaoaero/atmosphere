import { HTMLAttributes } from 'react';

export interface ListItemRootProps extends HTMLAttributes<HTMLLIElement> {
  onClick?: () => void;
  href?: string;
}

export const ListItemRoot = ({
  onClick,
  href,
  'aria-label': ariaLabel,
  children,
  ...props
}: ListItemRootProps) => {
  const isInteractive = Boolean(onClick || href);

  const listItemProps: React.LiHTMLAttributes<HTMLLIElement> = {
    className: `flex list-none flex-col justify-between transition-all gap-2 rounded-md border border-fuselage-100 bg-fuselage-100 p-2 dark:border-fuselage-900 dark:bg-fuselage-900 md:min-h-20 md:flex-row md:items-center md:p-3 ${isInteractive ? 'cursor-pointer hover:bg-fuselage-200 dark:hover:bg-fuselage-800 focus-within:ring-2 focus:ring-fuselage-400 dark:focus:ring-fuselage-200 focus-within:ring-fuselage-400 dark:focus-within:ring-fuselage-200 focus-within:ring-offset-2' : ''}`,
    'aria-label': ariaLabel,
    ...(isInteractive && {
      role: 'button',
      tabIndex: 0,
      onClick,
      onKeyDown: (e: React.KeyboardEvent<HTMLLIElement>) => {
        if ((e.key === 'Enter' || e.key === ' ') && onClick) {
          e.preventDefault();
          onClick();
        }
      },
    }),
    ...props,
  };

  if (href && !onClick) {
    return (
      <li className="list-none">
        <a href={href} className={listItemProps.className}>
          {children}
        </a>
      </li>
    );
  }

  return <li {...listItemProps}>{children}</li>;
};
