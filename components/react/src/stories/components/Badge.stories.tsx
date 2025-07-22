import { action } from '@storybook/addon-actions';

import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '@components/atoms/badge';

const meta = {
  title: 'DataDisplay/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: {
    text: 'Badge Text',
    size: 'sm',
    variant: 'filled',
    hasDot: false,
    pill: false,
  },
  argTypes: {
    variant: {
      description: 'Appearance variant of the badge.',
      control: 'select',
      options: ['flat', 'filled', 'leaked'],
      table: {
        defaultValue: {
          summary: 'filled',
        },
      },
    },
    color: {
      description: 'Color of the badge.',
      control: 'select',
      options: [
        'gray',
        'red',
        'yellow',
        'orange',
        'green',
        'blue',
        'indigo',
        'purple',
        'pink',
      ],
      table: {
        defaultValue: {
          summary: 'gray',
        },
      },
    },
    size: {
      description: 'Size of the badge.',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: {
        defaultValue: {
          summary: 'sm',
        },
      },
    },
    text: {
      description: 'Text content of the badge.',
      type: 'string',
    },
    hasDot: {
      description: 'Show a dot next to the badge text.',
      type: 'boolean',
    },
    pill: {
      description: 'Display badge as a pill.',
      type: 'boolean',
    },
    removeCallback: {
      description: 'Callback to display a remove button.',
      control: 'select',
      options: ['yes', 'no'],
      mapping: {
        yes: action('remove button clicked'),
        no: undefined,
      },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default = {
  args: {
    color: 'gray',
    removeCallback: undefined,
    hasDot: true,
  },
} satisfies Story;

export const WithRemoveButton = {
  args: {
    color: 'gray',
    removeCallback: action('remove button clicked'),
  },
} satisfies Story;
