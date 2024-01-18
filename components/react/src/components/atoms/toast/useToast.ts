import { useContext } from 'react';

import { ToastContext, ToastTriggerType } from '.';

export const useToast = (): ToastTriggerType => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context.toast;
};
