import {
  CreditCard,
  Mail,
  MessageSquare,
  Plus,
  Settings,
  User,
  UserPlus,
  Users,
} from 'lucide-react';

import type { Meta, StoryObj } from '@storybook/react';

import { DropdownMenu } from '@components/molecules/dropdown-menu';

const meta = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
  args: {
    trigger: 'Trigger',
    label: 'Label',
    items: [
      [
        {
          label: 'Item 1',
        },
        {
          label: 'Item 2',
        },
        {
          label: 'Item 3',
        },
      ],
    ],
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default = {} satisfies Story;

export const GroupedWithIconsAndShortcuts = {
  args: {
    label: 'My Account',
    items: [
      [
        {
          label: 'Profile',
          icon: <User className="mr-2 h-4 w-4" />,
          shortcut: '⇧⌘P',
        },
        {
          label: 'Billing',
          icon: <CreditCard className="mr-2 h-4 w-4" />,
          shortcut: '⇧⌘B',
        },
        {
          label: 'Settings',
          icon: <Settings className="mr-2 h-4 w-4" />,
          shortcut: '⌘S',
        },
      ],
      [
        {
          label: 'Team',
          icon: <Users className="mr-2 h-4 w-4" />,
        },
        {
          label: 'Invite Users',
          icon: <UserPlus className="mr-2 h-4 w-4" />,
          subItems: [
            {
              label: 'Email',

              icon: <Mail className="mr-2 h-4 w-4" />,
            },
            {
              label: 'Message',

              icon: <MessageSquare className="mr-2 h-4 w-4" />,
            },
          ],
        },
        {
          label: 'New Team',
          icon: <Plus className="mr-2 h-4 w-4" />,
          shortcut: '⌘+T',
          disabled: true,
        },
      ],
    ],
  },
} satisfies Story;

export const Checkbox = {
  args: {
    label: 'Choices',
    items: {
      type: 'checkbox',
      items: [
        {
          label: 'Item 1',
          checked: true,
        },
        {
          label: 'Item 2',
        },
        {
          label: 'Item 3',
          disabled: true,
        },
      ],
    },
  },
} satisfies Story;

export const Radio = {
  args: {
    label: 'Choices',
    items: {
      type: 'radio',
      value: 'Item 1',
      items: [
        {
          label: 'Custom Label',
          value: 'Item 1',
        },
        {
          value: 'Item 2',
        },
        {
          value: 'Item 3',
          disabled: true,
        },
      ],
    },
  },
} satisfies Story;

export const Mixed = {
  args: {
    label: 'Mixed',
    items: [
      [
        {
          label: 'Team',
          icon: <Users className="mr-2 h-4 w-4" />,
        },
        {
          label: 'Invite Users',
          icon: <UserPlus className="mr-2 h-4 w-4" />,
          subItems: [
            {
              label: 'Email',

              icon: <Mail className="mr-2 h-4 w-4" />,
            },
            {
              label: 'Message',

              icon: <MessageSquare className="mr-2 h-4 w-4" />,
            },
          ],
        },
        {
          label: 'New Team',
          icon: <Plus className="mr-2 h-4 w-4" />,
          shortcut: '⌘+T',
          disabled: true,
        },
      ],
      {
        type: 'radio',
        value: 'Item 1',
        items: [
          {
            label: 'Custom Label',
            value: 'Item 1',
          },
          {
            value: 'Item 2',
          },
          {
            value: 'Item 3',
            disabled: true,
          },
        ],
      },
      {
        type: 'checkbox',
        items: [
          {
            label: 'Item 1',
            checked: true,
          },
          {
            label: 'Item 2',
          },
          {
            label: 'Item 3',
            disabled: true,
          },
        ],
      },
    ],
  },
} satisfies Story;
