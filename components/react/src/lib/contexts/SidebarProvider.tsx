import { ComponentType, PropsWithChildren, useCallback, useState } from 'react';

import { SidebarContext } from 'src/lib/contexts/SidebarContext';

interface SidebarProviderProps {
  isDefaultOpen?: boolean;
}

export const SidebarProvider: ComponentType<
  PropsWithChildren<SidebarProviderProps>
> = ({ isDefaultOpen = true, children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(isDefaultOpen);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  return (
    <SidebarContext.Provider
      value={{ isSidebarOpen, setIsSidebarOpen, toggleSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
SidebarProvider.displayName = 'SidebarProvider';
