import { ComponentType, PropsWithChildren } from 'react';

import { SidebarCollapseButton } from '@components/atoms/sidebar/SidebarCollapseButton';

export const SidebarContainer: ComponentType<PropsWithChildren> = ({
  children,
}) => {
  return (
    <aside className="border-fuselage-50/50 bg-semantic-blue-50 dark:bg-fuselage-900 dark:border-fuselage-700 flex h-full flex-col justify-between border-r">
      <div className="flex flex-col items-start p-3 gap-4">{children}</div>
      <SidebarCollapseButton />
    </aside>
  );
};
SidebarContainer.displayName = 'SidebarContainer';
