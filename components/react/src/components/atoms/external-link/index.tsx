import { AnchorHTMLAttributes, forwardRef } from 'react';

export type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export const ExternalLink = forwardRef<HTMLAnchorElement, ExternalLinkProps>(
  ({ target = '_blank', rel = 'noopener noreferrer', ...props }, ref) => (
    <a ref={ref} target={target} rel={rel} {...props} />
  ),
);
ExternalLink.displayName = 'ExternalLink';
