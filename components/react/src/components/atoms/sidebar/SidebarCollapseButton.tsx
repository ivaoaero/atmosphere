import { ChevronRight } from 'lucide-react';

import { useSidebar } from '@hooks/useSidebar';

export const SidebarCollapseButton = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <button
      aria-label="Toggle sidebar"
      onClick={toggleSidebar}
      className={
        'border-fuselage-200 bg-fuselage-100 text-fuselage-400 hover:bg-fuselage-200 hover:text-fuselage-500 dark:border-fuselage-700 dark:bg-fuselage-800 dark:text-fuselage-500 dark:hover:bg-fuselage-700 flex w-full items-center justify-center gap-2 border-t py-3 transition-all'
      }
    >
      <ChevronRight
        size={24}
        className={isSidebarOpen ? 'text-fuselage-400 rotate-180' : ''}
      />
      {isSidebarOpen && (
        <span className={'shrink-0 font-semibold'}>Close sidebar</span>
      )}
    </button>
  );
};
SidebarCollapseButton.displayName = 'SideBarCollapseButton';
