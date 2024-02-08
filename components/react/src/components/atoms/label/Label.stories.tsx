import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '@components/atoms/label/index';

const meta = {
  title: 'Components/Inputs/Label',
  component: Label,
  args: {
    children: 'Label',
    hidden: false,
  },
  argTypes: {
    children: {
      name: 'Children',
      description: 'Children text.',
      control: 'text',
    },
    hidden: {
      name: 'Hidden',
      description: 'Visually hidden label.',
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof Label>;

export const Default = {
  args: {
    children: 'Label',
    hidden: false,
  },
} satisfies Story;
