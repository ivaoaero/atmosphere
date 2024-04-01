import {
  ComponentType,
  createContext,
  PropsWithChildren,
  useState,
} from 'react';

interface ISidebarContext {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
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
