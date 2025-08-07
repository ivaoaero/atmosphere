import { ChevronRight } from 'lucide-react';

import { useSidebar } from '@hooks/useSidebar';

export const SidebarCollapseButton = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <button
      aria-label="Toggle sidebar"
      onClick={toggleSidebar}
      className={
        'flex w-full items-center justify-center gap-2 border-t border-fuselage-200 bg-fuselage-100 py-3 text-fuselage-400 transition-all hover:bg-fuselage-200 hover:text-fuselage-500 dark:border-fuselage-700 dark:bg-fuselage-800 dark:text-fuselage-500 dark:hover:bg-fuselage-700'
      }
    >
      <ChevronRight
        size={24}
        className={isSidebarOpen ? 'rotate-180 text-fuselage-400' : ''}
      />
      {isSidebarOpen && (
        <span className={'shrink-0 font-semibold'}>Close sidebar</span>
      )}
    </button>
  );
};
SidebarCollapseButton.displayName = 'SideBarCollapseButton';
