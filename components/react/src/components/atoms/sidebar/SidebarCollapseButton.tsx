import { ChevronRight } from 'lucide-react';

import { useSidebar } from '@hooks/useSidebar';

export const SidebarCollapseButton = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <button
      onClick={toggleSidebar}
      className="w-full py-8 flex items-center justify-center hover:bg-fuselage-50/25 gap-3 hover:text-fuselage-200 text-fuselage-100 transition-all border-t border-fuselage-50/50 dark:border-fuselage-700 dark:bg-fuselage-800 dark:hover:bg-fuselage-700 dark:text-fuselage-500"
    >
      <ChevronRight size={24} className={isSidebarOpen ? 'rotate-180' : ''} />
      {isSidebarOpen && (
        <span className="font-semibold shrink-0">Close sidebar</span>
      )}
    </button>
  );
};
SidebarCollapseButton.displayName = 'SideBarCollapseButton';
