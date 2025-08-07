import {
  History,
  Home,
  Power,
  SettingsIcon,
  UsersIcon,
  WifiOff,
} from 'lucide-react';

import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from '@components/molecules/sidebar';

const meta = {
  title: 'Navigation/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  decorators: (Story) => {
    return (
      <div className={'flex h-screen'}>
        <Story />
        <div className={'size-full bg-fuselage-50 dark:bg-fuselage-950'} />
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
    isDefaultOpen: true,
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

export const CustonActiveCheck = {
  args: {
    isActiveCheck: () => true,
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
