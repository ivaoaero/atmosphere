import { ComponentPropsWithoutRef, ComponentType } from 'react';

import { pageContainerClassName } from '@components/atoms/page';

import { cn } from '@utils/styles';

export type PageProps = ComponentPropsWithoutRef<'main'>;

/**
 * Main content wrapper for a page. Applies the common page spacing so every
 * page shares the same gutters and vertical rhythm, aligned with `PageNavbar`
 * and `Footer`.
 */
export const Page: ComponentType<PageProps> = ({ className, ...props }) => (
  <main
    className={cn(
      pageContainerClassName,
      'flex flex-1 flex-col gap-8 py-12',
      className,
    )}
    {...props}
  />
);
Page.displayName = 'Page';
