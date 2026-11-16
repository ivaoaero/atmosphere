import { ComponentPropsWithoutRef, ComponentType, ReactNode } from 'react';

import { IVAOLogo } from '@components/atoms/ivao-logo';
import { NavigationMenuAsLinkProps } from '@components/atoms/navigation-menu/NavigationMenuLink';
import { pageContainerClassName } from '@components/atoms/page';
import {
  NavigationMenu,
  NavigationMenuSectionProps,
} from '@components/molecules/navigation-menu';

import { cn } from '@utils/styles';

export interface PageNavbarProps extends ComponentPropsWithoutRef<'header'> {
  /** Navigation entries, rendered with `NavigationMenu`. */
  sections?: NavigationMenuSectionProps[];
  /** Right-hand side content, e.g. "Log in" / "Sign up" buttons. */
  actions?: ReactNode;
  /** Where the logo links to. */
  logoHref?: string;
  /** Link component used for the logo and the navigation entries (e.g. a router `Link`). */
  asLink?: ComponentType<NavigationMenuAsLinkProps>;
  /** Forces the dark variant, for better contrast over dark backgrounds or images. */
  darkMode?: boolean;
}

/**
 * Navbar for public and marketing pages. For application headers use `Navbar`.
 */
export const PageNavbar: ComponentType<PageNavbarProps> = ({
  sections = [],
  actions,
  logoHref = '/',
  asLink,
  darkMode,
  className,
  ...props
}) => {
  const LinkComponent =
    asLink ?? ('a' as unknown as ComponentType<NavigationMenuAsLinkProps>);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full backdrop-blur-xl',
        darkMode && 'dark',
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          pageContainerClassName,
          'flex min-h-16 items-center justify-between gap-6 py-3',
        )}
      >
        <div className="flex min-w-0 flex-1 items-center gap-12">
          <LinkComponent
            href={logoHref}
            aria-label="IVAO home"
            className="shrink-0"
          >
            <span className="block sm:hidden">
              <IVAOLogo size="md" onlyIcon />
            </span>
            <span className="hidden sm:block">
              <IVAOLogo size="md" />
            </span>
          </LinkComponent>

          {sections.length > 0 && (
            <NavigationMenu
              className="hidden md:flex"
              sections={sections}
              asLink={asLink}
              darkMode={darkMode}
            />
          )}
        </div>

        {actions && (
          <div className="flex shrink-0 items-center gap-4">{actions}</div>
        )}
      </div>
    </header>
  );
};
PageNavbar.displayName = 'PageNavbar';
