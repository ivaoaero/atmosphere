import { useContext } from 'react';

import { ToastContext } from 'src/lib/contexts/ToastContext';

export const useToast = () => {
  try {
    const toastContext = useContext(ToastContext);

    if (toastContext) {
      return toastContext;
    }
  } catch (error: unknown) {
    console.error(error);
  }
  throw new Error('useToast must be used within a ToastProvider');
};
