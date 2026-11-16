import { ComponentPropsWithoutRef, ComponentType, ReactNode } from 'react';

import { IVAOLogo } from '@components/atoms/ivao-logo';
import { NavigationMenuAsLinkProps } from '@components/atoms/navigation-menu/NavigationMenuLink';
import {
  NavigationMenu,
  NavigationMenuSectionProps,
} from '@components/molecules/navigation-menu';

import { cn } from '@utils/styles';

export interface PageNavbarProps extends ComponentPropsWithoutRef<'header'> {
  /** Application name shown next to the logo, e.g. "Training". */
  appName?: ReactNode;
  /** Navigation entries, rendered with `NavigationMenu`. */
  sections?: NavigationMenuSectionProps[];
  /** Right-hand side content, e.g. log in / user menu buttons. */
  actions?: ReactNode;
  /** Where the logo links to. */
  logoHref?: string;
  /** Link component used for the logo and the navigation entries (e.g. a router `Link`). */
  asLink?: ComponentType<NavigationMenuAsLinkProps>;
  /** Forces the dark variant, for better contrast over dark backgrounds or images. */
  darkMode?: boolean;
}

/**
 * Floating navbar for public and marketing pages. For application headers use
 * `Navbar`. It is `sticky` by default; pass `className="fixed"` to overlay it
 * on top of the page content (e.g. a hero image).
 */
export const PageNavbar: ComponentType<PageNavbarProps> = ({
  appName,
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
        'sticky top-0 left-0 z-50 w-full px-4 py-6 sm:px-10',
        darkMode && 'dark',
        className,
      )}
      {...props}
    >
      <div className="dark:bg-fuselage-900/40 flex items-center gap-10 rounded-md bg-white/80 p-4 backdrop-blur sm:px-10">
        <LinkComponent
          href={logoHref}
          aria-label={typeof appName === 'string' ? `IVAO ${appName}` : 'IVAO'}
          className="flex shrink-0 items-center gap-3"
        >
          <span className="block sm:hidden">
            <IVAOLogo onlyIcon />
          </span>
          <span className="hidden sm:block">
            <IVAOLogo />
          </span>
          {appName && (
            <>
              <span
                aria-hidden="true"
                className="bg-fuselage-300 dark:bg-fuselage-500 h-6 w-px"
              />
              <span className="text-atmos-700 text-xl font-bold dark:text-white">
                {appName}
              </span>
            </>
          )}
        </LinkComponent>

        <nav className="flex w-full items-center justify-between gap-4">
          {sections.length > 0 && (
            <NavigationMenu
              className="hidden bg-transparent md:flex"
              sections={sections}
              asLink={asLink}
              darkMode={darkMode}
            />
          )}

          {actions && (
            <div className="ml-auto flex items-center gap-4">{actions}</div>
          )}
        </nav>
      </div>
    </header>
  );
};
PageNavbar.displayName = 'PageNavbar';
