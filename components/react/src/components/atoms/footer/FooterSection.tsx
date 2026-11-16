import { AnchorHTMLAttributes, ComponentType } from 'react';

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export type FooterAsLinkProps = AnchorProps &
  Required<Pick<AnchorProps, 'href'>>;

export interface FooterLinkProps {
  title: string;
  href: string;
  /** Opens the link in a new tab. */
  isExternal?: boolean;
  /** Accessible description, also shown as the native tooltip. */
  label?: string;
}

export interface FooterSectionProps {
  title: string;
  links: FooterLinkProps[];
  asLink?: ComponentType<FooterAsLinkProps>;
}

export const footerLinkClassName =
  'text-fuselage-500 hover:text-fuselage-800 dark:hover:text-fuselage-250 text-xs transition-colors';

export const FooterLink: ComponentType<
  FooterLinkProps & { asLink?: ComponentType<FooterAsLinkProps> }
> = ({ title, href, isExternal, label, asLink }) => {
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        className={footerLinkClassName}
      >
        {title}
      </a>
    );
  }

  const LinkComponent =
    asLink ?? ('a' as unknown as ComponentType<FooterAsLinkProps>);

  return (
    <LinkComponent
      href={href}
      aria-label={label}
      title={label}
      className={footerLinkClassName}
    >
      {title}
    </LinkComponent>
  );
};
FooterLink.displayName = 'FooterLink';

export const FooterSection: ComponentType<FooterSectionProps> = ({
  title,
  links,
  asLink,
}) => (
  <div className="flex flex-col gap-3">
    <h2 className="text-fuselage-900 text-xs leading-4 font-bold dark:text-white">
      {title}
    </h2>
    <ul className="flex flex-col gap-2 leading-4">
      {links.map((link) => (
        <li key={`${link.title}-${link.href}`}>
          <FooterLink {...link} asLink={asLink} />
        </li>
      ))}
    </ul>
  </div>
);
FooterSection.displayName = 'FooterSection';
