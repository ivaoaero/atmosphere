import {
  AnchorHTMLAttributes,
  ComponentRef,
  ComponentType,
  createContext,
  Dispatch,
  forwardRef,
  SetStateAction,
  useContext,
  useState,
} from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { NavigationMenuAsLinkProps } from '@components/atoms/navigation-menu/NavigationMenuLink';
import { SidebarAsLinkProps } from '@components/atoms/sidebar';
import { NavigationMenu } from '@components/molecules/navigation-menu';

import { cn } from '@utils/styles';

const StoryRouterContext = createContext<{
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}>({
  value: '/profile',
  setValue: () => {
    throw new Error('setValue function must be overridden in the provider');
  },
});

const StoryLink: ComponentType<SidebarAsLinkProps> = ({
  href,
  className,
  children,
}) => {
  const { value, setValue } = useContext(StoryRouterContext);

  console.log(value, href);

  return (
    <button
      className={className}
      onClick={() => setValue(href)}
      data-active={value === href ? true : undefined}
      disabled={href === '/disabled'}
    >
      {children}
    </button>
  );
};

interface ReactRouterLinkProps extends Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'href'
> {
  to: string;
}

const ReactRouterLink = forwardRef<HTMLAnchorElement, ReactRouterLinkProps>(
  ({ to, ...props }, ref) => <a href={to} ref={ref} {...props} />,
);
ReactRouterLink.displayName = 'ReactRouterLink';

const NavLinkComponent = forwardRef<
  ComponentRef<typeof ReactRouterLink>,
  NavigationMenuAsLinkProps
>(({ href, className, onClick, ...props }, ref) => (
  <ReactRouterLink
    ref={ref}
    to={href}
    onClick={(event) => {
      console.log('clicked a link');
      onClick?.(event);
    }}
    className={cn(className, '')}
    {...props}
  />
));
NavLinkComponent.displayName = ReactRouterLink.displayName;

const meta: Meta = {
  title: 'Navigation/NavigationMenu',
  component: NavigationMenu,
  tags: ['autodocs'],
  decorators: (Story) => {
    const [value, setValue] = useState('/profile');

    return (
      <StoryRouterContext.Provider value={{ value, setValue }}>
        <Story />
      </StoryRouterContext.Provider>
    );
  },
  args: {
    sections: [
      {
        title: 'Getting Started',
        links: [
          {
            title: 'Installation',
            href: '/docs/getting-started/installation',
            description: 'Learn how to install the package.',
          },
          {
            title: 'Usage',
            href: '/docs/getting-started/usage',
            description: 'Learn how to use the package.',
          },
        ],
      },
      {
        title: 'Components',
        links: [
          {
            title: 'Alert Dialog',
            href: '/docs/primitives/alert-dialog',
            description:
              'A modal dialog that interrupts the user with important content and expects a response.',
          },
          {
            title: 'Hover Card',
            href: '/docs/primitives/hover-card',
            description:
              'For sighted users to preview content available behind a link.',
          },
          {
            title: 'Progress',
            href: '/docs/primitives/progress',
            description:
              'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
          },
          {
            title: 'Scroll-area',
            href: '/docs/primitives/scroll-area',
            description: 'Visually or semantically separates content.',
          },
          {
            title: 'Tabs',
            href: '/docs/primitives/tabs',
            description:
              'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
          },
          {
            title: 'Tooltip',
            href: '/docs/primitives/tooltip',
            description:
              'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
          },
        ],
      },
      {
        title: 'Documentation',
        href: '/docs',
      },
      {
        title: 'Profile',
        href: '/profile',
      },
      {
        title: 'Disabled',
        href: '/disabled',
      },
    ],
    asLink: StoryLink,
  },
  argTypes: {
    sections: {
      table: {
        type: {
          summary: 'NavigationMenuSectionProps[]',
        },
      },
    },
    asLink: {
      control: false,
      description:
        'You can provide a custom component that will be used as a link. This is useful for using a custom router or a different link component.',
      table: {
        type: {
          summary: 'ComponentType<NavigationMenuAsLinkProps>',
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NavigationMenu>;

export const Default = {} satisfies Story;

export const ReactRouterLinkStory = {
  name: 'React Router Link',
  args: {
    asLink: NavLinkComponent,
  },
} satisfies Story;
