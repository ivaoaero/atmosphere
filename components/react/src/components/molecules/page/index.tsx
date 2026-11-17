import { ComponentPropsWithoutRef, ComponentType } from 'react';

import { PageContainer } from '@components/atoms/page';

import { cn } from '@utils/styles';

export interface PageProps extends ComponentPropsWithoutRef<'main'> {
  navbarOffset?: boolean;
}

export const Page: ComponentType<PageProps> = ({
  navbarOffset = false,
  className,
  ...props
}) => (
  <PageContainer
    asChild
    className={cn(
      'flex flex-1 flex-col gap-8 py-12',
      navbarOffset && 'pt-36 sm:pt-42',
      className,
    )}
  >
    <main {...props} />
  </PageContainer>
);
Page.displayName = 'Page';
