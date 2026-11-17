import { ComponentType } from 'react';

import {
  FooterAsLinkProps,
  FooterLink,
  FooterLinkProps,
} from '@components/atoms/footer/FooterLink';

export interface FooterSectionProps {
  title: string;
  links: FooterLinkProps[];
  asLink?: ComponentType<FooterAsLinkProps>;
}

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
          <FooterLink {...link} asLink={link.asLink ?? asLink} />
        </li>
      ))}
    </ul>
  </div>
);
FooterSection.displayName = 'FooterSection';
