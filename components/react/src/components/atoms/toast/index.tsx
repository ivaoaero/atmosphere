import { createContext, PropsWithChildren, ReactNode, useState } from 'react';

import * as ToastPrimitive from '@radix-ui/react-toast';
import clsx from 'clsx';

interface ToastProps {
  title: string;
  description?: string;
  duration?: number;
  toastProps?: ToastPrimitive.ToastProps;
  actionAltText?: string;
  action?: ReactNode;
}

export const Toast = ({
  title,
  description,
  duration = 5000,
  toastProps,
  actionAltText,
  action,
}: ToastProps) => (
  <ToastPrimitive.Root
    className={clsx(
      'bg-white dark:bg-fuselage-700 rounded-md md:min-w-[24rem] p-3 flex items-center justify-between gap-6 shadow-sm border border-fuselage-50/50 dark:border-fuselage-600',
      'radix-state-open:animate-toast-slide-in-bottom md:radix-state-open:animate-toast-slide-in-right',
      'radix-state-closed:animate-toast-hide',
      'radix-swipe-direction-right:radix-swipe-end:animate-toast-swipe-out-x',
      'radix-swipe-direction-right:translate-x-radix-toast-swipe-move-x',
      'radix-swipe-direction-down:radix-swipe-end:animate-toast-swipe-out-y',
      'radix-swipe-direction-down:translate-y-radix-toast-swipe-move-y',
      'radix-swipe-cancel:translate-x-0 radix-swipe-cancel:duration-200 radix-swipe-cancel:ease-[ease]',
    )}
    duration={duration}
    {...toastProps}
  >
    <div className={'text-sm'}>
      <ToastPrimitive.Title className={'font-bold text-fuselage-700 dark:text-fuselage-100'}>
        {title}
      </ToastPrimitive.Title>
      <ToastPrimitive.Description>{description}</ToastPrimitive.Description>
    </div>
    {action ?? (
      <ToastPrimitive.Action asChild altText={actionAltText || ''}>
        {action}
      </ToastPrimitive.Action>
    )}
    <ToastPrimitive.Close aria-label={'Close'}>
      <span aria-hidden>x</span>
    </ToastPrimitive.Close>
  </ToastPrimitive.Root>
);

export type ToastTriggerType = (props: ToastProps) => void;

interface ToastContextProps {
  toast: ToastTriggerType;
}

export const ToastContext = createContext<ToastContextProps>(null!);

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const toast: ToastTriggerType = (props: ToastProps) => {
    setToasts((prev) => [...prev, props]);
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      <ToastPrimitive.Provider swipeDirection={'right'}>
        {children}
        {toasts.map((toastProps, index) => (
          <Toast {...toastProps} key={index} />
        ))}
        <ToastPrimitive.Viewport className={'fixed bottom-0 right-0 flex flex-col p-6 gap-3 w-fit max-w-xl m-0 list-none z-[999] outline-none'} />
      </ToastPrimitive.Provider>
    </ToastContext.Provider>
  );
};
