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
    <li className="flex list-none flex-col justify-between gap-4 rounded-md border border-fuselage-100 bg-fuselage-100 p-2 dark:border-fuselage-900 dark:bg-fuselage-900 md:min-h-20 md:flex-row md:items-center md:p-4">
      <div className="flex items-center gap-6">
        {icon && (
          <div className="flex size-10 items-center justify-center rounded-md bg-fuselage-150 dark:bg-fuselage-700 md:size-12">
            {createElement(icon, {
              className:
                'size-4 md:size-6 text-fuselage-600 dark:text-fuselage-500',
            })}
          </div>
        )}
        {imageSrc && !icon && (
          <img
            src={imageSrc}
            alt={title}
            className="size-10 rounded-md md:size-12"
            loading="lazy"
          />
        )}
        <div>
          <h3 className="text-lg font-medium text-fuselage-600 dark:text-fuselage-100 md:text-xl md:font-bold">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-fuselage-500 dark:text-fuselage-400 md:text-base">
              {description}
            </p>
          )}
        </div>
      </div>
      {children && (
        <div className="flex w-full flex-col justify-stretch gap-2 md:w-fit md:flex-row md:items-center md:gap-4">
          {children}
        </div>
      )}
    </li>
  );
};
