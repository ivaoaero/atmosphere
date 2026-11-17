import { AnchorHTMLAttributes, ComponentType } from 'react';

import { footerLinkStyle } from '@components/atoms/footer/footerLinkStyle';

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export type FooterAsLinkProps = AnchorProps &
  Required<Pick<AnchorProps, 'href'>>;

export interface FooterLinkProps {
  title: string;
  href: string;
  label?: string;
  asLink?: ComponentType<FooterAsLinkProps>;
}

export const FooterLink: ComponentType<FooterLinkProps> = ({
  title,
  href,
  label,
  asLink,
}) => {
  const LinkComponent =
    asLink ?? ('a' as unknown as ComponentType<FooterAsLinkProps>);

  return (
    <LinkComponent
      href={href}
      aria-label={label}
      title={label}
      className={footerLinkStyle}
    >
      {title}
    </LinkComponent>
  );
};
FooterLink.displayName = 'FooterLink';
