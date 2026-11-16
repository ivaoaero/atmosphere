import { ComponentPropsWithoutRef, ComponentType, ReactNode } from 'react';

import {
  FooterAsLinkProps,
  FooterLink,
  FooterLinkProps,
  FooterSection,
  FooterSectionProps,
} from '@components/atoms/footer';
import { IVAOLogo } from '@components/atoms/ivao-logo';
import { pageContainerClassName } from '@components/atoms/page';

import { cn } from '@utils/styles';

import {
  defaultFooterSocialLinks,
  FooterSocialLinkProps,
} from './defaultFooterSocialLinks';

export type { FooterSocialLinkProps };

export interface FooterProps extends Omit<
  ComponentPropsWithoutRef<'footer'>,
  'title'
> {
  title?: ReactNode;
  description?: ReactNode;
  sections?: Omit<FooterSectionProps, 'asLink'>[];
  socialLinks?: FooterSocialLinkProps[];
  legalLinks?: FooterLinkProps[];
  copyright?: ReactNode;
  logoHref?: string;
  asLink?: ComponentType<FooterAsLinkProps>;
}

export const Footer: ComponentType<FooterProps> = ({
  title,
  description,
  sections = [],
  socialLinks = defaultFooterSocialLinks,
  legalLinks = [],
  copyright,
  logoHref = '/',
  asLink,
  className,
  ...props
}) => {
  const LinkComponent =
    asLink ?? ('a' as unknown as ComponentType<FooterAsLinkProps>);

  return (
    <footer
      className={cn(
        'from-fuselage-50 to-fuselage-200 dark:from-fuselage-950 dark:to-fuselage-800 w-full bg-linear-189 from-[42.5%] to-[79.6%]',
        className,
      )}
      {...props}
    >
      <div className={cn(pageContainerClassName, 'flex flex-col gap-6 py-12')}>
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="flex max-w-104 flex-col gap-2">
            <div className="flex items-center gap-4">
              <LinkComponent
                href={logoHref}
                aria-label="IVAO home"
                className="shrink-0"
              >
                <IVAOLogo size="md" />
              </LinkComponent>
              {title && (
                <>
                  <span
                    aria-hidden="true"
                    className="bg-fuselage-300 dark:bg-fuselage-500 h-6 w-px"
                  />
                  <div className="text-atmos-700 text-lg leading-4 font-bold dark:text-white">
                    {title}
                  </div>
                </>
              )}
            </div>

            {description && (
              <div className="text-fuselage-600 dark:text-fuselage-500 text-xs leading-4">
                {description}
              </div>
            )}

            {socialLinks.length > 0 && (
              <ul className="flex items-center gap-4 py-2">
                {socialLinks.map(({ href, title: socialTitle, icon }) => (
                  <li key={href} className="flex">
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={socialTitle}
                      aria-label={socialTitle}
                      className="text-fuselage-500 hover:text-fuselage-800 dark:text-fuselage-250 flex size-4 items-center justify-center transition-colors dark:hover:text-white"
                    >
                      {icon}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {sections.length > 0 && (
            <nav className="flex flex-wrap gap-x-12 gap-y-8">
              {sections.map((section) => (
                <FooterSection
                  key={section.title}
                  {...section}
                  asLink={asLink}
                />
              ))}
            </nav>
          )}
        </div>

        <div className="border-fuselage-150 dark:border-fuselage-900 flex flex-col-reverse items-center justify-between gap-4 border-t py-8 sm:flex-row">
          <p className="text-fuselage-450 text-center text-xs leading-4 sm:text-left">
            {copyright ??
              `${new Date().getFullYear()} © IVAO - International Virtual Aviation Organisation. All Rights Reserved.`}
          </p>

          {legalLinks.length > 0 && (
            <ul className="flex items-center gap-4 leading-4">
              {legalLinks.map((link) => (
                <li key={`${link.title}-${link.href}`}>
                  <FooterLink {...link} asLink={asLink} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  );
};
Footer.displayName = 'Footer';
