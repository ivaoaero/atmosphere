import { createContext } from 'react';

import { ToastProps } from '@components/molecules/toast';

export const ToastContext = createContext<(props: ToastProps) => void>(() => {
  throw new Error(
    'ToastContext not initialized. Use ToastProvider to initialize.',
  );
});
