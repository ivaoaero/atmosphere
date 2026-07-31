import {
  ComponentType,
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

import {
  History,
  Home,
  Power,
  SettingsIcon,
  UsersIcon,
  WifiOff,
} from 'lucide-react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { SidebarAsLinkProps } from '@components/atoms/sidebar';
import { Sidebar } from '@components/molecules/sidebar';

const StoryRouterContext = createContext<Dispatch<SetStateAction<string>>>(
  () => {
    throw new Error('setValue function must be overridden in the provider');
  },
);

const StoryLink: ComponentType<SidebarAsLinkProps> = ({
  href,
  className,
  children,
}) => {
  const setValue = useContext(StoryRouterContext);

  return (
    <button className={className} onClick={() => setValue(href)}>
      {children}
    </button>
  );
};

const meta = {
  title: 'Navigation/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  decorators: (Story, { args }) => {
    const [value, setValue] = useState('');

    return (
      <div className={'flex h-screen [&>:nth-child(2)]:flex-none'}>
        <style>{`
        body {
          padding: 0 !important;
        }
      `}</style>
        <StoryRouterContext.Provider value={setValue}>
          <Story
            args={{
              ...args,
              isActiveCheck: args.isActiveCheck ?? ((href) => href === value),
            }}
          />
        </StoryRouterContext.Provider>
        <div className={'size-full'}></div>
      </div>
    );
  },
  args: {
    items: [
      {
        title: 'Dashboard',
        description: 'Dashboard',
        Icon: Home,
        href: '/dashboard',
      },
      {
        title: 'Users',
        description: 'Users',
        Icon: UsersIcon,
        href: '/users',
      },
      {
        title: 'Settings',
        description: 'Settings',
        Icon: SettingsIcon,
        href: '/settings',
      },
    ],
    isDefaultOpen: true,
    asLink: StoryLink,
  },
  argTypes: {
    items: {
      table: {
        type: {
          summary: 'SidebarItemProps[]',
        },
      },
    },
    isActiveCheck: {
      table: {
        type: {
          summary: '(href: string) => boolean',
        },
      },
    },
    asLink: {
      control: 'object',
      table: {
        type: {
          summary: 'ComponentType<SidebarAsLinkProps>',
        },
      },
    },
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default = {} satisfies Story;

export const DefaultClosed = {
  args: {
    isDefaultOpen: false,
  },
} satisfies Story;

export const DefaultLink = {
  args: {
    asLink: undefined,
  },
} satisfies Story;

export const CustomActiveCheck = {
  args: {
    isActiveCheck: () => true,
  },
} satisfies Story;

export const IsActiveProperty = {
  args: {
    items: [
      {
        title: 'Dashboard',
        description: 'Dashboard',
        Icon: Home,
        href: '/dashboard',
        isActive: true,
      },
      {
        title: 'Users',
        description: 'Users',
        Icon: UsersIcon,
        href: '/users',
      },
      {
        title: 'Settings',
        description: 'Settings',
        Icon: SettingsIcon,
        href: '/settings',
      },
    ],
    isActiveCheck: () => false,
  },
} satisfies Story;

export const WithGroups = {
  args: {
    items: [
      {
        title: 'Dashboard',
        description: 'Dashboard',
        Icon: Home,
        href: '/dashboard',
      },
      {
        title: 'Disconnections',
        Icon: WifiOff,
        items: [
          {
            title: 'History',
            description: 'Recent disconnects',
            Icon: History,
            href: '/disconnections',
          },
          {
            title: 'Force Disconnect',
            description: 'Kill connection',
            Icon: Power,
            href: '/disconnections/force',
          },
        ],
      },
    ],
  },
} satisfies Story;

export const WithOverflow = {
  args: {
    items: [
      {
        title: 'Dashboard Extra Long Title So it gives me a nice Overflow',
        description:
          'Dashboard Extra Long Title So it gives me a nice Overflow',
        Icon: Home,
        href: '/dashboard',
      },
      {
        title: 'Disconnections Extra Long Title So it gives me a nice Overflow',
        Icon: WifiOff,
        items: [
          {
            title: 'History Extra Long Title So it gives me a nice Overflow',
            description:
              'Recent disconnects Extra Long Title So it gives me a nice Overflow',
            Icon: History,
            href: '/disconnections',
          },
          {
            title:
              'Force Disconnect Extra Long Title So it gives me a nice Overflow',
            description:
              'Kill connection Extra Long Title So it gives me a nice Overflow',
            Icon: Power,
            href: '/disconnections/force',
          },
        ],
      },
    ],
  },
} satisfies Story;
