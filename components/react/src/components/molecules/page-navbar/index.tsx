import { ComponentPropsWithoutRef, ComponentType, ReactNode } from 'react';

import { IVAOLogo } from '@components/atoms/ivao-logo';
import { NavigationMenuAsLinkProps } from '@components/atoms/navigation-menu/NavigationMenuLink';
import {
  NavigationMenu,
  NavigationMenuSectionProps,
} from '@components/molecules/navigation-menu';

import { cn } from '@utils/styles';

import { PageNavbarMobileMenu } from './PageNavbarMobileMenu';

type PageNavbarBreakpoint = 'md' | 'lg' | 'xl';

// Full class names so Tailwind can detect them.
const inlineNavClassName: Record<PageNavbarBreakpoint, string> = {
  md: 'hidden md:flex',
  lg: 'hidden lg:flex',
  xl: 'hidden xl:flex',
};
const mobileMenuClassName: Record<PageNavbarBreakpoint, string> = {
  md: 'md:hidden',
  lg: 'lg:hidden',
  xl: 'xl:hidden',
};

export interface PageNavbarProps extends ComponentPropsWithoutRef<'header'> {
  /** Application name shown next to the logo, e.g. "Training". */
  appName?: ReactNode;
  /** Navigation entries, rendered with `NavigationMenu`. */
  sections?: NavigationMenuSectionProps[];
  /** Right-hand side content, e.g. a theme toggle and a `UserMenu`. */
  actions?: ReactNode;
  /** Where the logo links to. */
  logoHref?: string;
  /** Link component used for the logo and the navigation entries (e.g. a router `Link`). */
  asLink?: ComponentType<NavigationMenuAsLinkProps>;
  /** Forces the dark variant, for better contrast over dark backgrounds or images. */
  darkMode?: boolean;
  /**
   * Below this breakpoint the sections move into a side menu opened from a
   * menu button. Lower it when there are few sections and actions.
   */
  collapseBelow?: PageNavbarBreakpoint;
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
  collapseBelow = 'xl',
  className,
  ...props
}) => {
  const LinkComponent =
    asLink ?? ('a' as unknown as ComponentType<NavigationMenuAsLinkProps>);
  const appNameText = typeof appName === 'string' ? appName : undefined;
  const hasSections = sections.length > 0;

  return (
    <header
      className={cn(
        'sticky top-0 left-0 z-50 w-full px-4 py-4 sm:px-10 sm:py-6',
        darkMode && 'dark',
        className,
      )}
      {...props}
    >
      <div className="dark:bg-fuselage-900/40 flex items-center gap-4 rounded-md bg-white/80 p-3 backdrop-blur sm:p-4 lg:gap-10 lg:px-10">
        <LinkComponent
          href={logoHref}
          aria-label={appNameText ? `IVAO ${appNameText}` : 'IVAO'}
          className="flex min-w-0 items-center gap-3"
        >
          <span className="block shrink-0 sm:hidden">
            <IVAOLogo onlyIcon />
          </span>
          <span className="hidden shrink-0 sm:block">
            <IVAOLogo />
          </span>
          {appName && (
            <>
              <span
                aria-hidden="true"
                className="bg-fuselage-300 dark:bg-fuselage-500 h-6 w-px shrink-0"
              />
              <span className="text-atmos-700 truncate text-xl font-bold dark:text-white">
                {appName}
              </span>
            </>
          )}
        </LinkComponent>

        {hasSections && (
          <NavigationMenu
            className={cn('bg-transparent', inlineNavClassName[collapseBelow])}
            sections={sections}
            asLink={asLink}
            darkMode={darkMode}
          />
        )}

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-4">
          {actions}
          {hasSections && (
            <PageNavbarMobileMenu
              title={appNameText ?? 'Menu'}
              sections={sections}
              linkComponent={LinkComponent}
              className={mobileMenuClassName[collapseBelow]}
            />
          )}
        </div>
      </div>
    </header>
  );
};
PageNavbar.displayName = 'PageNavbar';
