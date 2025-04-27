import { action } from '@storybook/addon-actions';

import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from '@components/molecules/tabs';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  args: {
    tabs: {
      tab1: {
        trigger: 'Tab 1',
        content: 'Tab 1 content',
      },
      tab2: {
        trigger: 'Tab 2',
        content: 'Tab 2 content',
      },
    },
    onValueChange: action('value change'),
  },
  argTypes: {
    value: {
      type: 'string',
      description:
        'Controls the seleted tab value. Cannot be used with `defaultValue`!',
      if: {
        arg: 'defaultValue',
        exists: false,
      },
    },
    defaultValue: {
      type: 'string',
      description: 'Sets the initial tab value. Cannot be used with `value`!',
      if: {
        arg: 'value',
        exists: false,
      },
    },
    activationMode: {
      description: 'Whether a tab is activated automatically or manually.',
      options: ['automatic', 'manual'],
      control: 'inline-radio',
      table: {
        defaultValue: {
          summary: 'automatic',
        },
        type: {
          summary: 'automatic | manual',
        },
      },
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default = {} satisfies Story;

export const DefaultValue = {
  args: {
    defaultValue: 'tab1',
  },
} satisfies Story;
