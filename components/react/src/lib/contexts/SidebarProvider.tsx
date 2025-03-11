import { ComponentType, PropsWithChildren, useState } from 'react';

import { SidebarContext } from 'src/lib/contexts/SidebarContext';

interface SidebarProviderProps {
  isDefaultOpen?: boolean;
}

export const SidebarProvider: ComponentType<
  PropsWithChildren<SidebarProviderProps>
> = ({ isDefaultOpen = true, children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(isDefaultOpen);
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <SidebarContext.Provider
      value={{ isSidebarOpen, setIsSidebarOpen, toggleSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
SidebarProvider.displayName = 'SidebarProvider';
