import { action } from '@storybook/addon-actions';

import type { Meta, StoryObj } from '@storybook/react';

import { Accordion } from '@components/molecules/accordion';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  args: {
    type: 'single',
    collapsible: true,
    items: [
      {
        value: '1',
        trigger: 'Accordion Trigger 1',
        children: 'Accordion Content 1',
      },
      {
        value: '2',
        trigger: 'Accordion Trigger 2',
        children: 'Accordion Content 2',
      },
    ],
    onValueChange: action('value change'),
  },
  argTypes: {
    value: {
      type: 'string',
      description: 'Controls the value. Cannot be used with `defaultValue`!',
      if: {
        arg: 'defaultValue',
        exists: false,
      },
      table: {
        type: {
          summary: 'string | string[]',
        },
      },
    },
    defaultValue: {
      type: 'string',
      description: 'Sets the initial value. Cannot be used with `value`!',
      if: {
        arg: 'value',
        exists: false,
      },
      table: {
        type: {
          summary: 'string | string[]',
        },
      },
    },
    type: {
      description: 'Type of the accordion.',
      control: 'inline-radio',
      options: ['single', 'multiple'],
    },
    collapsible: {
      description:
        'Whether the accordion is collapsible. Only works with `type`: `single`.',
      if: {
        arg: 'type',
        eq: 'single',
      },
    },
    disabled: {
      type: 'boolean',
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default = {} satisfies Story;

export const NotCollapsible = {
  args: {
    collapsible: false,
  },
} satisfies Story;

export const Multiple = {
  args: {
    type: 'multiple',
  },
} satisfies Story;

export const DefaultOpen = {
  args: {
    defaultValue: '2',
  },
} satisfies Story;
