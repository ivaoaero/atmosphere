import { action } from '@storybook/addon-actions';

import type { Meta, StoryObj } from '@storybook/react';

import { ToggleGroup } from '@components/molecules/toggle-group';

const meta = {
  title: 'Forms/Inputs/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs'],
  args: {
    type: 'single',
    items: [
      { label: 'Item 1', value: '1' },
      { label: 'Item 2', value: '2' },
      { label: 'Item 3', value: '3' },
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
    variant: {
      description: 'Appearance variant of the toggle.',
      control: 'inline-radio',
      options: ['default', 'outline'],
      table: {
        defaultValue: {
          summary: 'default',
        },
      },
    },
    size: {
      description: 'Size of the toggle.',
      control: 'inline-radio',
      options: ['default', 'sm', 'lg'],
      table: {
        defaultValue: {
          summary: 'default',
        },
      },
    },
    type: {
      control: 'inline-radio',
      options: ['single', 'multiple'],
    },
    disabled: {
      type: 'boolean',
    },
    rovingFocus: {
      type: 'boolean',
    },
    loop: {
      type: 'boolean',
    },
  },
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

export const Default = {} satisfies Story;
