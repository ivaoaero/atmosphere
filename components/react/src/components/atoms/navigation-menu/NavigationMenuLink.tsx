import {
  AnchorHTMLAttributes,
  ComponentType,
  ElementRef,
  forwardRef,
  PropsWithRef,
} from 'react';

import { Link as RadixLink } from '@radix-ui/react-navigation-menu';

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export type NavigationMenuAsLinkProps = PropsWithRef<AnchorProps> &
  Required<Pick<AnchorProps, 'href'>>;

export interface NavigationMenuLinkRootProps extends NavigationMenuAsLinkProps {
  asLink: ComponentType<NavigationMenuAsLinkProps>;
}

export const NavigationMenuLink = forwardRef<
  ElementRef<typeof RadixLink>,
  NavigationMenuLinkRootProps
>(({ asLink, ...props }, ref) => {
  const LinkComponent = asLink ?? 'a';
  return (
    <RadixLink ref={ref} asChild={true}>
      <LinkComponent {...props} />
    </RadixLink>
  );
});
NavigationMenuLink.displayName = RadixLink.displayName;
