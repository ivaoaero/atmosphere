import { ComponentType, useEffect, useState } from 'react';

import { ChevronRight } from 'lucide-react';

import { SidebarIcon } from '@components/atoms/sidebar/SidebarIcon.tsx';
import { sidebarItemStyle } from '@components/atoms/sidebar/sidebarItemStyle.ts';

import { cn } from '@utils/styles';
import { useSidebar } from '@hooks/useSidebar';

import {
  SidebarAsLinkProps,
  SidebarItem,
  SidebarItemProps,
} from './SidebarItem';

export interface SidebarGroupProps extends Pick<
  SidebarItemProps,
  'title' | 'Icon' | 'asLink'
> {
  title: string;
  Icon: ComponentType;
  items: SidebarItemProps[];
  asLink?: ComponentType<SidebarAsLinkProps>;
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
  const { isSidebarOpen } = useSidebar();
  const [isGroupOpen, setIsGroupOpen] = useState<boolean>();

  const isAnyChildActive = items.some((item) => isActiveCheck(item.href));

  useEffect(() => {
    if (isAnyChildActive) {
      setIsGroupOpen(true);
    }
  }, [isAnyChildActive]);

  // The group expands in place, so its child items can be reached whilst the sidebar is collapsed
  const handleGroupToggle = () => {
    setIsGroupOpen(!isGroupOpen);
  };

  return (
    <div
      className={cn(
        'w-full transition-all',
        !isSidebarOpen &&
          isGroupOpen &&
          'bg-fuselage-100/60 ring-fuselage-200 dark:bg-fuselage-800 dark:ring-fuselage-700 -m-1 box-content rounded-lg p-1 ring-1',
      )}
    >
      <button
        className={sidebarItemStyle}
        onClick={handleGroupToggle}
        aria-expanded={!!isGroupOpen}
        aria-label={isSidebarOpen ? undefined : title}
        title={isSidebarOpen ? undefined : title}
      >
        <SidebarIcon Icon={Icon} />

        <div
          className={cn(
            'ml-4 flex grow items-center transition-all',
            !isSidebarOpen && 'hidden',
          )}
        >
          <span className="font-head text-fuselage-600 dark:text-fuselage-100 mr-2 text-base leading-tight font-semibold">
            {title}
          </span>
          <ChevronRight
            size={20}
            className={cn(
              'ml-auto shrink-0 transition-transform',
              isGroupOpen && 'rotate-90',
            )}
          />
        </div>
      </button>

      {isGroupOpen && (
        <div
          className={cn(
            'flex flex-col gap-2',
            isSidebarOpen
              ? "before:bg-fuselage-100 dark:before:bg-fuselage-700 relative pt-3 pl-4.5 before:absolute before:top-2 before:left-0 before:h-[calc(100%-8px)] before:w-px before:content-['']"
              : 'pt-2',
          )}
        >
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
