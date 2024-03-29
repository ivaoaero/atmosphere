import { ComponentProps } from 'react';

import { Link } from 'react-router-dom';

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuListItem,
  NavigationMenuRoot,
  NavigationMenuTrigger,
} from '@components/atoms/navigation-menu';
import { navigationMenuTriggerStyle } from '@components/atoms/navigation-menu/navigationMenuTriggerStyle';

interface NavigationMenuBaseSectionProps {
  title: string;
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

type NavigationMenuSectionType =
  | NavigationMenuSimpleLinkSectionProps
  | NavigationMenuMultipleLinksSectionProps;

interface NavigationMenuProps
  extends Omit<ComponentProps<typeof NavigationMenuRoot>, 'children'> {
  sections: NavigationMenuSectionType[];
}

const instanceOfMultipleLinksSections = (
  object: NavigationMenuSectionType,
): object is NavigationMenuMultipleLinksSectionProps => {
  return 'links' in object;
};

export const NavigationMenu = ({ sections, ...props }: NavigationMenuProps) => {
  return (
    <NavigationMenuRoot {...props}>
      <NavigationMenuList>
        {sections.map((section) => (
          <NavigationMenuItem key={section.title}>
            {instanceOfMultipleLinksSections(section) ? (
              <>
                <NavigationMenuTrigger>{section.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    {section.links.map((link) => (
                      <NavigationMenuListItem
                        key={link.title}
                        title={link.title}
                        to={link.href}
                      >
                        {link.description}
                      </NavigationMenuListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link to={section.href}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {section.title}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenuRoot>
  );
};
