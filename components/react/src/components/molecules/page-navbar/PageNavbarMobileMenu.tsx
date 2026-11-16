import { ComponentType } from 'react';

import { Menu } from 'lucide-react';

import { IconButton } from '@components/atoms/icon-button';
import { NavigationMenuAsLinkProps } from '@components/atoms/navigation-menu/NavigationMenuLink';
import {
  SheetClose,
  SheetContent,
  SheetRoot,
  SheetTrigger,
} from '@components/atoms/sheet';
import { NavigationMenuSectionProps } from '@components/molecules/navigation-menu';

import { cn } from '@utils/styles';

interface PageNavbarMobileMenuProps {
  title: string;
  sections: NavigationMenuSectionProps[];
  linkComponent: ComponentType<NavigationMenuAsLinkProps>;
  className?: string;
}

const linkClassName =
  'text-fuselage-800 hover:bg-fuselage-100 dark:text-fuselage-50 flex flex-col gap-0.5 rounded-md px-3 py-2.5 transition-colors dark:hover:bg-white/10';

export const PageNavbarMobileMenu = ({
  title,
  sections,
  linkComponent,
  className,
}: PageNavbarMobileMenuProps) => (
  <SheetRoot>
    {/* IconButton forces `display: flex`, so responsive visibility lives on a wrapper. */}
    <div className={cn('shrink-0', className)}>
      <SheetTrigger asChild>
        <IconButton buttonVariant="ghost" aria-label="Open navigation menu">
          <Menu size={20} />
        </IconButton>
      </SheetTrigger>
    </div>

    <SheetContent side="right" title={title} className="w-80 max-w-[85vw]">
      <nav aria-label="Main" className="-mx-3">
        <ul className="flex flex-col gap-1">
          {sections.map((section) => {
            const SectionLink = section.asLink ?? linkComponent;

            if (!('links' in section)) {
              return (
                <li key={section.title}>
                  <SheetClose asChild>
                    <SectionLink
                      href={section.href}
                      className={cn(linkClassName, 'text-base font-medium')}
                    >
                      {section.title}
                    </SectionLink>
                  </SheetClose>
                </li>
              );
            }

            return (
              <li key={section.title}>
                <p className="text-fuselage-500 dark:text-fuselage-300 px-3 pt-4 pb-1 text-xs font-semibold tracking-wide uppercase">
                  {section.title}
                </p>
                <ul className="flex flex-col gap-1">
                  {section.links.map((link) => {
                    const LinkComponent = link.asLink ?? SectionLink;
                    return (
                      <li key={link.title}>
                        <SheetClose asChild>
                          <LinkComponent
                            href={link.href}
                            className={linkClassName}
                          >
                            <span className="text-base font-medium">
                              {link.title}
                            </span>
                            <span className="text-fuselage-500 dark:text-fuselage-300 text-sm">
                              {link.description}
                            </span>
                          </LinkComponent>
                        </SheetClose>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </nav>
    </SheetContent>
  </SheetRoot>
);
