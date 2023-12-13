import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '@components/atoms/badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      name: 'Variant',
      description: 'Appearance variant of the badge.',
      control: 'select',
      options: ['flat', 'filled', 'leaked'],
    },
    color: {
      name: 'Color',
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
    },
    size: {
      name: 'Size',
      description: 'Size of the badge.',
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    text: {
      name: 'Text',
      description: 'Text content of the badge.',
      type: 'string',
      control: 'text',
    },
    hasDot: {
      name: 'Dot',
      description: 'Show a dot next to the badge text.',
      control: 'boolean',
    },
    pill: {
      name: 'Pill',
      description: 'Display badge as a pill.',
      control: 'boolean',
    },
    removeCallback: {
      name: 'Remove button',
      description: 'Callback to display a remove button.',
      action: 'clicked',
    },
  },
  args: {
    text: 'Badge Text',
    size: 'sm',
    variant: 'filled',
    hasDot: false,
    pill: false,
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
  },
} satisfies Story;
