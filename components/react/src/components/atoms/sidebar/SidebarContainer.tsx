import { ComponentType, PropsWithChildren } from 'react';

import { SidebarCollapseButton } from '@components/atoms/sidebar/SidebarCollapseButton';

export const SidebarContainer: ComponentType<PropsWithChildren> = ({
  children,
}) => {
  return (
    <aside
      className={
        'flex h-full flex-col justify-between border-r border-fuselage-200 bg-fuselage-50 dark:border-fuselage-700 dark:bg-fuselage-900'
      }
    >
      <div className="flex flex-col items-start gap-4 px-4 py-5">
        {children}
      </div>
      <SidebarCollapseButton />
    </aside>
  );
};
SidebarContainer.displayName = 'SidebarContainer';
