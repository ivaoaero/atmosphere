import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '@components/atoms/label';

const meta = {
  title: 'Components/Inputs/Label',
  component: Label,
  tags: ['autodocs'],
  args: {
    children: 'Label',
    hidden: false,
  },
  argTypes: {
    children: {
      description: 'Children text.',
      control: 'text',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    hidden: {
      description: 'Visually hidden label.',
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof Label>;

export const Default = {} satisfies Story;
