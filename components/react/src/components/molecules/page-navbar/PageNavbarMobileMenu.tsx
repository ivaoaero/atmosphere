import { ComponentType } from 'react';

import { ChevronDown, Menu } from 'lucide-react';

import {
  CollapsibleContent,
  CollapsibleRoot,
  CollapsibleTrigger,
} from '@components/atoms/collapsible';
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

const rowClassName =
  'text-fuselage-800 hover:bg-fuselage-100 focus-visible:ring-atmos-500 dark:text-fuselage-50 dark:focus-visible:ring-fuselage-300 flex w-full items-center justify-between gap-2 rounded-md px-3 py-2.5 text-left text-base font-semibold transition-colors outline-none focus-visible:ring-2 dark:hover:bg-white/10';

const childClassName =
  'hover:bg-fuselage-100 focus-visible:ring-atmos-500 dark:focus-visible:ring-fuselage-300 flex min-w-0 flex-col gap-0.5 rounded-md px-3 py-2 transition-colors outline-none focus-visible:ring-2 dark:hover:bg-white/10';

export const PageNavbarMobileMenu = ({
  title,
  sections,
  linkComponent,
  className,
}: PageNavbarMobileMenuProps) => (
  <SheetRoot>
    <div className={cn('shrink-0', className)}>
      <SheetTrigger asChild>
        <IconButton buttonVariant="ghost" aria-label="Open navigation menu">
          <Menu size={20} />
        </IconButton>
      </SheetTrigger>
    </div>

    <SheetContent
      side="right"
      title={title}
      className="w-80 max-w-[85vw] overflow-x-hidden [&_h2]:truncate [&_h2]:pr-8 [&_h2]:text-left"
    >
      <nav aria-label="Main" className="min-w-0">
        <ul className="flex flex-col gap-1">
          {sections.map((section) => {
            const SectionLink = section.asLink ?? linkComponent;

            if (!('links' in section)) {
              return (
                <li key={section.title}>
                  <SheetClose asChild>
                    <SectionLink href={section.href} className={rowClassName}>
                      {section.title}
                    </SectionLink>
                  </SheetClose>
                </li>
              );
            }

            return (
              <li key={section.title}>
                <CollapsibleRoot>
                  <CollapsibleTrigger className={cn(rowClassName, 'group')}>
                    {section.title}
                    <ChevronDown
                      aria-hidden="true"
                      className="text-fuselage-500 dark:text-fuselage-300 size-4 shrink-0 transition-transform duration-200 ease-out group-data-[state=open]:rotate-180"
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <ul className="border-fuselage-200 dark:border-fuselage-700 mt-1 ml-3 flex flex-col gap-1 border-l pl-2">
                      {section.links.map((link) => {
                        const LinkComponent = link.asLink ?? SectionLink;
                        return (
                          <li key={link.title}>
                            <SheetClose asChild>
                              <LinkComponent
                                href={link.href}
                                className={childClassName}
                              >
                                <span className="text-fuselage-800 dark:text-fuselage-50 text-sm font-medium">
                                  {link.title}
                                </span>
                                <span className="text-fuselage-500 dark:text-fuselage-300 text-xs leading-snug">
                                  {link.description}
                                </span>
                              </LinkComponent>
                            </SheetClose>
                          </li>
                        );
                      })}
                    </ul>
                  </CollapsibleContent>
                </CollapsibleRoot>
              </li>
            );
          })}
        </ul>
      </nav>
    </SheetContent>
  </SheetRoot>
);
