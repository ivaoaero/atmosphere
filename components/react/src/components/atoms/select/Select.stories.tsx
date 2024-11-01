import type { Meta, StoryObj } from '@storybook/react';

import { Select } from '@components/molecules/select';

const meta = {
  title: 'Components/Inputs/Select',
  component: Select,
  args: {
    items: [
      { value: '1', label: 'One' },
      { value: '2', label: 'Two' },
      { value: '3', label: 'Three' },
    ],
    placeholder: 'Select an option',
    position: 'item-aligned',
  },
  argTypes: {
    disabled: {
      name: 'Disabled',
      description: 'Whether the select is disabled.',
      control: 'boolean',
    },
    items: {
      name: 'Items',
      description: 'List of items to select from.',
    },
    open: {
      name: 'Open',
      description: 'Whether the select is open.',
      control: 'boolean',
    },
    placeholder: {
      name: 'Placeholder',
      description: 'Placeholder text for the select.',
      control: 'text',
    },
    position: {
      name: 'Position',
      description: 'Position of the select.',
      control: 'select',
      options: ['popper', 'item-aligned'],
    },
    value: {
      name: 'Value',
      description: 'Value of the select.',
      control: 'text',
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const SelectList = {} satisfies Story;

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
