import { ChevronRight } from 'lucide-react';

import { useSidebar } from '@hooks/useSidebar';

export const SidebarCollapseButton = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <button
      onClick={toggleSidebar}
      className={
        'flex w-full items-center justify-center gap-3 border-t border-fuselage-50/50 py-8 text-fuselage-100 transition-all hover:bg-fuselage-50/25 hover:text-fuselage-200 dark:border-fuselage-700 dark:bg-fuselage-800 dark:text-fuselage-500 dark:hover:bg-fuselage-700'
      }
    >
      <ChevronRight size={24} className={isSidebarOpen ? 'rotate-180' : ''} />
      {isSidebarOpen && (
        <span className={'shrink-0 font-semibold'}>Close sidebar</span>
      )}
    </button>
  );
};
SidebarCollapseButton.displayName = 'SideBarCollapseButton';
