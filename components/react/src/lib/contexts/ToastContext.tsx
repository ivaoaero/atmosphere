import {
  ComponentPropsWithoutRef,
  ComponentType,
  createContext,
  PropsWithChildren,
  useCallback,
  useState,
} from 'react';

import { Provider } from '@radix-ui/react-toast';

import { ToastViewport } from '@components/atoms/toast';
import { Toast, ToastProps } from '@components/molecules/toast';

export const ToastContext = createContext<(props: ToastProps) => void>(() => {
  throw new Error(
    'ToastContext not initialized. Use ToastProvider to initialize.',
  );
});

interface ToastProviderProps {
  swipeDirection?: ComponentPropsWithoutRef<typeof Provider>['swipeDirection'];
}

export const ToastProvider: ComponentType<
  PropsWithChildren<ToastProviderProps>
> = ({ children, swipeDirection = 'right' }) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const toast = useCallback((props: ToastProps) => {
    setToasts((prev) => [...prev, props]);
  }, []);

  return (
    <ToastContext.Provider value={toast}>
      <Provider swipeDirection={swipeDirection}>
        {children}
        {toasts.map((toastProps, index) => (
          <Toast {...toastProps} key={index} />
        ))}
        <ToastViewport />
      </Provider>
    </ToastContext.Provider>
  );
};
