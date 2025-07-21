import { ComponentType, useEffect, useState } from 'react';

import { ChevronRight } from 'lucide-react';

import { cn } from '@utils/styles';
import { useSidebar } from '@hooks/useSidebar';

import { SidebarItem, SidebarItemProps } from './SidebarItem';

export interface SidebarGroupProps {
  type: 'group';
  title: string;
  Icon: ComponentType;
  items: SidebarItemProps[];
  asLink?: ComponentType<any>;
  isActiveCheck?: (href: string) => boolean;
}

export const SidebarGroup = ({
  title,
  Icon,
  items,
  asLink,
  isActiveCheck = (href) =>
    typeof window !== 'undefined' && window.location.pathname === href,
}: SidebarGroupProps) => {
  const [isGroupOpen, setIsGroupOpen] = useState(false);
  const { isSidebarOpen } = useSidebar();

  useEffect(() => {
    if (!isSidebarOpen) setIsGroupOpen(false);
  }, [isSidebarOpen]);

  return (
    <div>
      <button
        className="group flex items-center text-fuselage-300 hover:text-fuselage-700 dark:text-fuselage-400 dark:hover:text-fuselage-200"
        onClick={() => setIsGroupOpen((prev) => !prev)}
      >
        <div
          className={cn(
            'flex size-9 items-center justify-center rounded-md p-2 transition-all',
            'bg-fuselage-100 text-fuselage-500 group-hover:bg-fuselage-200/50',
            'group-hover:text-fuselage-600 dark:bg-fuselage-700 dark:text-fuselage-500 dark:group-hover:bg-fuselage-600 dark:group-hover:text-fuselage-100'
          )}
        >
          <Icon />
        </div>

        <div
          className={cn(
            'flex shrink-0 items-center transition-all',
            isSidebarOpen ? 'ml-4 w-48 opacity-100' : 'invisible w-0 opacity-0',
          )}
        >
          <span className="font-head text-base font-semibold leading-tight text-fuselage-600 dark:text-fuselage-100">
            {title}
          </span>
          <ChevronRight
            size={20}
            className={cn(
              'ml-auto transition-transform',
              isGroupOpen && 'rotate-90',
            )}
          />
        </div>
      </button>

      {isGroupOpen && (
        <div className="ml-8 mt-3 flex flex-col gap-2">
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              {...item}
              asLink={asLink}
              isActive={item.isActive ?? isActiveCheck(item.href)}
              isGroupOpen={isGroupOpen}
            />
          ))}
        </div>
      )}
    </div>
  );
};
SidebarGroup.displayName = 'SidebarGroup';
