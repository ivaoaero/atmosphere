import { ComponentType, PropsWithChildren } from 'react';

import { SidebarCollapseButton } from '@components/atoms/sidebar/SidebarCollapseButton';

import { cn } from '@utils/styles.ts';
import { useSidebar } from '@hooks/useSidebar.ts';

export const SidebarContainer: ComponentType<PropsWithChildren> = ({
  children,
}) => {
  const { isSidebarOpen } = useSidebar();

  return (
    <aside
      className={cn(
        'border-fuselage-200 bg-fuselage-50 dark:border-fuselage-700 dark:bg-fuselage-900 flex h-full flex-col justify-between border-r',
        isSidebarOpen ? 'w-72' : 'box-content w-17',
      )}
    >
      <div className="flex flex-col items-start gap-4 px-4 py-5">
        {children}
      </div>
      <SidebarCollapseButton />
    </aside>
  );
};
SidebarContainer.displayName = 'SidebarContainer';
