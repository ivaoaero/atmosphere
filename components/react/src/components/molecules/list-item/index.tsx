import { createElement } from 'react';

export interface ListItemProps {
  title: string;
  description?: string;
  isLoading?: boolean;
  children?: React.ReactNode;
  imageSrc?: string;
  icon: React.ElementType;
}

export const ListItem = ({
  title,
  children,
  description,
  imageSrc,
  icon,
}: ListItemProps) => {
  return (
    <li className="flex min-h-20 list-none items-center justify-between rounded-md border border-fuselage-100 bg-fuselage-100 p-4 dark:border-fuselage-900 dark:bg-fuselage-900">
      <div className="flex items-center gap-6">
        {icon && (
          <div className="flex size-12 items-center justify-center rounded-md bg-fuselage-150 dark:bg-fuselage-700">
            {createElement(icon, {
              className: 'size-6 text-fuselage-600 dark:text-fuselage-500',
            })}
          </div>
        )}
        {imageSrc && !icon && (
          <img
            src={imageSrc}
            alt={title}
            className="size-12 rounded-md"
            loading="lazy"
          />
        )}
        <div>
          <h3 className="text-xl font-bold text-fuselage-600 dark:text-fuselage-100">
            {title}
          </h3>
          {description && (
            <p className="text-base text-fuselage-500 dark:text-fuselage-400">
              {description}
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center gap-4">{children}</div>
    </li>
  );
};
