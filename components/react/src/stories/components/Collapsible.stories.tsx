import { action } from '@storybook/addon-actions';

import type { Meta, StoryObj } from '@storybook/react';

import { Collapsible } from '@components/molecules/collapsible';

const meta = {
  title: 'DataDisplay/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
  args: {
    trigger: 'Collapsible Trigger',
    children: 'Collapsible Content',
    onOpenChange: action('open change'),
  },
  argTypes: {
    children: {
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    disabled: {
      type: 'boolean',
      description: 'Whether the collapsible is disabled.',
    },
    open: {
      type: 'boolean',
      description:
        'Whether the collapsible is open. Cannot be used with `defaultOpen`!',
      if: {
        arg: 'defaultOpen',
        exists: false,
      },
    },
    defaultOpen: {
      type: 'boolean',
      description:
        'Sets the collapsible initially open. Cannot be used with `open`!',
      if: {
        arg: 'open',
        exists: false,
      },
    },
  },
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default = {} satisfies Story;

export const DefaultOpen = {
  args: {
    defaultOpen: true,
  },
} satisfies Story;
