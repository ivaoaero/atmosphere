import { ComponentProps, ComponentType } from 'react';

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuListItem,
  NavigationMenuRoot,
  NavigationMenuTrigger,
} from '@components/atoms/navigation-menu';
import { NavigationMenuAsLinkProps } from '@components/atoms/navigation-menu/NavigationMenuLink';
import { navigationMenuTriggerStyle } from '@components/atoms/navigation-menu/navigationMenuTriggerStyle';

interface NavigationMenuBaseSectionProps {
  title: string;
  asLink?: ComponentType<NavigationMenuAsLinkProps>;
}

interface NavigationMenuSimpleLinkSectionProps
  extends NavigationMenuBaseSectionProps {
  href: string;
}

interface NavigationMenuExtendedLinkProps
  extends NavigationMenuSimpleLinkSectionProps {
  description: string;
}

interface NavigationMenuMultipleLinksSectionProps
  extends NavigationMenuBaseSectionProps {
  links: NavigationMenuExtendedLinkProps[];
}

export type NavigationMenuSectionProps =
  | NavigationMenuSimpleLinkSectionProps
  | NavigationMenuMultipleLinksSectionProps;

export interface NavigationMenuProps
  extends Omit<ComponentProps<typeof NavigationMenuRoot>, 'children'> {
  sections: NavigationMenuSectionProps[];
  asLink?: ComponentType<NavigationMenuAsLinkProps>;
}

const instanceOfMultipleLinksSections = (
  object: NavigationMenuSectionProps,
): object is NavigationMenuMultipleLinksSectionProps => {
  return 'links' in object;
};

export const NavigationMenu: ComponentType<NavigationMenuProps> = ({
  sections,
  asLink,
  ...props
}) => {
  const LinkComponent =
    asLink ?? ('a' as unknown as ComponentType<NavigationMenuAsLinkProps>);
  return (
    <NavigationMenuRoot {...props}>
      <NavigationMenuList>
        {sections.map((section) => (
          <NavigationMenuItem key={section.title}>
            {instanceOfMultipleLinksSections(section) ? (
              <>
                <NavigationMenuTrigger>{section.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid list-none gap-3 bg-red-600 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    {section.links.map((link) => (
                      <NavigationMenuListItem
                        key={link.title}
                        title={link.title}
                        href={link.href}
                        asLink={link.asLink ?? section.asLink ?? LinkComponent}
                      >
                        {link.description}
                      </NavigationMenuListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                asLink={section.asLink ?? LinkComponent}
                href={section.href}
              >
                {section.title}
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenuRoot>
  );
};
