import { action } from '@storybook/addon-actions';

import type { Meta, StoryObj } from '@storybook/react';

import { Select } from '@components/molecules/select';

const meta = {
  title: 'Forms/Inputs/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    items: [
      { value: '1', label: 'One' },
      { value: '2', label: 'Two' },
      { value: '3', label: 'Three' },
    ],
    placeholder: 'Select an option',
    position: 'item-aligned',
    onValueChange: action('value change'),
    onOpenChange: action('open change'),
  },
  argTypes: {
    disabled: {
      type: 'boolean',
      description: 'Whether the select is disabled.',
    },
    items: {
      description: 'List of items to select from.',
      table: {
        type: {
          summary: 'SelectItemProps[]',
        },
      },
    },
    open: {
      type: 'boolean',
      description:
        'Whether the select is open. Cannot be used with `defaultOpen`!',
      if: {
        arg: 'defaultOpen',
        exists: false,
      },
    },
    defaultOpen: {
      type: 'boolean',
      description:
        'Sets the select initially open. Cannot be used with `open`!',
      if: {
        arg: 'open',
        exists: false,
      },
    },
    placeholder: {
      description: 'Placeholder text for the select.',
      control: 'text',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    position: {
      description: 'Position of the select.',
      control: 'select',
      options: ['popper', 'item-aligned'],
    },
    value: {
      type: 'string',
      description:
        'Controlled value of the select. Cannot be used with `defaultValue`!',
      if: {
        arg: 'defaultValue',
        exists: false,
      },
    },
    defaultValue: {
      type: 'string',
      description:
        'Sets the initial value of the select. Cannot be used with `value`!',
      if: {
        arg: 'value',
        exists: false,
      },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const Default = {} satisfies Story;

export const SelectListWithGroups = {
  args: {
    items: {
      Group1: [
        { value: '1', label: 'One' },
        { value: '2', label: 'Two' },
        { value: '3', label: 'Three' },
      ],
      Group2: [
        { value: '4', label: 'Four' },
        { value: '5', label: 'Five' },
        { value: '6', label: 'Six' },
      ],
    },
  },
} satisfies Story;
