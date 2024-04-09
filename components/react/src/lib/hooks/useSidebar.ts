import { useContext } from 'react';

import { SidebarContext } from '../contexts/SidebarContext';

export const useSidebar = () => {
  try {
    const sidebarContext = useContext(SidebarContext);

    if (sidebarContext) {
      return sidebarContext;
    }
  } catch (error: unknown) {
    console.error(error);
  }
  throw new Error('useSidebar must be used within a SidebarProvider');
};
