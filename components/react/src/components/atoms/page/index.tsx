import { ComponentPropsWithoutRef, ComponentType } from 'react';

import { cn } from '@utils/styles';

export const pageContainerClassName =
  'mx-auto w-full max-w-360 px-4 sm:px-10 xl:px-40';

export const PageContainer: ComponentType<ComponentPropsWithoutRef<'div'>> = ({
  className,
  ...props
}) => <div className={cn(pageContainerClassName, className)} {...props} />;
PageContainer.displayName = 'PageContainer';
