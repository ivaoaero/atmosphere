import { createContext, Dispatch, SetStateAction } from 'react';

export interface ISidebarContext {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
  toggleSidebar: () => void;
}

export const SidebarContext = createContext<ISidebarContext>({
  isSidebarOpen: true,
  setIsSidebarOpen: () => {
    throw new Error(
      'SidebarContext not initialized. Use SidebarProvider to initialize.',
    );
  },
  toggleSidebar: () => {
    throw new Error(
      'SidebarContext not initialized. Use SidebarProvider to initialize.',
    );
  },
});
