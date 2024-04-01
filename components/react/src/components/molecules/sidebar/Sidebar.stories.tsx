import { Home, SettingsIcon, UsersIcon } from 'lucide-react';

import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from '@components/molecules/sidebar';

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  decorators: (Story) => {
    return (
      <div className="flex">
        <Story />
        <div />
      </div>
    );
  },
  args: {
    items: [
      {
        title: 'Dashboard',
        description: 'Dashboard',
        icon: <Home />,
        href: '/dashboard',
        isActive: true,
      },
      {
        title: 'Users',
        description: 'Users',
        icon: <UsersIcon />,
        href: '/users',
      },
      {
        title: 'Settings',
        description: 'Settings',
        icon: <SettingsIcon />,
        href: '/settings',
      },
    ],
    isDefaultOpen: true,
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
