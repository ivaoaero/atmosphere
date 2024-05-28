import type { Meta, StoryObj } from '@storybook/react';

import { ToggleGroup } from '@components/molecules/toggle-group';

const meta = {
  title: 'Components/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs'],
  args: {
    type: 'single',
    items: [
      { label: 'Item 1', value: '1' },
      { label: 'Item 2', value: '2' },
      { label: 'Item 3', value: '3' },
    ],
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
    },
  },
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

export const Default = {} satisfies Story;
