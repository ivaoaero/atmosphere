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

// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: 'Alert Dialog',
//     href: '/docs/primitives/alert-dialog',
//     description:
//       'A modal dialog that interrupts the user with important content and expects a response.',
//   },
//   {
//     title: 'Hover Card',
//     href: '/docs/primitives/hover-card',
//     description:
//       'For sighted users to preview content available behind a link.',
//   },
//   {
//     title: 'Progress',
//     href: '/docs/primitives/progress',
//     description:
//       'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
//   },
//   {
//     title: 'Scroll-area',
//     href: '/docs/primitives/scroll-area',
//     description: 'Visually or semantically separates content.',
//   },
//   {
//     title: 'Tabs',
//     href: '/docs/primitives/tabs',
//     description:
//       'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
//   },
//   {
//     title: 'Tooltip',
//     href: '/docs/primitives/tooltip',
//     description:
//       'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
//   },
// ];

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
